import { fireEvent, render } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Login Form", () => {
  it("should handles form submission correctly", () => {
    const onSubmissionMock = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <LoginForm onSubmit={onSubmissionMock}></LoginForm>
    );

    const inputUsername = getByPlaceholderText("Username");
    const inputPassword = getByPlaceholderText("Password");

    const buttonSubmit = getByText("Login");

    fireEvent.change(inputUsername, { target: { value: "test-user" } });
    fireEvent.change(inputPassword, { target: { value: "test-password" } });

    fireEvent.click(buttonSubmit);

    expect(onSubmissionMock).toHaveBeenCalledWith({
      username: "test-user",
      password: "test-password",
    });
  });
});
