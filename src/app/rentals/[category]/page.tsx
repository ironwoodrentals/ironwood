import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { findImage } from "@/lib/media";
import { productsForCategory } from "@/lib/products";
import { company, tracks, type Category } from "@/lib/site";

/** Categories are unique by slug even though some appear in both tracks. */
function allCategories(): Category[] {
  const seen = new Map<string, Category>();
  for (const track of tracks) {
    for (const category of track.categories) {
      if (!seen.has(category.slug)) seen.set(category.slug, category);
    }
  }
  return [...seen.values()];
}

function findCategory(slug: string) {
  return allCategories().find((c) => c.slug === slug);
}

/** Cross-sell map: what customers usually book alongside each category. */
const PAIRINGS: Record<string, string[]> = {
  "pop-up-canopy": ["tables", "chairs", "heaters", "ground-protection-mats"],
  tables: ["chairs", "linens", "pop-up-canopy"],
  chairs: ["tables", "linens", "pop-up-canopy"],
  linens: ["tables", "chairs", "bars"],
  heaters: ["pop-up-canopy", "tables", "chairs"],
  bars: ["tables", "linens", "chairs"],
  "ground-protection-mats": ["pop-up-canopy", "heaters", "tables"],
};

export function generateStaticParams() {
  return allCategories().map((c) => ({ category: c.slug }));
}

/** Keyword-rich titles for the categories that drive event-rental sales. */
const CATEGORY_SEO: Record<string, { title: string; description: string }> = {
  "pop-up-canopy": {
    title: "Pop-Up Tent Rentals in the Lower Mainland",
    description:
      "10×10 and 10×20 pop-up canopy tents for weddings, events and film productions across the Lower Mainland. Delivered, set up and picked up. Call 778-385-1498 for a same-day quote.",
  },
  tables: {
    title: "Table Rentals in the Lower Mainland",
    description:
      "Round, banquet, farmhouse and cocktail table rentals for weddings and events in Surrey, Langley, Vancouver and across the Lower Mainland. Delivered and set up. Call 778-385-1498.",
  },
  chairs: {
    title: "Chair Rentals in the Lower Mainland",
    description:
      "Chiavari, folding, lounge and ghost chair rentals for weddings and events across the Lower Mainland. Delivery, setup and pickup included. Call 778-385-1498.",
  },
  linens: {
    title: "Linen Rentals in the Lower Mainland",
    description:
      "Tablecloth, runner, drapery and napkin rentals for weddings and events in the Lower Mainland. Paired with our tables and chairs for one complete package. Call 778-385-1498.",
  },
  heaters: {
    title: "Patio Heater Rentals in the Lower Mainland",
    description:
      "Patio heater and climate control rentals for outdoor weddings and events across the Lower Mainland. Keep guests warm from September to May. Call 778-385-1498.",
  },
  bars: {
    title: "Portable Bar Rentals in the Lower Mainland",
    description:
      "Portable bar, cooler and service cart rentals for weddings and events in the Lower Mainland. Delivered and set up with your full rental package. Call 778-385-1498.",
  },
  "ground-protection-mats": {
    title: "Ground Protection Mat Rentals in BC",
    description:
      "Turf protection, trackway and vehicle access mats for events and film productions across BC. Flexible terms for productions of every size. Call 778-385-1498.",
  },
};

export async function generateMetadata(
  props: PageProps<"/rentals/[category]">
): Promise<Metadata> {
  const { category: slug } = await props.params;
  const category = findCategory(slug);
  if (!category) return {};
  const seo = CATEGORY_SEO[slug];
  const url = `/rentals/${slug}`;
  return {
    title: seo?.title ?? `${category.name} Rentals in the Lower Mainland`,
    description: seo?.description ?? category.blurb,
    alternates: { canonical: url },
    openGraph: {
      title: seo?.title ?? category.name,
      description: seo?.description ?? category.blurb,
      url,
      type: "website",
    },
  };
}

