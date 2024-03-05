import axios from "axios";

const client = axios.create({
  baseURL: "https://restful-booker.herokuapp.com/",
  timeout: 1000,
});

describe("ping", () => {
  it("should return success", async () => {
    // Why 201 Created?
    const { data, status } = await client.get("ping");

    expect(data).toBe("Created");
    expect(status).toBe(201);

    client.get("ping").then(({ data, status }) => {
      expect(data).toBe("Created");
      expect(status).toBe(201);
    });
  });
});
