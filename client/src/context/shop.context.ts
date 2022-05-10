import actions from "../store/actions/shop";
import shopReducer, { initialState } from "../store/reducers/shop";
import contextTemplate from "./context.template";

const { Context: ShopContext, Provider: ShopProvider } = contextTemplate(
  shopReducer,
  actions,
  initialState
);

export { ShopContext, ShopProvider };
