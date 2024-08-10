import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border-secondary-300 border rounded-lg overflow-hidden shadow-lg bg-white">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={400}
        height={400}
        className="w-full object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-secondary-800">{product.name}</h3>
        <p className="text-lg text-secondary-800">
          €{product.price.toFixed(2)}
        </p>
        <Link
          href={`/product/${product.id}`}
          className="mt-2 px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 w-fit"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
