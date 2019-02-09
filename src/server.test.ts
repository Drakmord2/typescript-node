import req from "supertest";
import server from "./server";

test("[GET] /", async () => {
  const res = await req(server).get("/");
  expect(res.text).toBe("Node + TypeScript");
});

test("[GET] /relatorio", async () => {
  const res = await req(server).get("/relatorio");
  let result = res.text.split("<pre>")[1];
  result = result.split("</pre>")[0];
  expect(result).toBe("Cannot GET /relatorio");
});
