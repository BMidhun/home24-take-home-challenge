import { Link } from "react-router-dom";
interface IProps {
  childCategoryList: { name: string; urlPath: string }[] | undefined;
}

function SideBar({ childCategoryList }: IProps) {
  return (
    <aside className="shop-sidebar">
      <h4>Categories</h4>
      <hr />
      {childCategoryList ? (
        <ul className="category-list">
          {childCategoryList.map((_item, index) => {
            return (
              <li key={`${index}-${_item.name}`}>
                <Link to={_item.urlPath} title="categories">
                  {_item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>Nothing to display</div>
      )}
    </aside>
  );
}

export default SideBar;
