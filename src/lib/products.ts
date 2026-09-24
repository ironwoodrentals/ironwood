/**
 * Individual rental items, grouped by the category slug they belong to.
 *
 * ── ADDING A PRODUCT ────────────────────────────────────────────────────────
 * 1. Save the photo to  /public/products/<slug>.jpg   (.png/.webp also work)
 *    Use the product's slug exactly as the filename, e.g.
 *      10x10-pop-up-canopy.jpg
 * 2. Add an entry below under the right category slug.
 *
 * The photo is matched by slug automatically — there is no image path to set.
 * An item with no photo yet still renders, with a branded placeholder tile,
 * so the page never looks broken while the catalogue is being filled in.
 *
 * Category slugs in use: tent · tables · chairs · linens · heaters · bars ·
 * ground-protection-mats
 */

export type Product = {
  name: string;
  /** also the photo filename: /public/products/<slug>.(jpg|png|webp) */
  slug: string;
  /** short spec line shown under the name */
  spec?: string;
  /**
   * Booking-friendly description shown on the product card: what it is,
   * what size/capacity it covers, what it's best for, and anything the
   * customer should know before requesting a quote. Keep it factual —
   * no invented prices, quantities, or availability claims.
   */
  description?: string;
  categorySlug: string;
};

export const products: Product[] = [
  // ── Pop-up Canopy ──────────────────────────────────────────────────────
  {
    name: "10×10 Pop-Up Canopy",
    slug: "10x10-pop-up-canopy",
    spec: "10' × 10' instant shelter · adjustable legs",
    description:
      "Our most-booked tent. Covers 100 sq ft — enough for a cake table, DJ setup, registration desk, or market stall. Sets up in minutes with adjustable legs for uneven ground. Best for vendor booths, backyard parties, and ceremony accents.",
    categorySlug: "pop-up-canopy",
  },
  {
    name: "10×20 Pop-Up Canopy",
    slug: "10x20-pop-up-canopy",
    spec: "10' × 20' instant shelter · adjustable legs",
    description:
      "Double the cover at 200 sq ft — fits a full buffet line, a 6 ft bar setup, or 30–40 standing guests. A favourite for food stations and check-in areas at weddings and festivals. We deliver, set up, and pick it up.",
    categorySlug: "pop-up-canopy",
  },

  // ── Tables ─────────────────────────────────────────────────────────────
  {
    name: "6 ft Round Table",
    slug: "6-foot-round-table",
    spec: "Seats 8–10 · folding banquet round",
    description:
      "The classic wedding reception table. 72\" round seats 8–10 guests comfortably and pairs perfectly with a floor-length 120\" linen. Folding legs make setup fast — tell us your guest count and we'll calculate how many you need.",
    categorySlug: "tables",
  },
  {
    name: "5 ft Plastic Round Table",
    slug: "5-foot-plastic-round-table",
    spec: "Seats 8 · lightweight folding round",
    description:
      "A 60\" round that seats 8 — lighter and easier to move than banquet rounds, great for cocktail-hour seating, kids' tables, and vendor areas. Wipes clean in seconds between uses.",
    categorySlug: "tables",
  },
  {
    name: "6 ft Rectangle Table",
    slug: "6-foot-rectangle-table",
    spec: "Seats 6–8 · folding banquet trestle",
    description:
      "The workhorse of every event: 6 ft of surface for head tables, buffets, dessert displays, registration, and silent auctions. Seats 6–8 for dining. Ask about our white fitted cloths for a crisp, tailored look.",
    categorySlug: "tables",
  },
  {
    name: "Plastic Cocktail Table",
    slug: "plastic-cocktail-table",
    spec: "Tall highboy · fold-flat top",
    description:
      "Standing-height highboy tables for cocktail hour, mixers, and networking events. The fold-flat top travels easily and sets up in seconds. Dress it with a spandex cover in black or white for an instant upscale look.",
    categorySlug: "tables",
  },
  {
    name: "Wooden Cocktail Table",
    slug: "wooden-cocktail-table",
    spec: "Tall highboy · wood top, chrome column",
    description:
      "A step up from standard highboys — warm wood top on a polished chrome column. Made for lounge areas, VIP sections, and receptions where the furniture is part of the décor. No cover needed.",
    categorySlug: "tables",
  },

  // ── Chairs ─────────────────────────────────────────────────────────────
  {
    name: "Garden Chairs",
    slug: "garden-chairs",
    spec: "White padded resin folding · wedding-ready",
    description:
      "Our wedding favourite: white resin folding chairs with a padded seat that photographs beautifully and keeps guests comfortable through long ceremonies. Stackable, weather-resistant, and always delivered clean.",
    categorySlug: "chairs",
  },
  {
    name: "Black Plastic Folding Chairs",
    slug: "black-plastic-folding-chairs",
    spec: "Sturdy, stackable · indoor or out",
    description:
      "The practical choice for large guest counts — corporate events, graduations, community gatherings. Sturdy, stackable, and easy to arrange in rows or around tables. Great value when you need seating for everyone.",
    categorySlug: "chairs",
  },
  {
    name: "White Plastic Folding Chairs",
    slug: "white-plastic-folding-chairs",
    spec: "Sturdy, stackable · indoor or out",
    description:
      "Same reliable folding chair in white — brighter for daytime events, ceremonies, and tents. Stacks tight for efficient delivery and setup. An easy, affordable way to seat big crowds.",
    categorySlug: "chairs",
  },
  {
    name: "Clear Chivari Chairs",
    slug: "clear-chivari-chairs",
    spec: "Crystal resin · elegant banquet seating",
    description:
      "Crystal-clear resin Chiavaris that disappear into any colour scheme — the chair behind a thousand Pinterest weddings. Elegant enough for ballrooms, tough enough for outdoor receptions. Your guests will ask where you found them.",
    categorySlug: "chairs",
  },
  {
    name: "Gold Phoenix Chairs",
    slug: "gold-phoenix-chairs",
    spec: "Gold resin · open-back banquet chair",
    description:
      "Gold resin with an open-back silhouette — made for head tables, sweetheart tables, and bridal-party seating that stands out in photos. Pairs beautifully with farmhouse tables and warm uplighting.",
    categorySlug: "chairs",
  },

  // ── Linens ─────────────────────────────────────────────────────────────
  {
    name: "Round 120 inch – White",
    slug: "round-120-inch-white-tablecloth",
    spec: "120\" round tablecloth · seats 8–10",
    description:
      "A full floor-length drop on a 6 ft round table — the polished, seamless look planners ask for by name. Crisp white goes with everything. Professionally laundered and pressed before every event.",
    categorySlug: "linens",
  },
  {
    name: "White Rectangular Tablecloths for 6 feet table",
    slug: "white-rectangular-tablecloth-6ft",
    spec: "White · fits 6 ft banquet tables",
    description:
      "Tailored white cloths cut for 6 ft banquet tables — buffets, head tables, registration, and cake displays. A clean white base makes florals and centrepieces pop in photos.",
    categorySlug: "linens",
  },
  {
    name: "Spandex Round Cocktail Table Cover 30\" – Black",
    slug: "black-cocktail-table-cover",
    spec: "Black spandex · fits 30\" high-top tables",
    description:
      "Fitted black spandex that stretches smooth over 30\" cocktail tables — no clips, no wrinkles, no fuss. The go-to for galas, corporate mixers, and evening events. Slips on in seconds.",
    categorySlug: "linens",
  },
  {
    name: "Spandex Round Cocktail Table Cover 30\" – White",
    slug: "white-cocktail-table-cover",
    spec: "White spandex · fits 30\" high-top tables",
    description:
      "Same wrinkle-free fitted cover in white — bright and fresh for daytime receptions, weddings, and brand events. Stretch fabric hugs the table for a tailored, modern finish.",
    categorySlug: "linens",
  },

  // ── Heaters ────────────────────────────────────────────────────────────
  {
    name: "Patio Heater",
    slug: "patio-heater",
    spec: "Propane mushroom heater · freestanding",
    description:
      "Don't let a chilly evening end the party early. Freestanding propane mushroom heaters warm patios, tent entrances, and outdoor lounges. We deliver them fuelled and ready — just tell us how many zones you need to keep warm.",
    categorySlug: "heaters",
  },
  {
    name: "Frost Fighter IDF350 Indirect Fired Portable Heater",
    slug: "frost-fighter-idf350",
    spec: "Indirect-fired · clean heat for tents & sets",
    description:
      "Serious heat for large tents, film sets, and job sites. The indirect-fired design keeps exhaust outside, so only clean, dry warmth flows in through the duct — safe around guests, equipment, and talent. Ask us to size it for your space.",
    categorySlug: "heaters",
  },

  // ── Bars ───────────────────────────────────────────────────────────────
  {
    name: "LED Bar",
    slug: "led-bar",
    spec: "Colour-changing glow bar · portable",
    description:
      "A portable bar that glows — cycle through colours or lock in your wedding palette for a bar station that doubles as décor. Built for receptions, brand activations, and after-parties. Pairs perfectly with our cocktail tables.",
    categorySlug: "bars",
  },

  // ── Ground Protection Mats ─────────────────────────────────────────────
  {
    name: "Ground Protection Mats 4×8ft",
    slug: "ground-protection-mats-4x8ft",
    spec: "4' × 8' panels · turf & trackway protection",
    description:
      "Protect lawns, turf, and soft ground from foot traffic, staging, and equipment. 4' × 8' panels lay fast to create walkways and work pads for weddings, festivals, and productions. Flexible rental terms for jobs of any length.",
    categorySlug: "ground-protection-mats",
  },
  {
    name: "Ground Protection Mat Roadway",
    slug: "ground-protection-mat-roadway",
    spec: "Interlocking panels · vehicle & equipment access",
    description:
      "Interlocking roadway panels that carry trucks, forklifts, and heavy equipment over grass, mud, or sensitive surfaces without tearing them up. Essential for builds, load-ins, and location shoots. Tell us the route — we'll spec the run.",
    categorySlug: "ground-protection-mats",
  },
  {
    name: "Multi Mover Hand Truck",
    slug: "multi-mover-hand-truck",
    spec: "4-wheel convertible dolly · heavy loads",
    description:
      "A 4-wheel convertible hand truck that switches between upright and platform modes for moving heavy gear, crates, and event equipment. A small add-on that saves backs on load-in day.",
    categorySlug: "ground-protection-mats",
  },
];

export function productsForCategory(categorySlug: string): Product[] {
  // Newest first: products are appended to the list as they're added, so the
  // most recently added show at the top and older ones fall to the bottom.
  return products.filter((p) => p.categorySlug === categorySlug).reverse();
}
