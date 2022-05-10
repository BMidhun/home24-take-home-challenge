import React, { useContext } from "react";
import { ShopContext } from "../../context/shop.context";
import { cartItem } from "../../types/types";
import { createIntlNumberFormatter } from "../../utils/index";

import "./index.css";

const formatter = createIntlNumberFormatter("de-DE", {
  style: "currency",
  currency: "EUR",
});
function Cart() {
  const {
    state: { cartItems, totalQty, totalAmount },
  } = useContext(ShopContext);

  if (cartItems.length === 0)
    return <div style={{ textAlign: "center" }}>Cart is Empty!!</div>;

  function computeAmount(val: number) {
    return formatter.format(val);
  }

  return (
    <div className="cart-wrapper">
      <div className="cart-table">
        <table width="100%">
          <thead>
            <tr>
              <th style={{ textAlign: "start" }}>Product Name</th>
              <th style={{ textAlign: "start" }}>Qty</th>
              <th style={{ textAlign: "end" }}>Price</th>
            </tr>
            <tr style={{ height: "10px" }}></tr>
          </thead>

          <tbody>
            {cartItems.map((item: cartItem) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>&#10005;{item.qty}</td>
                  <td>{computeAmount(item.price * item.qty)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <hr />
      <div className="cart-footer">
        <p>Total Qty: {totalQty}</p>
        <p>Total Amount: {computeAmount(totalAmount)}</p>
      </div>
    </div>
  );
}

export default Cart;
