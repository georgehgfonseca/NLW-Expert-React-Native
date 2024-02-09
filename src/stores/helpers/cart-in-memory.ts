import { ProductProps } from "../../../utils/data/products";
import { ProductCartProps } from "../cart-store";

export function add(products: ProductCartProps[], newProduct: ProductProps) {
  const productExists = products.find(
    (product) => product.id === newProduct.id
  );
  if (productExists) {
    return products.map((product) =>
      product.id === newProduct.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
  }
  return [...products, { ...newProduct, quantity: 1 }];
}
