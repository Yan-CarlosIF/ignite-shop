"use client";

import Image from "next/image";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  img: string;
  description: string | null;
  price: string | null;
  defaultPriceId: string;
}

export default function ProductDetails(product: Product) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState<boolean>(false);

  const handleBuyProduct = async () => {
    try {
      setIsCreatingCheckoutSession(true);

      const checkout = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId: product.defaultPriceId }),
      }).then((res) => res.json());

      window.location.href = checkout;
    } catch {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout!");
    }
  };

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

        <button
          disabled={isCreatingCheckoutSession}
          onClick={handleBuyProduct}
          className="mt-auto cursor-pointer rounded-[8px] bg-green-500 p-5 font-bold text-white transition-colors not-disabled:hover:bg-green-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          Comprar agora
        </button>
      </div>
    </main>
  );
}
