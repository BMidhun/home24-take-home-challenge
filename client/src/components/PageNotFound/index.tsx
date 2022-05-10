import { Link } from "react-router-dom";

import "./index.css";
function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1>404! Nothing's Here</h1>
      <Link className="shop-link" to="/shop">
        Shop @ Home24
      </Link>
    </div>
  );
}

export default PageNotFound;
