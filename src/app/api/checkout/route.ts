import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  const body = await req.json();
  const { priceId } = body;

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
    });
  }

  if (!priceId) {
    return new Response(JSON.stringify({ error: "Price not found" }), {
      status: 400,
    });
  }

  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      cancel_url: "http://localhost:3000/",
      success_url:
        "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
    });

    return Response.json(checkoutSession.url);
  } catch (error) {
    console.error("Stripe error:", error);
    return new Response(JSON.stringify({ error: "Erro ao criar sessão" }), {
      status: 500,
    });
  }
}
