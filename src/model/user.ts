
class User {
    public hash: string;
    private id: number;

    constructor(id=0) {
        this.id     = id;
        this.hash   = id+"az09";
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id     = id;
        this.hash   = id+"az09";
    }
}

export default User;
