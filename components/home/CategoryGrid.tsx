import Link from "next/link";
import {
  HeartPulse,
  GraduationCap,
  LifeBuoy,
  PawPrint,
  Users,
  Leaf,
  Palette,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { categories } from "@/lib/mock-data";

const iconMap: Record<string, LucideIcon> = {
  HeartPulse,
  GraduationCap,
  LifeBuoy,
  PawPrint,
  Users,
  Leaf,
  Palette,
  Trophy,
};

export default function CategoryGrid() {
  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
              Browse by Category
            </h2>
            <p className="mt-1 text-ink-500">Find causes you care about most.</p>
          </div>
          <Link
            href="/campaigns"
            className="hidden text-sm font-semibold text-brand-600 hover:text-brand-700 sm:block"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <Link
                key={cat.name}
                href={`/campaigns?category=${encodeURIComponent(cat.name)}`}
                className="card group flex flex-col items-center gap-3 p-6 text-center transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card-hover"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">{cat.name}</p>
                  <p className="text-xs text-ink-400">{cat.count} campaigns</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}