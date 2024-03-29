export function from(source) {
    return new From(source);
}

class From {
    constructor(source) {
        if (!(this instanceof From)) {
            return new From(source);
        }
        this.source = source;
    }

    as(alias) {
        this.alias = alias;
        return this;
    }

    async import(module) {
        try {
            const source = await import(this.source);
            const alias = this.alias || module;

            if (typeof window !== 'undefined') {
                window[alias] = source[module];
            } else {
                global[alias] = source[module];
            }
            return source[module];
        } catch (error) {
            console.error(`Error importing module ${this.module}:`, error);
            return null;
        }
    }
}