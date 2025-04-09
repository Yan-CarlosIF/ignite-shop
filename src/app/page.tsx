import Image from "next/image";
import Link from "next/link";
import Shirt1 from "@/assets/shirts/Shirt-1.png";
import Shirt2 from "@/assets/shirts/Shirt-2.png";
import Shirt3 from "@/assets/shirts/Shirt-3.png";
import ProductCard from "./components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    img: Shirt1,
    title: "Camiseta X",
    price: "R$ 99,90",
  },
  {
    id: 2,
    img: Shirt2,
    title: "Camiseta Y",
    price: "R$ 109,90",
  },
  {
    id: 3,
    img: Shirt3,
    title: "Camiseta Z",
    price: "R$ 89,90",
  },
  {
    id: 4,
    img: Shirt1,
    title: "Camiseta Alpha",
    price: "R$ 79,90",
  },
  // pode adicionar mais...
];

export default function Home() {
  return (
    <div className="ml-auto flex min-h-[656px] w-full max-w-[calc(100vw-((100vw-1180px)/2))]">
      <Carousel opts={{ direction: "ltr", dragFree: true }} className="w-full">
        <CarouselContent className="gap-12">
          {products.map((product) => (
            <CarouselItem key={product.id} className="h-[656px] max-w-[696px]">
              <ProductCard {...product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
