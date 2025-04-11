import { ShoppingBag } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  img: StaticImageData | string;
  name: string;
  price: string | null;
}

export default function ProductCard({
  id,
  img,
  name,
  price,
}: ProductCardProps) {
  return (
    <div
      className="group relative flex h-full items-center justify-center overflow-hidden rounded-lg p-1"
      style={{
        background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
      }}
    >
      <Image
        src={img}
        width={480}
        height={480}
        alt={name}
        className="object-cover"
      />

      <footer className="absolute inset-x-1 bottom-1 flex translate-y-[110%] items-center justify-between rounded-md bg-black/60 p-8 opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex flex-col gap-1">
          <strong className="text-xl text-white">{name}</strong>
          <span className="text-2xl font-bold text-green-300">{price}</span>
        </div>
        <Link
          className="rounded-md border-2 border-gray-500 p-3 transition-colors ease-in-out hover:border-green-500 hover:bg-green-500"
          href={`/product/${id}`}
        >
          <ShoppingBag />
        </Link>
      </footer>
    </div>
  );
}
