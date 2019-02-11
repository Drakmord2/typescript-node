"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("../src/util"));
test("[Func] Util", () => {
    const date = new Date();
    const message = "Node + TypeScript<br>Date: " + new Date().toLocaleDateString();
    expect(util_1.default.greet(date)).toBe(message);
});
