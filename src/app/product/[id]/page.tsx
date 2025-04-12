import { Metadata } from "next";
import Stripe from "stripe";

import { stripe } from "@/lib/stripe";
import { formatPrices } from "@/utils/formatPrices";

import ProductDetails from "./components/product-details";

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
    defaultPriceId: price.id,
  };
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);

  return {
    title: product.name + " | Ignite Shop",
    description: product.description,
    openGraph: {
      images: [product.img],
    },
    twitter: {
      images: [product.img],
    },
  };
}

export const revalidate = 3600;

export default async function Product({ params }: ProductPageProps) {
  const { id: productId } = await params;
  const product = await getProduct(productId);

  return <ProductDetails {...product} />;
}
