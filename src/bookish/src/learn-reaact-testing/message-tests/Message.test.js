import { render, fireEvent } from "@testing-library/react";
import Message from "./Message";
describe("Message Text", () => {
  it("should show correct message", () => {
    const { getByText } = render(<Message text={"hello world"}></Message>);
    const messageElement = getByText("hello world");
    expect(messageElement).toBeInTheDocument();
  });

  it('should hide text if toggle it form visible', () => {
    const { getByText, queryByText } = render(<Message text={"hello world"}></Message>);
    
    const btnToggle = getByText("Toggle Text");
    fireEvent.click(btnToggle);

    const messageElement = queryByText("hello world");
    expect(messageElement).not.toBeInTheDocument();

  });

  it('should show text when toggle it twice', () => {
    const { getByText, queryByText } = render(<Message text={"hello world"}></Message>);
    
    const btnToggle = getByText("Toggle Text");
    fireEvent.click(btnToggle);
    fireEvent.click(btnToggle);
    
    const messageElement = queryByText("hello world");
    expect(messageElement).toBeInTheDocument();
  });
});
