"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet() {
    let date = new Date();
    let message = "Node + TypeScript<br>Date: ";
    message += date.toLocaleDateString();
    return message;
}
const util = {
    greet
};
exports.default = util;
