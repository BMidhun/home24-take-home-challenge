import { ReactNode } from "react";
import { Footer, Header } from "../components";
import "./index.css";
function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <div className="shop-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default ShopLayout;
