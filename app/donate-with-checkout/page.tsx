import type { Metadata } from "next";

import CheckoutForm from "@/components/CheckoutForm";

export const metadata: Metadata = {
  title: "Pay with hosted Checkout",
};

export default function DonatePage(): JSX.Element {
  return (
    <div className="page-container">
      <h1>Pay with Stripe Checkout</h1>
      <CheckoutForm uiMode="hosted" />
    </div>
  );
}
