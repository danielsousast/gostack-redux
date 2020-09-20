import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../store";
import { addToCartRequest } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IAppState, boolean>((state) => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddToCart = useCallback(() => {
    dispatch(addToCartRequest(product));
  }, [dispatch]);

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  "}
      <button type="button" onClick={handleAddToCart}>
        Comprar
      </button>
      {hasFailedStockCheck && <span style={{ color: "red" }}>Sem estoque</span>}
    </article>
  );
};

export default CatalogItem;
