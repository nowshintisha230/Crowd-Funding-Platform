import { cn } from "@/lib/utils";
import type { CampaignCategory } from "@/types";

const categoryStyles: Record<CampaignCategory, string> = {
  Medical: "bg-danger-50 text-danger-600",
  Education: "bg-brand-50 text-brand-700",
  "Disaster Relief": "bg-warning-50 text-warning-600",
  "Animal Welfare": "bg-accent-100 text-accent-700",
  Community: "bg-success-50 text-success-600",
  Environment: "bg-success-50 text-success-600",
  "Arts & Culture": "bg-brand-100 text-brand-700",
  Sports: "bg-warning-50 text-warning-600",
};

export default function CategoryBadge({
  category,
  className,
}: {
  category: CampaignCategory;
  className?: string;
}) {
  return (
    <span className={cn("badge", categoryStyles[category], className)}>
      {category}
    </span>
  );
}