export default async function CategoryPage(
  props: PageProps<"/rentals/[category]">
) {
  const { category: slug } = await props.params;
  const category = findCategory(slug);
  if (!category) notFound();

  const items = productsForCategory(category.slug);
  const [from, to] = category.gradient;
  const pairings = (PAIRINGS[category.slug] ?? [])
    .map((slug) => findCategory(slug))
    .filter((c): c is Category => Boolean(c));

  // Which track(s) this category belongs to, for the breadcrumb.
  const parent = tracks.find((t) =>
    t.categories.some((c) => c.slug === category.slug)
  );

  return (
    <>
      {/* Banner */}
      <section
        className="relative isolate overflow-hidden py-16 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        }}
      >
        {category.image && (
          <Image
            src={category.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover"
          />
        )}
        <div className="absolute inset-0 -z-10 bg-forest-dark/78" />

        <div className="mx-auto max-w-7xl px-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              <li>
                <Link href="/" className="transition hover:text-gold">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">
                /
              </li>
              {parent && (
                <>
                  <li>
                    <Link
                      href={`/${parent.slug}`}
                      className="transition hover:text-gold"
                    >
                      {parent.name}
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-white/40">
                    /
                  </li>
                </>
              )}
              <li className="text-gold">{category.name}</li>
            </ol>
          </nav>

          <div className="mt-6 flex items-center gap-5">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold">
              <Icon name={category.icon} size={32} strokeWidth={1.5} />
            </span>
            <div>
              <h1 className="font-display text-4xl text-white sm:text-5xl">
                {category.name}
              </h1>
              <p className="mt-2 text-lg text-white/80">{category.blurb}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          {items.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item) => {
                const photo = findImage(`/products/${item.slug}`);
                return (
                  <li
                    key={item.slug}
                    className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative flex h-60 items-center justify-center bg-white">
                      {photo ? (
                        <Image
                          src={photo}
                          alt={item.name}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-cream text-forest/25">
                          <Icon
                            name={category.icon}
                            size={64}
                            strokeWidth={1.2}
                          />
                          <span className="text-[11px] font-semibold uppercase tracking-widest">
                            Photo coming soon
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="border-t border-black/5 p-5">
                      <h2 className="font-semibold text-ink">{item.name}</h2>
                      {item.spec && (
                        <p className="mt-1 text-[13px] font-medium leading-snug text-forest">
                          {item.spec}
                        </p>
                      )}
                      {item.description && (
                        <p className="mt-2 text-[13px] leading-relaxed text-slate">
                          {item.description}
                        </p>
                      )}
                      <Link
                        href="/#contact"
                        className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-forest transition hover:text-gold"
                      >
                        Request a Quote
                        <Icon name="arrow" size={14} />
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="mx-auto max-w-xl rounded-lg border border-dashed border-forest/25 bg-cream px-8 py-14 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest">
                <Icon name={category.icon} size={28} strokeWidth={1.5} />
              </span>
              <h2 className="mt-5 font-display text-2xl text-ink">
                {category.name} — full list coming soon
              </h2>
              <p className="mt-3 text-slate">
                We&apos;re still photographing this range. Call or email us and
                we&apos;ll tell you exactly what&apos;s available for your dates.
              </p>
              <a
                href={company.phoneHref}
                className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-forest px-7 text-sm font-semibold text-white transition hover:bg-forest-soft"
              >
                <Icon name="phone" size={16} />
                {company.phone}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Complete your setup — cross-sell */}
      {pairings.length > 0 && (
        <section className="border-t border-black/5 bg-cream py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">
              Complete your setup
            </h2>
            <p className="mt-2 max-w-2xl text-slate">
              Most {category.name.toLowerCase()} bookings go out with these —
              bundle them into one delivery, one crew, one quote.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {pairings.map((p) => (
                <Link
                  key={p.slug}
                  href={`/rentals/${p.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-lg bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div>
                    <h3 className="font-semibold text-ink transition group-hover:text-forest">
                      {p.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-slate">
                      {p.blurb}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest transition group-hover:bg-forest group-hover:text-white">
                    <Icon name="arrow" size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
