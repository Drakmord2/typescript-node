"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Util {
    static greet(date) {
        let message = "Node + TypeScript<br>Date: ";
        message += date.toLocaleDateString();
        return message;
    }
}
exports.default = Util;
