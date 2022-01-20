import { productlist } from "../model/productModel.js";
import { showProduct } from "../view/showProduct.js";

export const getProduct = () => {
  showProduct(productlist);
};
