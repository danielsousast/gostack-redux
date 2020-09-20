import React from "react";
import { useSelector } from "react-redux";
import { IAppState } from "../store";
import { ICartItem } from "../store/modules/cart/types";

export default function Cart() {
  const cart = useSelector<IAppState, ICartItem[]>((state) => state.cart.items);

  return (
    <table style={{ marginTop: 30 }}>
      <thead>
        <tr style={{ background: "#eee" }}>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.product.id}>
            <th>{item.product.title}</th>
            <th>{item.product.price}</th>
            <th>{item.quantity}</th>
            <th>{(item.product.price * item.quantity).toFixed(2)}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
