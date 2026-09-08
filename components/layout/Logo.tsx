import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
        <HeartHandshake className="h-5 w-5" />
      </span>
      <span className="font-display text-xl font-bold text-ink-900">
        Give<span className="text-brand-600">Ora</span>
      </span>
    </Link>
  );
}