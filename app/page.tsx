import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Next.js + TypeScript Example",
};

export default function IndexPage(): JSX.Element {
  return (
    <ul className="card-list">
      <li>
        <Link
          href="/donate-with-embedded-checkout"
          className="card checkout-style-background"
        >
          <h2 className="bottom">Pay with embedded Checkout</h2>
          <img src="/checkout-one-time-payments.svg" />
        </Link>
      </li>
      <li>
        <Link
          href="/donate-with-checkout"
          className="card checkout-style-background"
        >
          <h2 className="bottom">Pay with Stripe Checkout </h2>
          <img src="/checkout-one-time-payments.svg" />
        </Link>
      </li>

    </ul>
  );
}
