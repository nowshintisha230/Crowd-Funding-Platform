import Link from "next/link";
import { MapPin, Users, Zap } from "lucide-react";
import type { Campaign } from "@/types";
import CategoryBadge from "@/components/ui/CategoryBadge";
import ProgressBar from "@/components/ui/ProgressBar";
import { formatCurrency, getProgressPercent } from "@/lib/utils";

export default function CampaignCard({ campaign }: { campaign: Campaign }) {
  const percent = getProgressPercent(campaign.raisedAmount, campaign.goalAmount);

  return (
    <Link
      href={`/campaigns/${campaign.slug}`}
      className="card group flex flex-col overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-100">
        <img
          src={campaign.coverImage}
          alt={campaign.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <CategoryBadge category={campaign.category} className="bg-white/95 shadow-sm" />
          {campaign.isUrgent && (
            <span className="badge bg-danger-500 text-white shadow-sm">
              <Zap className="h-3 w-3" /> Urgent
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1.5 line-clamp-2 font-display text-base font-semibold leading-snug text-ink-900 group-hover:text-brand-700">
          {campaign.title}
        </h3>
        <p className="mb-3 line-clamp-2 text-sm text-ink-500">
          {campaign.shortDescription}
        </p>

        <div className="mb-2 flex items-center gap-1 text-xs text-ink-400">
          <MapPin className="h-3.5 w-3.5" />
          {campaign.location}
        </div>

        <div className="mt-auto">
          <ProgressBar percent={percent} className="bg-brand-600" />
          <div className="mt-2 flex items-end justify-between">
            <div>
              <p className="font-display text-lg font-bold text-ink-900">
                {formatCurrency(campaign.raisedAmount)}
              </p>
              <p className="text-xs text-ink-400">
                raised of {formatCurrency(campaign.goalAmount)}
              </p>
            </div>
            <div className="text-right">
              <p className="flex items-center justify-end gap-1 text-sm font-semibold text-ink-700">
                <Users className="h-3.5 w-3.5 text-ink-400" />
                {campaign.donorsCount}
              </p>
              <p className="text-xs text-ink-400">
                {campaign.daysLeft > 0 ? `${campaign.daysLeft} days left` : "Completed"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}