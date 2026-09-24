import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { cities, findCity } from "@/lib/locations";
import { tracks, company, type Category } from "@/lib/site";

const SITE_URL = "https://www.ironwoodrentals.ca";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

function allCategories(): Category[] {
  const seen = new Map<string, Category>();
  for (const track of tracks) {
    for (const category of track.categories) {
      if (!seen.has(category.slug)) seen.set(category.slug, category);
    }
  }
  return [...seen.values()];
}

export async function generateMetadata(
  props: PageProps<"/locations/[city]">
): Promise<Metadata> {
  const { city: slug } = await props.params;
  const city = findCity(slug);
  if (!city) return {};
  const url = `/locations/${city.slug}`;
  return {
    title: `Event & Tent Rentals in ${city.name}, BC`,
    description: `${city.hook} Tents, tables, chairs, linens & heaters delivered and set up across ${city.region}. Call ${company.phone} for a same-day quote.`,
    keywords: [
      `event rentals ${city.name}`,
      `tent rentals ${city.name}`,
      `table and chair rentals ${city.name}`,
      `wedding rentals ${city.name} BC`,
      `party rentals ${city.name}`,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `Event & Tent Rentals in ${city.name}, BC | Ironwood`,
      description: city.hook,
      url,
      type: "website",
    },
  };
}

function faqJsonLd(city: NonNullable<ReturnType<typeof findCity>>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default async function CityPage(props: PageProps<"/locations/[city]">) {
  const { city: slug } = await props.params;
  const city = findCity(slug);
  if (!city) notFound();

  const categories = allCategories();
  const popular = city.popular
    .map((s) => categories.find((c) => c.slug === s))
    .filter((c): c is Category => Boolean(c));

  return (
    <>
      <Script
        id={`faq-jsonld-${city.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(faqJsonLd(city))}
      </Script>

      {/* Banner */}
      <section className="relative isolate overflow-hidden bg-forest-dark py-16 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-forest via-forest-dark to-ink" />
        <div className="mx-auto max-w-7xl px-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              <li>
                <Link href="/" className="transition hover:text-gold">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Event Rentals in {city.name}</li>
            </ol>
          </nav>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
            Event Rentals in {city.name}, BC
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">{city.hook}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/#contact"
              className="rounded-full bg-gold px-7 py-3 text-sm font-bold uppercase tracking-widest text-forest-dark transition hover:bg-white"
            >
              Get a Quote
            </a>
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:border-gold hover:text-gold"
            >
              <Icon name="phone" size={16} />
              {company.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Local content */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink/80">
          {city.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Popular rentals */}
        <h2 className="mt-14 font-display text-3xl font-bold text-ink">
          Popular rentals in {city.name}
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((c) => (
            <Link
              key={c.slug}
              href={`/rentals/${c.slug}`}
              className="group rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest transition group-hover:bg-gold group-hover:text-forest-dark">
                <Icon name={c.icon} size={22} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{c.name}</h3>
              <p className="mt-1 text-sm text-ink/60">{c.blurb}</p>
              <span className="mt-3 inline-block text-xs font-bold uppercase tracking-widest text-forest group-hover:text-gold">
                View rentals →
              </span>
            </Link>
          ))}
        </div>

        {/* Other cities */}
        <h2 className="mt-14 font-display text-2xl font-bold text-ink">
          Also serving nearby
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {cities
            .filter((c) => c.slug !== city.slug)
            .map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/locations/${c.slug}`}
                  className="inline-block rounded-full border border-ink/15 px-4 py-2 text-sm text-ink/70 transition hover:border-gold hover:text-forest"
                >
                  Event rentals in {c.name}
                </Link>
              </li>
            ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-14">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-3xl font-bold text-ink">
            {city.name} event rental FAQs
          </h2>
          <div className="mt-8 space-y-4">
            {city.faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <summary className="cursor-pointer list-none text-lg font-bold text-ink marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 leading-relaxed text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 rounded-lg bg-forest-dark p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-white">
              Planning an event in {city.name}?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-white/70">
              Tell us your date, venue and guest count — we will build a
              rental package that fits your space and budget.
            </p>
            <a
              href="/#contact"
              className="mt-6 inline-block rounded-full bg-gold px-8 py-3 text-sm font-bold uppercase tracking-widest text-forest-dark transition hover:bg-white"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
