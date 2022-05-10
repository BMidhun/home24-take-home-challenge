import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "..";

test("if the button component is in the document", () => {
  const mockCb = jest.fn();
  const { getByText } = render(<Button onClick={mockCb}>Click Me</Button>);

  expect(getByText("Click Me")).toBeInTheDocument();
  fireEvent.click(getByText("Click Me"));
  expect(mockCb).toBeCalled();
});
