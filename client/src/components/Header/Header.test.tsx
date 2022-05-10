import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Header } from "..";
import { ShopProvider } from "../../context/shop.context";

describe("Header component", () => {
  test("if the Header component is in the document", () => {
    const { getByText } = render(
      <ShopProvider>
        <Header></Header>
      </ShopProvider>
    );

    expect(getByText(/Home24/i)).toBeInTheDocument();
  });

  test("if search input is displayed", async () => {
    const { getByRole } = render(
      <ShopProvider>
        <Header></Header>
      </ShopProvider>
    );

    expect(getByRole(/searchbox/i)).toBeInTheDocument();

    fireEvent.change(getByRole(/searchbox/i), { target: { value: "Hello" } });

    await waitFor(() => {
      expect(getByRole(/searchbox/i)).toHaveValue("Hello");
    });
  });

  test("if search button is clicked", async () => {
    const { getAllByRole } = render(
      <ShopProvider>
        <Header></Header>
      </ShopProvider>
    );

    const searchBtn = getAllByRole("button")[0];

    fireEvent.click(searchBtn);
  });

  test("if modal is open when clicked on cart icon and is closed", async () => {
    const { getAllByRole, queryByText } = render(
      <ShopProvider>
        <Header></Header>
      </ShopProvider>
    );

    const cartBtn = getAllByRole("button")[1];

    fireEvent.click(cartBtn);

    await waitFor(() => {
      expect(queryByText("Your Cart")).toBeInTheDocument();
    });

    const closeBtn = getAllByRole("button")[2];

    fireEvent.click(closeBtn);

    await waitFor(() => {
      expect(queryByText("Your Cart")).not.toBeInTheDocument();
    });
  });
});
