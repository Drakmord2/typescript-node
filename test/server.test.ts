import req from "supertest";
import server from "../src/server";

test("[GET] /user", async () => {
  const res = await req(server).get("/user");

  const message = "User: 1<br>Hash: 1az09";

  expect(res.text).toBe(message);
});

test("[GET] /report", async () => {
  const res = await req(server).get("/report");

  let result    = res.text.split("<pre>")[1];
  result        = result.split("</pre>")[0];

  expect(result).toBe("Cannot GET /report");
});
