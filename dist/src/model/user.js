"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id = 0) {
        this.id = id;
        this.hash = id + "az09";
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
        this.hash = id + "az09";
    }
}
exports.default = User;
