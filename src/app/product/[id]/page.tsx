import Image from "next/image";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { formatPrices } from "@/utils/formatPrices";

export async function generateStaticParams() {
  const products = await stripe.products.list();

  return products.data.map((product) => {
    return {
      id: product.id,
    };
  });
}

async function getProduct(id: string) {
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    id: product.id,
    name: product.name,
    description: product.description,
    img: product.images[0],
    price: price.unit_amount ? formatPrices(price.unit_amount / 100) : null,
  };
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export const revalidate = 3600;

export default async function Product({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <main className="mx-auto grid max-w-[1180px] grid-cols-2 items-stretch gap-16">
      <div
        className="flex h-[656px] w-full max-w-[576px] items-center justify-center rounded-lg object-cover p-1"
        style={{
          background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
        }}
      >
        <Image src={product.img} width={520} height={480} alt={product.name} />
      </div>
      <div className="flex flex-col">
        <h1 className="text-[32px] text-gray-300">{product.name}</h1>
        <span className="mt-4 block text-[32px] text-green-300">
          {product.price}
        </span>

        <p className="mt-10 text-lg leading-[1.6] text-gray-300">
          {product.description}
        </p>

        <button className="mt-auto cursor-pointer rounded-[8px] bg-green-500 p-5 font-bold text-white transition-colors hover:bg-green-300">
          Comprar agora
        </button>
      </div>
    </main>
  );
}
