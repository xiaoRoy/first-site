const { sum } = require("../../src/learn-test/first.js");

test("should the sum of 1 and 2 equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});

describe("sum", () => {
  it("should be able to add two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
