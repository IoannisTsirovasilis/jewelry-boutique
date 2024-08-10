"use client";

import { useCart } from "@/app/cart/CartContext";
import Image from "next/image";
import { products } from "@/utils/products";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) return <p>Product not found</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-secondary-800 mb-4">
        {product.name}
      </h1>
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={400}
        height={400}
        className="object-cover mb-4 rounded-lg"
      />
      <p className="text-lg text-secondary-500 mb-4">{product.description}</p>
      <p className="text-xl font-bold text-secondary-800 mb-4">
        €{product.price.toFixed(2)}
      </p>
      <button
        onClick={() => addToCart(product as any)}
        className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
