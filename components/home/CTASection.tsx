import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl bg-brand-700 px-8 py-14 text-center sm:px-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-600/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Have a cause that needs support?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-brand-100">
              Launch your campaign in minutes and reach thousands of
              potential supporters on GiveOra.
            </p>
            <Link
              href="/campaigns/create"
              className="btn-accent mt-7 px-6 py-3 text-base"
            >
              Start Your Campaign <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}