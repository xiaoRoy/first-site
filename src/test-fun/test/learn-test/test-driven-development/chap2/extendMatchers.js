expect.extend({
  toBelongToDepartment(user, expectedDepartment) {
    const result = user.department === expectedDepartment;

    const message = result
      ? "department matched"
      : `expected ${expectedDepartment} to match ${user.department}`;

    return {
      pass: result,
      message: () => message,
    };
  },
});
