const determineTriangle = (a, b, c) => {
  if (isNaN(a) || isNaN(b) || isNaN(b)) {
    throw new Error("Unexpected Input");
  }

  if (a + b <= c || b + c <= a || c + a <= b) {
    return "not a triangle";
  }

  if (a === b && b === c) {
    return "equilateral";
  }

  if (a === b || b === c || c === a) {
    return "isosceles";
  }

  return "scalene";
};

module.exports = {
  determineTriangle,
};
