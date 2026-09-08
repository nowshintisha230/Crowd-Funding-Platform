import Link from "next/link";
import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";
import { formatCompactNumber, formatCurrency } from "@/lib/utils";
import { platformStats } from "@/lib/mock-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="container-page grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div className="animate-fade-in">
          <span className="badge mb-5 bg-brand-100 text-brand-700">
            💙 Trusted by {formatCompactNumber(platformStats.totalDonors)}+ donors worldwide
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight text-ink-900 sm:text-5xl">
            Give hope.
            <br />
            <span className="text-brand-600">Create Change.</span> 💙
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink-500">
            GiveOra connects generous people with medical emergencies,
            education needs, disaster relief, and community causes that
            matter — one donation at a time.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/campaigns" className="btn-primary px-6 py-3 text-base">
              Explore Campaigns <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/campaigns/create" className="btn-outline px-6 py-3 text-base">
              Start a Campaign
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-ink-100 pt-6">
            <div>
              <p className="font-display text-2xl font-bold text-ink-900">
                {formatCurrency(platformStats.totalRaised)}
              </p>
              <p className="text-xs text-ink-500">Total raised</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-ink-900">
                {formatCompactNumber(platformStats.totalCampaigns)}
              </p>
              <p className="text-xs text-ink-500">Campaigns funded</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-ink-900">
                {platformStats.successRate}%
              </p>
              <p className="text-xs text-ink-500">Success rate</p>
            </div>
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="relative overflow-hidden rounded-2xl shadow-popover">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80"
              alt="Volunteers helping a community"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl bg-white p-4 shadow-popover sm:block">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-success-50 text-success-600">
                <TrendingUp className="h-4 w-4" />
              </span>
              <p className="text-sm font-semibold text-ink-900">Goal Reached</p>
            </div>
            <p className="text-xs text-ink-500">
              "Clean Water Wells" hit 100% of its $28,000 goal this week.
            </p>
          </div>
          <div className="absolute -right-4 top-6 hidden items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-popover sm:flex">
            <ShieldCheck className="h-5 w-5 text-brand-600" />
            <p className="text-xs font-medium text-ink-700">
              Verified <br /> Campaigns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}