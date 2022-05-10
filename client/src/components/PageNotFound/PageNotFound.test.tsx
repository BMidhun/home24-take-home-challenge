import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PageNotFound from ".";

test("render 404 page", () => {
  const { getByText } = render(
    <MemoryRouter>
      <PageNotFound />
    </MemoryRouter>
  );
  expect(getByText("404! Nothing's Here"));
});
