import request from "supertest";
import app from "../src/app.js";
describe("GET /api/health", () => {
  it("should return a success message", async () => {
    const res = await request(app).get("/api/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Server is running");
  });
});