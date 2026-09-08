"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Bell, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/lib/utils";
import { notifications } from "@/lib/mock-data";

const navLinks = [
  { href: "/campaigns", label: "Explore Campaigns" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Mock auth state — toggle this to preview logged-in header UI.
  const isLoggedIn = false;

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-900",
                  pathname === link.href && "bg-brand-50 text-brand-700"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden flex-1 max-w-sm items-center md:flex">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
            <input
              type="search"
              placeholder="Search campaigns..."
              className="input pl-9"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <Link
                href="/dashboard/supporter/notifications"
                className="relative rounded-lg p-2 text-ink-600 hover:bg-ink-50"
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 text-[10px] font-bold text-white">
                    {unreadCount}
                  </span>
                )}
              </Link>
              <Link
                href="/dashboard/supporter"
                className="hidden items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-ink-50 sm:flex"
              >
                <img
                  src="https://i.pravatar.cc/150?img=32"
                  alt="Priya Nair"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <ChevronDown className="h-4 w-4 text-ink-500" />
              </Link>
            </>
          ) : (
            <div className="hidden items-center gap-2 sm:flex">
              <Link href="/login" className="btn-ghost">
                Log In
              </Link>
              <Link href="/signup" className="btn-primary">
                Get Started
              </Link>
            </div>
          )}
          <Link href="/campaigns/create" className="btn-accent hidden lg:inline-flex">
            Start a Campaign
          </Link>
          <button
            className="rounded-lg p-2 text-ink-600 hover:bg-ink-50 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-100 bg-white px-4 py-4 lg:hidden">
          <div className="relative mb-3">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
            <input type="search" placeholder="Search campaigns..." className="input pl-9" />
          </div>
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-ink-100 pt-3">
            <Link href="/campaigns/create" className="btn-accent w-full">
              Start a Campaign
            </Link>
            <Link href="/login" className="btn-outline w-full">
              Log In
            </Link>
            <Link href="/signup" className="btn-primary w-full">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}