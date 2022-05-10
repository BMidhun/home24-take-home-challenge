import { render } from "@testing-library/react";
import React from "react";
import { ShopProvider } from "../context/shop.context";
import ShopLayout from "./shop.layout";

test("The shop layout", () => {
  const { getByText } = render(
    <ShopProvider>
      <ShopLayout>
        <p>This is the shop layout</p>
      </ShopLayout>
    </ShopProvider>
  );
  expect(getByText("This is the shop layout")).toBeInTheDocument();
});
