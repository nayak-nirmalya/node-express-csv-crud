import request from "supertest";

const url = "http://localhost:3000";

describe("GET /api/v1/users/", () => {
  it("should be listening", async () => {
    await request(url).get("/api/v1/users/").expect(200);
  });

  it("should return users list with length greator than 0", async () => {
    const res = await request(url).get("/api/v1/users/");
    expect(res.body.users.length).toBeGreaterThan(0);
  });

  it("should have properties", async () => {
    const res = await request(url).get("/api/v1/users/");

    expect(res.body).toHaveProperty("users");

    expect(res.body.users[0]).toHaveProperty("id");
    expect(res.body.users[0]).toHaveProperty("first_name");
    expect(res.body.users[0]).toHaveProperty("last_name");
    expect(res.body.users[0]).toHaveProperty("email");
    expect(res.body.users[0]).toHaveProperty("mob_no");
    expect(res.body.users[0]).toHaveProperty("address");
  });

  it("responds with json", async () => {
    await request(url).get("/api/v1/users/").expect("Content-Type", /json/);
  });
});

describe("GET /api/v1/users/:id", () => {
  it("should be listening", async () => {
    await request(url)
      .get("/api/v1/users/3d7f92a3-7888-4b11-87bb-dcc63838c612")
      .expect(200);
  });

  it("should have properties", async () => {
    const res = await request(url).get(
      "/api/v1/users/3d7f92a3-7888-4b11-87bb-dcc63838c612"
    );

    expect(res.body).toHaveProperty("user");

    expect(res.body.user[0].id).toEqual("3d7f92a3-7888-4b11-87bb-dcc63838c612");
    expect(res.body.user[0].first_name).toEqual("Kaibalya");
    expect(res.body.user[0].last_name).toEqual("Nayak");
    expect(res.body.user[0].email).toEqual("kaibalya@gmail.com");
    expect(res.body.user[0].mob_no).toEqual("8763070876");
    expect(res.body.user[0].address).toEqual("India");
  });
});
