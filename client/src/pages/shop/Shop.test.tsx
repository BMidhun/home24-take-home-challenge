import React from "react";
import { render, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MemoryRouter } from "react-router-dom";

import { ShopProvider } from "../../context/shop.context";
import Shop from ".";
import { mockData } from "../../mock/mockData";

describe("Shop", () => {
  const server = setupServer(
    rest.post("/graphql", (req, res, ctx) => {
      return res(ctx.json(mockData));
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("shows categories on screen", async () => {
    const { getByText, findAllByRole } = render(
      <MemoryRouter>
        <ShopProvider>
          <Shop />
        </ShopProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(getByText(/Categories/i)).toBeInTheDocument();
    });

    const childCategoryLinks = await findAllByRole("link");

    await waitFor(() => {
      expect(childCategoryLinks).toHaveLength(28);
    });
  });

  test("shows products on screen", async () => {
    const { getByText, findAllByRole } = render(
      <MemoryRouter>
        <ShopProvider>
          <Shop />
        </ShopProvider>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(getByText(/Möbel - 55654/i)).toBeInTheDocument();
    });

    const addToCartBtn = await findAllByRole("button");

    await waitFor(() => {
      expect(addToCartBtn).toHaveLength(50);
    });
  });

  test("shows error message when response status code is 4xx or 5xx", async () => {
    server.use(
      rest.post("/graphql", (req, res, ctx) => {
        return res(ctx.status(422));
      })
    );

    const { getByText, debug } = render(
      <ShopProvider>
        <Shop />
      </ShopProvider>
    );

    const text = /Something went wrong. Please try refreshing the page/i;

    await waitFor(() => {
      expect(getByText(text)).toBeInTheDocument();
    });
  });

  test("shows error message when response status code is 200 but with no data", async () => {
    server.use(
      rest.post("/graphql", (req, res, ctx) => {
        return res(ctx.json({ data: null, error: "Invalid query" }));
      })
    );

    const { findAllByText, debug } = render(
      <ShopProvider>
        <Shop />
      </ShopProvider>
    );

    const text = /Nothing to display/i;

    await waitFor(async () => {
      await findAllByText(text);
    });
  });
});
