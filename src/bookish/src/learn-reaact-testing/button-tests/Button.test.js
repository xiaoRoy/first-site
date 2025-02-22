import { render, fireEvent } from "@testing-library/react";

import Button from "./Button";

describe("Button Testing", () => {
  it("should render label correctly", () => {
    const buttonLabel = "Do not click me";
    const { getByText } = render(<Button label={buttonLabel}></Button>);
    const buttonElement = getByText("Do not click me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call onClick on button click", () => {
    const buttonLabel = "Do not click me";
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button label={buttonLabel} onClick={mockOnClick}></Button>
    );
    const buttonElement = getByText(buttonLabel);
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
