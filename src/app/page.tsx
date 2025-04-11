import ProductCard from "./components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { stripe } from "@/lib/stripe";
import { formatPrices } from "@/utils/formatPrices";
import Stripe from "stripe";

async function getProducts() {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      img: product.images[0],
      price: price.unit_amount ? formatPrices(price.unit_amount / 100) : null,
    };
  });
}

export const revalidate = 7200; // re-fetch every 2 hours

export default async function Home() {
  const products = await getProducts();

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
