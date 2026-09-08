import { cn } from "@/lib/utils";

export default function ProgressBar({
  percent,
  className,
  trackClassName,
}: {
  percent: number;
  className?: string;
  trackClassName?: string;
}) {
  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-ink-100", trackClassName)}>
      <div
        className={cn("h-full rounded-full bg-brand-600 transition-all", className)}
        style={{ width: `${Math.min(100, Math.max(0, percent))}%` }}
      />
    </div>
  );
}