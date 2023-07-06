import { StatusCodes } from "http-status-codes";
import request from "supertest";

const url = "http://localhost:3000";
let userId: string;

describe("POST /api/v1/users/", () => {
  it("should add user to list", async () => {
    const payload = {
      first_name: "Swadesh",
      last_name: "Nayak",
      email: "swadesh@email.com",
      mob_no: "9938562946",
      address: "Puri"
    };
    const res = await request(url)
      .post("/api/v1/users/")
      .send(payload)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    userId = res.body.id;

    expect(res.body.first_name).toEqual(payload.first_name);
    expect(res.body.last_name).toEqual(payload.last_name);
    expect(res.body.email).toEqual(payload.email);
    expect(res.body.mob_no).toEqual(payload.mob_no);
    expect(res.body.address).toEqual(payload.address);
  });

  it("should fail if wrong email format is provided", async () => {
    const payload = {
      first_name: "Swadesh",
      last_name: "Nayak",
      email: "swadesh@",
      mob_no: "9938562946",
      address: "Puri"
    };
    await request(url)
      .post("/api/v1/users/")
      .send(payload)
      .expect(StatusCodes.NOT_ACCEPTABLE);
  });

  it("should fail if any payload field is empty", async () => {
    const payload = {
      first_name: "Swadesh",
      last_name: "",
      email: "swadesh@",
      mob_no: "9938562946",
      address: "Puri"
    };
    await request(url)
      .post("/api/v1/users/")
      .send(payload)
      .expect(StatusCodes.NOT_ACCEPTABLE);
  });
});

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
    await request(url).get(`/api/v1/users/${userId}`).expect(200);
  });

  it("should have properties", async () => {
    const res = await request(url).get(`/api/v1/users/${userId}`);

    expect(res.body).toHaveProperty("user");

    expect(res.body.user[0].id).toEqual(userId);
    expect(res.body.user[0].first_name).toEqual("Swadesh");
    expect(res.body.user[0].last_name).toEqual("Nayak");
    expect(res.body.user[0].email).toEqual("swadesh@email.com");
    expect(res.body.user[0].mob_no).toEqual("9938562946");
    expect(res.body.user[0].address).toEqual("Puri");
  });
});
