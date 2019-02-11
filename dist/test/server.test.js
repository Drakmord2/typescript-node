"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../src/server"));
test("[GET] /user", () => __awaiter(this, void 0, void 0, function* () {
    const res = yield supertest_1.default(server_1.default).get("/user");
    const message = "User: 1<br>Hash: 1az09";
    expect(res.text).toBe(message);
}));
test("[GET] /report", () => __awaiter(this, void 0, void 0, function* () {
    const res = yield supertest_1.default(server_1.default).get("/report");
    let result = res.text.split("<pre>")[1];
    result = result.split("</pre>")[0];
    expect(result).toBe("Cannot GET /report");
}));
