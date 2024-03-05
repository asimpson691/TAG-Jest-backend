import axios from "axios";

const client = axios.create({
  baseURL: "https://restful-booker.herokuapp.com/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

describe("create", () => {
  it("should create a booking", async () => {
    const body = {
      firstname: "Harry",
      lastname: "Bosch",
      totalprice: 695,
      depositpaid: true,
      bookingdates: {
        checkin: "2024-03-10",
        checkout: "2024-03-15",
      },
      additionalneeds: "Fat Tire beer",
    };

    const { data: postData, status: postStatus } = await client.post(
      "booking",
      body
    );

    expect(postStatus).toBe(200);
    expect(postData).toEqual({
      bookingid: expect.any(Number),
      booking: {
        firstname: body.firstname,
        lastname: body.lastname,
        totalprice: body.totalprice,
        depositpaid: body.depositpaid,
        bookingdates: body.bookingdates,
        additionalneeds: body.additionalneeds,
      },
    });

    const { data: getData, status: getStatus } = await client.get(
      `booking/${postData.bookingid}`
    );

    expect(getStatus).toBe(200);
    expect(getData).toEqual({
      firstname: body.firstname,
      lastname: body.lastname,
      totalprice: body.totalprice,
      depositpaid: body.depositpaid,
      bookingdates: body.bookingdates,
      additionalneeds: body.additionalneeds,
    });
  });
});
