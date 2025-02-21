const {
  parseTrackingProgress,
} = require("../../../../src/learn-test/test-driven-development/chap4/trackingProgressParser.js");

describe("An Expression Parser for Tracking Progress", () => {
  it("should translate d to a half of dev day", () => {
    expect(parseTrackingProgress("d")).toEqual({
      Dev: 0.5,
    });
  });

  it('should translate D to a dev day"', () => {
    expect(parseTrackingProgress("D")).toEqual({
      Dev: 1.0,
    });
  });

  it("should translates dD to one and a half dev days", () => {
    expect(parseTrackingProgress("Dd")).toEqual({
      Dev: 1.5,
    });
  });

  it("should translate q to a half of qa day", () => {
    expect(parseTrackingProgress("q")).toEqual({
      Qa: 0.5,
    });
  });

  it('should translate Q to a dev day"', () => {
    expect(parseTrackingProgress("Q")).toEqual({
      Qa: 1.0,
    });
  });

  it("should translates qQ to one and a half dev days", () => {
    expect(parseTrackingProgress("qQ")).toEqual({
      Qa: 1.5,
    });
  });

  it("should translates qDdQ to one and a half dev days, and one and a half qa days", () => {
    expect(parseTrackingProgress("qDdQ")).toEqual({
      Qa: 1.5,
      Dev: 1.5,
    });
  });
});
