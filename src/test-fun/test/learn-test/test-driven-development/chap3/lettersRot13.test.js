const rotateBy13Places = require("../../../../src/learn-test/test-driven-development/chap3/lettersRot13");

describe("Letters rot by 13 places", () => {
  it("should return 13th letter for the letter offset less than 26", () => {
    const message = "ABC";
    const expected = "NOP";

    expect(rotateBy13Places(message)).toEqual(expected);
  });

  it("should return 13th letter for the letter offset greater than 26", () => {
    const message = "NOP";
    const expected = "ABC";

    expect(rotateBy13Places(message)).toEqual(expected);
  });
  
});
