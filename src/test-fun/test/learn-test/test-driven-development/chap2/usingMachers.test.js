const {
  forEach,
} = require("../../../../src/learn-test/test-driven-development/chap2/forEach.js");
require("./extendMatchers.js");

describe("equality", () => {
  it("toEqual basic usage", () => {
    expect(1 + 1).toEqual(2);
    expect("Smith").toEqual("Smith");
    expect({ name: "Smith" }).toEqual({ name: "Smith" });
  });

  it("toBe basic usage", () => {
    expect(1 + 1).toBe(2);
    expect("Smith").toBe("Smith");
    expect({ name: "Smith" }).not.toBe({ name: "Smith" });
  });

  it("match regular expression", () => {
    expect("Smith").toMatch(/\w+/);
  });

  it("match numbers", () => {
    expect("123-4567-8900").toMatch(/^\d{3}-\d{4}-\d{4}$/);
  });

  it("compare numbers", () => {
    expect(1 + 2).toBeGreaterThan(2);
    expect(1 + 2).toBeLessThanOrEqual(4);
  });
});

describe("Matcher for Array and Object", () => {
  const users = [{ name: "one" }, { name: "zero" }];
  it("match array", () => {
    expect(users).toContainEqual({ name: "one" });
    expect(users).not.toContain({ name: "one" });
  });

  const user = {
    name: "one",
    address: "none",
  };
  it("match object", () => {
    expect(user.name).toBeDefined();
    expect(user.age).not.toBeDefined();
  });
});

describe("expect containing", () => {
  it("string contains", () => {
    const giveNameMatcher = expect.stringContaining("Smith");
    expect("Smith Zeros").toEqual(giveNameMatcher);
  });

  it("array contains", () => {
    const users = ["Zeros", "Ones", "Fours"];
    const userMatchers = expect.arrayContaining(["Zeros", "Fours"]);
    expect(users).toEqual(userMatchers);
  });

  it("object contains", () => {
    const user = {
      name: "Smith",
      address: "none",
      projects: [{ name: "Tell a good story" }, { name: "Tell a bad story" }],
    };

    const userMatcher = expect.objectContaining({
      name: expect.stringContaining("Smith"),
      projects: expect.arrayContaining([
        { name: expect.stringContaining("good") },
      ]),
    });

    expect(user).toEqual(userMatcher);
  });
});

describe("expect extend", () => {
  it("department matcher", () => {
    const employee = { name: "zeros", department: "IT" };
    expect(employee).toBelongToDepartment("IT");
  });
});

describe("forEach mock function", () => {
  const callbackMock = jest.fn((item) => 42 + item);
  it("should run as expected", () => {
    forEach([0, 1], callbackMock);

    expect(callbackMock.mock.calls).toHaveLength(2);

    const calls = callbackMock.mock.calls;
    const firstCall = calls[0];
    const secondCall = calls[1];

    expect(firstCall[0]).toBe(0);
    expect(secondCall[0]).toBe(1);

    expect(callbackMock.mock.results[0].value).toBe(42);
  });
});

describe("mock implementation", () => {
  it("mock implementation", () => {
    const callbackMock = jest.fn().mockImplementation((item) => 42);
    forEach([0, 1], callbackMock);
    expect(callbackMock.mock.calls).toHaveLength(2);
    expect(callbackMock.mock.results[1].value).toBe(42);
  });
});
