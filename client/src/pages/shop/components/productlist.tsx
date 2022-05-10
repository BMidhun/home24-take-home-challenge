import { v4 as uuid } from "uuid";
import Product from "./product";
import { CategoryArticle } from "../../../types/types";
interface IProps {
  categoryData:
    | {
        name: string;
        totalCount: number;
        products: CategoryArticle;
      }
    | undefined;
}

function ProductList({ categoryData }: IProps) {
  return (
    <section className="shop-section">
      {categoryData ? (
        <>
          <h2>
            {categoryData.name} - {categoryData.totalCount}
          </h2>
          <hr />
          <div className="shop-items-wrapper">
            {categoryData.products.articles.map((_item, index) => {
              return (
                <Product
                  key={`${index}:${_item.name}`}
                  {..._item}
                  id={uuid()}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div>Nothing to display</div>
      )}
    </section>
  );
}

export default ProductList;
