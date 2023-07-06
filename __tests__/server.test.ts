import request from "supertest";

const url = "http://localhost:3000";

describe("Get Users", () => {
  // test("should be listening", async () => {
  //   const res = await request("http://localhost:3000").get("/api/v1/users/");
  //   console.log(res.body);
  //   expect(res.body).toEqual({ message: "All Good to Go!" });
  // });

  it("should be listening", async () => {
    await request(url).get("/api/v1/users/").expect(200);
  });
});
