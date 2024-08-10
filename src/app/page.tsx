import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { products } from "@/utils/products";

const featuredProducts = products.slice(0, 3);

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Welcome to Jewelry Boutique</h1>
      <p className="mb-4">
        Discover our exclusive collection of fine jewelry, from necklaces to
        rings, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center">
        <Link
          href="/products"
          className="px-4 py-2 bg-secondary-500 text-white rounded hover:bg-secondary-600"
        >
          Shop All Products
        </Link>
      </div>
    </div>
  );
}
