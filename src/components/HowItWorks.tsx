import Link from "next/link";
import Icon from "./Icon";
import { company } from "@/lib/site";

const steps = [
  {
    n: "01",
    icon: "chat",
    title: "Tell us your date",
    desc: "Share your event date, venue and guest count — by form or phone. We confirm availability and price it the same day.",
  },
  {
    n: "02",
    icon: "truck",
    title: "We deliver & set up",
    desc: "Our crew delivers everything on schedule and sets it up right — tents, tables, chairs, heaters, the works.",
  },
  {
    n: "03",
    icon: "check",
    title: "You enjoy, we pick up",
    desc: "Host your event without lifting a finger. When it's over, we come back and take it all away.",
  },
];

/**
 * Three-step "how it works" strip: lowers the perceived effort of booking,
 * which is the main friction on a quote-based rental site.
 */
export default function HowItWorks() {
  return (
    <section className="border-y border-black/5 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest sm:text-sm">
            One call, one crew, zero chasing
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
            Booking is <span className="italic text-forest-soft">easy</span>
          </h2>
        </div>

        <ol className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {steps.map((s) => (
            <li key={s.n} className="relative text-center sm:text-left">
              <div className="flex items-center justify-center gap-4 sm:justify-start">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-forest text-white">
                  <Icon name={s.icon} size={26} />
                </span>
                <span className="font-display text-5xl font-bold text-forest/15">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/#contact"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gold px-9 text-sm font-bold uppercase tracking-[0.12em] text-night shadow-lg shadow-black/10 transition hover:bg-gold-soft"
          >
            Start Your Quote
            <Icon name="arrow" size={18} />
          </Link>
          <a
            href={company.phoneHref}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-forest/30 px-9 text-sm font-bold uppercase tracking-[0.12em] text-forest transition hover:border-forest hover:bg-cream"
          >
            <Icon name="phone" size={18} />
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
