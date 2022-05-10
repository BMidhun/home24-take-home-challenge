import { fireEvent, render, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "./App";
import { mockData } from "./mock/mockData";

describe("Test App", () => {
  const server = setupServer(
    rest.post("/graphql", (req, res, ctx) => {
      return res(ctx.json(mockData));
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("when cart is empty", async () => {
    const { getAllByRole, findByText, debug, getByText } = render(<App />);

    expect(getByText("Loading...")).toBeInTheDocument();

    await waitFor(async () => await findByText("Home24"));

    const cartBtn = getAllByRole("button")[1];

    fireEvent.click(cartBtn);

    await waitFor(() =>
      expect(getByText("Cart is Empty!!")).toBeInTheDocument()
    );
  });

  test("when an item is added to cart", async () => {
    const { getByText, findAllByText, getByTestId, getAllByRole, getByRole } =
      render(<App />);

    const cartBtn = getAllByRole("button")[1];

    await waitFor(() => getByText("Categories"));

    const addToCartBtns = await findAllByText(/add to cart/i);

    fireEvent.click(addToCartBtns[0]);

    await waitFor(() => {
      getByTestId("cartQty");
    });

    expect(getByTestId("cartQty")).toHaveTextContent("1");

    fireEvent.click(addToCartBtns[0]);

    await waitFor(() => {
      getByTestId("cartQty");
    });

    expect(getByTestId("cartQty")).toHaveTextContent("2");

    fireEvent.click(cartBtn);

    await waitFor(() => getByRole("table"));

    const tbody = getByRole("table").getElementsByTagName("tbody")[0];

    const cols = tbody.rows[0].cells;

    expect(cols[0]).toHaveTextContent("Premium Komfortmatratze Smood");
    expect(cols[1]).toHaveTextContent(/2$/i);
    expect(cols[2]).toHaveTextContent("133.998,00 €");
  });
});
