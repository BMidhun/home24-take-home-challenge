import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "..";

test("if the input component is in the document", () => {
  const onChange = jest.fn();
  const { getByPlaceholderText } = render(
    <Input
      name="search"
      type="text"
      onChange={onChange}
      placeholder="Search"
      value=""
    />
  );

  expect(getByPlaceholderText("Search")).toBeInTheDocument();

  fireEvent.change(getByPlaceholderText("Search"), {
    target: { value: "Hello" },
  });

  expect(onChange).toBeCalled();
});
