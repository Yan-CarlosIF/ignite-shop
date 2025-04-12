import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import Stripe from "stripe";

interface SuccessPageProps {
  searchParams: Promise<{ session_id: string }>;
}

const getSession = async (sessionId: string) => {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  return {
    custumerName: session.customer_details?.name,
    product: {
      name: product.name,
      img: product.images[0],
    },
  };
};

export default async function Success({ searchParams }: SuccessPageProps) {
  const { session_id: sessionId } = await searchParams;

  if (!sessionId) {
    redirect("/");
  }

  const sessionDetails = await getSession(sessionId);

  return (
    <main className="mx-auto flex h-[656px] flex-col items-center justify-center">
      <h1 className="text-[32px] font-bold text-gray-100">Compra efetuada!</h1>

      <div
        className="mt-16 flex h-[145px] w-full max-w-[130px] items-center justify-center rounded-[8px] object-cover p-1"
        style={{
          background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
        }}
      >
        <Image
          src={sessionDetails.product.img}
          width={130}
          height={130}
          alt="Imagem da camiseta comprada"
        />
      </div>

      <p className="mt-8 max-w-[560px] text-center text-2xl text-gray-300">
        Uhuul <strong>{sessionDetails.custumerName}</strong>, sua{" "}
        <strong>{sessionDetails.product.name}</strong> já está a caminho da sua
        casa.
      </p>

      <Link
        className="hover mt-20 block border-b-1 border-b-transparent text-xl text-green-500 transition-all duration-200 ease-in-out hover:border-b-green-300 hover:text-green-300"
        href="/"
      >
        Voltar ao catálogo
      </Link>
    </main>
  );
}
