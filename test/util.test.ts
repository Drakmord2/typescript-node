
import Util from "../src/util";

test("[Func] greet", ()=>{
    const date      = new Date();
    const message   = "Node + TypeScript<br>Date: " + new Date().toLocaleDateString();

    expect(Util.greet(date)).toBe(message);
});
