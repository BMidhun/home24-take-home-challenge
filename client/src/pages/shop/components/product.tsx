import { useContext } from "react";

import { Button } from "../../../components";
import { ShopContext } from "../../../context/shop.context";
import { cartItem } from "../../../types/types";
import { Article } from "../../../types";
import { createIntlNumberFormatter } from "../../../utils/index";

interface IArticle extends Article {
  id: string;
}

function Product(props: IArticle) {
  const { images, name, prices, id } = props;
  const currencyFormatter = createIntlNumberFormatter("de-DE", {
    style: "currency",
    currency: prices.currency,
  });

  const formatName = (name: string) => {
    return name.length > 17 ? name.substr(0, 17) + "..." : name;
  };

  const { addItemToCart } = useContext(ShopContext);

  function addToCart() {
    const item: cartItem = {
      name,
      price: prices.regular.value,
      id,
      qty: 0,
    };

    addItemToCart(item);
  }

  return (
    <article className="product">
      <img src={`${images[0].path}`} alt="product" className="product-image" />
      <div className="product-detail-key">Name</div>
      <hr />
      <div className="product-detail-value" title={name}>
        {formatName(name)}
      </div>
      <div className="product-detail-key">Price</div>
      <hr />
      <div className="product-detail-value">
        {currencyFormatter.format(prices.regular.value)}
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <Button onClick={addToCart}>Add to Cart</Button>
      </div>
    </article>
  );
}

export default Product;
