import type { Metadata } from "next";

import CheckoutForm from "@/components/CheckoutForm";

export const metadata: Metadata = {
  title: "Donate with hosted Checkout | Next.js + TypeScript Example",
};

export default function DonatePage(): JSX.Element {
  return (
    <div className="page-container">
      <h1>Pay with hosted Checkout</h1>
      <p>Pay to our project 💖</p>
      <CheckoutForm uiMode="hosted" />
    </div>
  );
}
