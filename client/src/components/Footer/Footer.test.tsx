import React from "react";
import { render } from "@testing-library/react";
import { Footer } from "..";

test("if the footer component is in the document", () => {
  const { getByText } = render(<Footer />);

  expect(
    getByText(
      "Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten."
    )
  ).toBeInTheDocument();
});
