import Link from "next/link";
import { Mail } from "lucide-react";
import type { SVGProps } from "react";
import Logo from "./Logo";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 15.99 2 14.74 2 12.1 2 10 3.6 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.3 3h3l-7.5 8.6L22.5 21h-6.9l-5.4-6.6L3.9 21H1l8-9.2L1.5 3h7l4.9 6.1L18.3 3Zm-1.2 16.2h1.7L7 4.7H5.2l11.9 14.5Z" />
    </svg>
  );
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socialIcons = [FacebookIcon, InstagramIcon, XIcon, YoutubeIcon];

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Explore Campaigns", href: "/campaigns" },
      { label: "Start a Campaign", href: "/campaigns/create" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Success Stories", href: "/success-stories" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Trust & Safety", href: "/trust-safety" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-950 text-ink-200">
      <div className="container-page grid grid-cols-2 gap-10 py-14 md:grid-cols-6">
        <div className="col-span-2">
          <Logo className="[&_span:last-child]:text-white" />
          <p className="mt-4 max-w-xs text-sm text-ink-400">
            Give hope. Create Change. 💙 GiveOra connects generous people with
            causes that need them most.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socialIcons.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-ink-300 transition-colors hover:bg-brand-600 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-sm font-semibold text-white">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-2 md:col-span-2">
          <h4 className="mb-4 text-sm font-semibold text-white">Stay Updated</h4>
          <p className="mb-3 text-sm text-ink-400">
            Get monthly stories of impact and new campaigns in your inbox.
          </p>
          <form className="flex items-center gap-2">
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-ink-500 focus:border-brand-500 focus:outline-none"
              />
            </div>
            <button type="submit" className="btn-primary shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-2 text-xs text-ink-500 sm:flex-row">
          <p>© {new Date().getFullYear()} GiveOra. All rights reserved.</p>
          <p>Built with care for people who care.</p>
        </div>
      </div>
    </footer>
  );
}