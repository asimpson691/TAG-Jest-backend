import { determineTriangle } from "./triangle";

describe("determineTriangle", () => {
  it("shall not identify a triangle where a + b < c", () => {
    expect(determineTriangle(1, 2, 3)).toBe("not a triangle");
  });

  it("shall identify an equilateral triangle where a, b and c are all equal", () => {
    expect(determineTriangle(6, 6, 6)).toBe("equilateral");
  });

  it("shall identify an isosceles triangle where 2 sides are equal", () => {
    expect(determineTriangle(6, 7, 6)).toBe("isosceles");
  });

  it("shall identify a scalene triangle where no sides are equal", () => {
    expect(determineTriangle(6, 7, 8)).toBe("scalene");
  });

  it.each([
    ["a", 4, 5], // any one length is not a number
    [3, "a", 5],
    [3, 4, "a"],
  ])("shall throw an 'Unexpected Input' error for %d, %d, %d", (a, b, c) => {
    try {
      determineTriangle(a, b, c);
    } catch (err) {
      expect(err.message).toBe("Unexpected Input");
    }
  });
});
