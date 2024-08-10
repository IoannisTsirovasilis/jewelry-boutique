"use client";

import { useCart } from "@/app/cart/CartContext";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

export default function Navbar() {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-secondary-800 shadow p-4 mb-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-primary-500 flex gap-2 items-center"
        >
          <Image
            src={"/jewelry-boutique-icon.png"}
            width={48}
            height={48}
            alt="Jewelry Boutique Icon"
          />{" "}
          Jewelry Boutique
        </Link>
        <div className="flex space-x-4">
          <Link
            href="/products"
            className="text-primary-500 hover:text-primary-600"
          >
            Products
          </Link>
          <Link
            href="/cart"
            className="text-primary-500 hover:text-primary-600 relative"
          >
            <CartIcon className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute -bottom-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
