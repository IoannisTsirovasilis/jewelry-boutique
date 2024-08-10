import ProductCard from "../../components/ProductCard";
import { products } from "@/utils/products";

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
