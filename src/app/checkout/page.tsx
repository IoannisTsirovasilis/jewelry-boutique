"use client";

import CheckoutForm from "../../components/CheckoutForm";
import { useCart } from "../cart/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-secondary-800 mb-4">Checkout</h1>
      <div className="mb-4 bg-white p-6 rounded-lg shadow-lg">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b border-secondary-300 py-2"
          >
            <div>
              <h3 className="text-xl text-secondary-800">{item.name}</h3>
              <p className="text-secondary-500">
                €{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <span className="text-lg text-secondary-800">
              x {item.quantity}
            </span>
          </div>
        ))}
        <div className="text-right mt-4">
          <h2 className="text-2xl font-bold text-secondary-800">
            Total: €{totalPrice.toFixed(2)}
          </h2>
        </div>
      </div>
      <CheckoutForm />
    </div>
  );
}
