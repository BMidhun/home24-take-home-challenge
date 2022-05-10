import React, { useEffect, useState } from "react";

import { Category } from "../../types";
import ProductList from "./components/productlist";
import SideBar from "./components/sidebar";
import "./index.css";

function Shop() {
  const [error, setError] = useState(false);
  const [data, setData] = useState<Category | null>(null);

  const query = `{
    categories: productLists(ids: "156126", locale: de_DE) {
      name
      articleCount
      childrenCategories: childrenProductLists {
        name
        urlPath
      }
      categoryArticles: articlesList(first: 50) {
        articles {
          name
          variantName
          prices {
            currency
            regular {
              value
            }
          }
          images(
            format: WEBP
            maxWidth: 200
            maxHeight: 200
            limit: 1
          ) {
            path
          }
        }
      }
    }
  }`;

  useEffect(() => {
    async function getData() {
      const response = await fetch("/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (response.status === 200) {
        const responseData = await response.json();

        responseData.data === null
          ? setData(null)
          : setData(responseData.data.categories[0]);
      } else {
        setError(true);
      }
    }

    getData();
  }, [query]);

  let categoryData, childCategory;

  if (data) {
    categoryData = {
      name: data.name,
      totalCount: data.articleCount,
      products: data.categoryArticles,
    };
    childCategory = data.childrenCategories.list;
  }

  return (
    <main className="shop-page">
      {error ? (
        <div>Something went wrong. Please try refreshing the page</div>
      ) : (
        <>
          <SideBar childCategoryList={childCategory} />
          <ProductList categoryData={categoryData} />
        </>
      )}
    </main>
  );
}

export default Shop;
