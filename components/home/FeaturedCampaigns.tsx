import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { campaigns } from "@/lib/mock-data";
import CampaignCard from "@/components/campaigns/CampaignCard";

export default function FeaturedCampaigns() {
  const featured = campaigns.filter((c) => c.isFeatured || c.isUrgent).slice(0, 6);

  return (
    <section className="bg-ink-50/60 py-16">
      <div className="container-page">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              Featured Campaigns
            </h2>
            <p className="mt-1 text-ink-500">
              Urgent and high-impact causes that need support right now.
            </p>
          </div>
          <Link
            href="/campaigns"
            className="hidden items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 sm:flex"
          >
            View all campaigns <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <CampaignCard key={c.id} campaign={c} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link href="/campaigns" className="btn-outline">
            View all campaigns
          </Link>
        </div>
      </div>
    </section>
  );
}