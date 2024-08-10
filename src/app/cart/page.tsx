"use client";

import CartItem from "../../components/CartItem";
import { useCart } from "../cart/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const router = useRouter();

  const handleProceedToCheckout = () => {
    if (cart.length > 0) {
      router.push("/checkout");
    } else {
      alert("Your cart is empty");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-secondary-800 mb-4">Your Cart</h1>
      <div>
        {cart.length === 0 ? (
          <p className="text-secondary-500">Your cart is empty</p>
        ) : (
          cart.map((item: any) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="text-right mt-4">
          <button
            onClick={handleProceedToCheckout}
            className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
