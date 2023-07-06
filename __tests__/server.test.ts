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

    expect(res.body.users[1]).toHaveProperty("id");
    expect(res.body.users[1]).toHaveProperty("first_name");
    expect(res.body.users[1]).toHaveProperty("last_name");
    expect(res.body.users[1]).toHaveProperty("email");
    expect(res.body.users[1]).toHaveProperty("mob_no");
    expect(res.body.users[1]).toHaveProperty("address");
  });

  it("responds with json", async () => {
    await request(url).get("/api/v1/users/").expect("Content-Type", /json/);
  });
});

describe("GET /api/v1/users/:id", () => {
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

    expect(res.body.users[1]).toHaveProperty("id");
    expect(res.body.users[1]).toHaveProperty("first_name");
    expect(res.body.users[1]).toHaveProperty("last_name");
    expect(res.body.users[1]).toHaveProperty("email");
    expect(res.body.users[1]).toHaveProperty("mob_no");
    expect(res.body.users[1]).toHaveProperty("address");
  });

  it("responds with json", async () => {
    await request(url).get("/api/v1/users/").expect("Content-Type", /json/);
  });
});
