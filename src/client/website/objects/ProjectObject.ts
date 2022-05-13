export class ProjectObject {
    private readonly name: string
    private readonly description: string
    private readonly stack: string[]
    private readonly source: string

    constructor(name: string, source: string, description: string, stack: string[]) {
        this.name = name
        this.source = source
        this.description = description
        this.stack = stack
    }

    get getName(): string {
        return this.name;
    }

    get getSource(): string {
        return this.source;
    }

    get getDescription(): string {
        return this.description;
    }

    get getStack(): string[] {
        return this.stack;
    }
}