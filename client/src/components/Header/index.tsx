import React, { useContext, useState } from "react";
import { Button, Input, Modal } from "..";
import { MdOutlineShoppingCart, MdOutlineSearch } from "react-icons/md";
import { ReactInputEvent } from "../Input";
import "./index.css";
import { ShopContext } from "../../context/shop.context";
import Cart from "../Cart";
function Header() {
  const [searchText, setSearchText] = useState("");
  const [showCart, setShowCart] = useState(false);

  const {
    state: { totalQty },
  } = useContext(ShopContext);

  const handleSearch = (e: ReactInputEvent) => {
    setSearchText(e.target.value);
  };

  return (
    <header className="header">
      <h1 className="heading">Home24</h1>
      <div className="search">
        <Input
          placeholder="Search"
          type="search"
          value={searchText}
          onChange={handleSearch}
          name="search"
        />
        <Button onClick={() => {}}>
          <MdOutlineSearch size={18} />
        </Button>
        <Modal
          showModal={showCart}
          onClose={() => setShowCart(false)}
          title={"Your Cart"}
        >
          <Cart />
        </Modal>
      </div>
      <div className="cart">
        {!!totalQty ? (
          <span className="cart__qty" data-testid="cartQty">
            {totalQty}
          </span>
        ) : null}
        <Button
          onClick={() => {
            setShowCart(true);
          }}
        >
          <MdOutlineShoppingCart size={20} />
        </Button>
      </div>
    </header>
  );
}

export default Header;
