import { Search, Heart, Share2, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover a Cause",
    description: "Browse verified campaigns across medical, education, disaster relief, and more.",
  },
  {
    icon: Heart,
    title: "Make a Donation",
    description: "Give any amount securely — every contribution goes straight to the cause.",
  },
  {
    icon: Share2,
    title: "Spread the Word",
    description: "Share campaigns with friends and family to multiply your impact.",
  },
  {
    icon: TrendingUp,
    title: "Track the Impact",
    description: "Follow campaign updates and see exactly how your support helps.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            How GiveOra Works
          </h2>
          <p className="mt-2 text-ink-500">
            Four simple steps to turn generosity into real-world change.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative rounded-2xl border border-ink-100 p-6">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                <step.icon className="h-6 w-6" />
              </span>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-brand-600">
                Step {i + 1}
              </p>
              <h3 className="mb-2 font-display text-lg font-semibold text-ink-900">
                {step.title}
              </h3>
              <p className="text-sm text-ink-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}