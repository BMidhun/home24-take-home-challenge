import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { PageNotFound } from "../components";
import { ShopProvider } from "../context/shop.context";
import ShopLayout from "../layout/shop.layout";

const Shop = lazy(() => import("../pages/shop/"));

function AppRoutes() {
  return (
    <Suspense fallback="Loading...">
      <Router>
        <Routes>
          <Route
            path="/shop"
            element={
              <ShopProvider>
                <ShopLayout>
                  <Shop />
                </ShopLayout>
              </ShopProvider>
            }
          ></Route>

          <Route path="/page-not-found" element={<PageNotFound />}></Route>
          <Route path="/" element={<Navigate to="/shop" />}></Route>
          <Route path="*" element={<Navigate to="/page-not-found" />}></Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default AppRoutes;
