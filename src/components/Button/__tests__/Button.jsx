import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../Button";

const buttonText = "ClickMe";

it("1", () => {
  render(<Button>{buttonText}</Button>);

  expect(screen.getByText(buttonText)).toBeInTheDocument();
});

it("2", () => {
  const mock = jest.fn();
  render(<Button onClick={mock}>{buttonText}</Button>);
  const button = screen.getByText(buttonText);

  fireEvent.click(button);
  fireEvent.click(button);

  expect(mock).toHaveBeenCalledTimes(2);
});
