/**
 * Service-area landing page data. One entry per city we actively deliver to.
 * Copy is written to be genuinely useful (delivery, setup, popular rentals,
 * local event context) rather than keyword-stuffed — that is what ranks and
 * what converts.
 */

export type City = {
  slug: string;
  name: string;
  /** short region label, e.g. "Surrey & North Delta" */
  region: string;
  /** 1–2 sentence hook shown under the H1 */
  hook: string;
  /** 2–3 short paragraphs of genuinely local content */
  paragraphs: string[];
  /** popular rental lines for this city, as category slugs */
  popular: string[];
  faqs: { q: string; a: string }[];
};

export const cities: City[] = [
  {
    slug: "surrey",
    name: "Surrey",
    region: "Surrey, North Delta & White Rock",
    hook: "Tent, table, chair and heater rentals delivered and set up anywhere in Surrey — from backyard weddings in Fleetwood to festivals at Holland Park.",
    paragraphs: [
      "Surrey hosts more outdoor events than anywhere else in the Lower Mainland, and weather is always the wildcard. Our 10×10 and 10×20 pop-up canopies go up in minutes and keep guests dry or shaded, while patio heaters extend the season well into the fall.",
      "We deliver across Surrey — Guildford, Fleetwood, Cloverdale, Newton, South Surrey and White Rock — with professional setup and teardown included. One crew handles delivery, installation and pickup, so you are never chasing multiple vendors on event day.",
      "Planners and families alike use us for backyard weddings, grad parties, corporate gatherings and community festivals. Tell us your guest count and venue and we will build a package that fits the space and the budget.",
    ],
    popular: ["pop-up-canopy", "tables", "chairs", "heaters"],
    faqs: [
      {
        q: "Do you deliver to Surrey?",
        a: "Yes — we deliver, set up and pick up across all of Surrey, including Guildford, Fleetwood, Cloverdale, Newton, South Surrey and White Rock.",
      },
      {
        q: "How far in advance should I book rentals in Surrey?",
        a: "For weddings and large events, 4–8 weeks is ideal, especially May through September. For smaller gatherings we can often accommodate bookings with a few days' notice — call 778-385-1498 to check availability.",
      },
      {
        q: "Do you set up the tents and tables?",
        a: "Yes. Our crew handles delivery, professional setup and teardown, so everything is ready before your guests arrive and gone after the event.",
      },
    ],
  },
  {
    slug: "langley",
    name: "Langley",
    region: "Langley City, Township of Langley & Fort Langley",
    hook: "Farm and vineyard weddings are Langley's signature — we supply the tents, tables, chairs and linens that make them work, rain or shine.",
    paragraphs: [
      "Langley is wine country and farm-wedding country, from Fort Langley to Campbell Valley. Outdoor venues are stunning and exposed, which is exactly why our pop-up canopies, heaters and flooring are in constant demand here.",
      "We serve Langley City, the Township, Fort Langley, Brookswood and Aldergrove with full delivery, setup and pickup. Whether it is a 200-guest barn wedding or a 30-person backyard anniversary, one call covers tents, tables, chairs, linens and climate control.",
      "Our team knows the local venues and acreages well — uneven ground, no power, long driveways. We plan for all of it so your event day runs smoothly.",
    ],
    popular: ["pop-up-canopy", "tables", "chairs", "linens"],
    faqs: [
      {
        q: "Do you deliver to farm venues in Langley?",
        a: "Yes — we regularly deliver to farms, vineyards and acreages across Langley, including Fort Langley and Campbell Valley. Our crew is experienced with uneven ground and rural access.",
      },
      {
        q: "What rentals do Langley weddings usually need?",
        a: "Most outdoor Langley weddings book pop-up canopies, round or farmhouse tables, chairs, linens and patio heaters as a backup plan. We will tailor a package to your guest count and venue.",
      },
      {
        q: "Is there a delivery fee for Langley?",
        a: "Delivery is quoted with your rental package based on the venue location and order size. Request a quote and we will give you one all-in number — no surprises.",
      },
    ],
  },
  {
    slug: "abbotsford",
    name: "Abbotsford",
    region: "Abbotsford, Mission & Chilliwack",
    hook: "From Tradex-scale events to Fraser Valley backyard weddings, we deliver full rental packages across Abbotsford and the eastern valley.",
    paragraphs: [
      "Abbotsford anchors the Fraser Valley's event scene — agricultural fairs, large outdoor weddings and corporate gatherings that need serious infrastructure. We supply tents, tables, chairs, heaters and ground protection mats for events of every size.",
      "We deliver throughout Abbotsford, Mission and Chilliwack with setup and teardown handled by our own crew. For film and production work in the valley, our ground protection mats and heaters are available on flexible terms.",
      "East-valley venues often mean big guest counts and open fields. We will spec the right tent coverage, seating and climate control for your headcount and layout.",
    ],
    popular: ["pop-up-canopy", "heaters", "tables", "chairs"],
    faqs: [
      {
        q: "Do you serve Abbotsford and Chilliwack?",
        a: "Yes — we deliver across Abbotsford, Mission and Chilliwack, with full setup and pickup included.",
      },
      {
        q: "Can you handle large events in Abbotsford?",
        a: "Absolutely. We regularly supply large-format events with tents, hundreds of chairs and tables, heaters and ground protection. Send us your guest count for a tailored quote.",
      },
      {
        q: "Do you rent to film productions in the Fraser Valley?",
        a: "Yes — our film rentals line includes tents, heaters and ground protection mats for productions of every size, with flexible terms.",
      },
    ],
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    region: "Vancouver, North Vancouver & West Vancouver",
    hook: "Rooftop receptions, park weddings and downtown productions — premium event and film rentals delivered anywhere in Vancouver.",
    paragraphs: [
      "Vancouver events demand polish: rooftop receptions downtown, ceremonies in Stanley Park, productions on location across the city. Our inventory — chiavari and ghost chairs, quality linens, portable bars — is chosen to look right in those settings.",
      "We deliver throughout Vancouver, North Vancouver and West Vancouver, including downtown venues with tight load-in windows. Our crew works around venue restrictions and strata rules so setup is invisible to your guests.",
      "For film and photo productions, we are a go-to local source for tents, heaters and ground protection mats, with the flexible scheduling productions need.",
    ],
    popular: ["chairs", "linens", "bars", "pop-up-canopy"],
    faqs: [
      {
        q: "Do you deliver to downtown Vancouver venues?",
        a: "Yes — we deliver across Vancouver including downtown, with crews experienced in tight load-in windows, parkades and venue restrictions.",
      },
      {
        q: "What is your most popular Vancouver wedding rental?",
        a: "Chiavari chairs, quality linens and pop-up canopies lead the way, often paired with patio heaters for evening events.",
      },
      {
        q: "Do you work with Vancouver event planners?",
        a: "Yes — planners are some of our best repeat clients. One call, one crew, zero chasing: we handle delivery, setup and pickup so you can focus on the event.",
      },
    ],
  },
  {
    slug: "burnaby",
    name: "Burnaby",
    region: "Burnaby & New Westminster",
    hook: "Centrally located for the whole Lower Mainland — fast delivery of tents, tables, chairs and heaters anywhere in Burnaby.",
    paragraphs: [
      "Burnaby's central location makes it one of our fastest delivery zones — Deer Lake, Metrotown, Burnaby Mountain and everywhere in between. Corporate events, community festivals and backyard weddings all run on our inventory here.",
      "We supply full rental packages: pop-up canopies, tables, chairs, linens, heaters and portable bars, with delivery, setup and teardown by our own crew. Event planners in Burnaby use us as a single vendor instead of juggling three.",
      "Booking is simple: tell us the date, venue and guest count, and we will quote a complete package with one all-in number.",
    ],
    popular: ["pop-up-canopy", "tables", "chairs", "heaters"],
    faqs: [
      {
        q: "Do you deliver to Burnaby?",
        a: "Yes — Burnaby is one of our fastest delivery zones, covering Deer Lake, Metrotown, Burnaby Mountain and all surrounding neighbourhoods.",
      },
      {
        q: "Do you handle corporate events in Burnaby?",
        a: "Yes. We regularly supply corporate gatherings with tents, tables, chairs and climate control, with discreet professional setup.",
      },
      {
        q: "How quickly can you deliver to Burnaby?",
        a: "Because of Burnaby's central location we can often accommodate short-notice bookings. Call 778-385-1498 to check availability for your date.",
      },
    ],
  },
  {
    slug: "coquitlam",
    name: "Coquitlam",
    region: "Coquitlam, Port Coquitlam & Port Moody",
    hook: "Town Centre Park festivals, Lafarge Lake weddings, backyard grads — event rentals delivered and set up across the Tri-Cities.",
    paragraphs: [
      "The Tri-Cities punch above their weight for outdoor events: festivals at Town Centre Park, weddings around Lafarge Lake, and endless backyard celebrations in Burke Mountain's new neighbourhoods.",
      "We deliver to Coquitlam, Port Coquitlam and Port Moody with full setup and teardown. Pop-up canopies, tables, chairs, linens and heaters arrive on one truck, installed by one crew, picked up when the party is over.",
      "For planners and families alike, the pitch is simple: one call covers the whole rental package, with a single quote and a crew that shows up on time.",
    ],
    popular: ["pop-up-canopy", "chairs", "tables", "linens"],
    faqs: [
      {
        q: "Do you deliver to Coquitlam and Port Moody?",
        a: "Yes — we serve Coquitlam, Port Coquitlam and Port Moody with delivery, setup and pickup included.",
      },
      {
        q: "Can you supply a full wedding package in the Tri-Cities?",
        a: "Yes. Tents, tables, chairs, linens, heaters and bars can all come on one order with one crew handling everything.",
      },
      {
        q: "Do you set up at public parks?",
        a: "Yes — we regularly set up at parks and public venues across the Tri-Cities and will coordinate timing with your permits.",
      },
    ],
  },
  {
    slug: "richmond",
    name: "Richmond",
    region: "Richmond & South Delta",
    hook: "Steveston waterfront weddings, banquet halls and corporate events — polished rentals delivered across Richmond.",
    paragraphs: [
      "Richmond's event calendar runs on banquets, waterfront weddings in Steveston and corporate functions near the airport. Our chiavari chairs, linens and portable bars are the details that make those rooms look finished.",
      "We deliver throughout Richmond — Steveston, Bridgeport, Hamilton and the city centre — with professional setup timed to your venue's schedule. Outdoor events get pop-up canopies and heaters as weather insurance.",
      "Planners booking Richmond venues use us to consolidate vendors: one quote, one crew, tables to teardown handled.",
    ],
    popular: ["chairs", "linens", "bars", "pop-up-canopy"],
    faqs: [
      {
        q: "Do you deliver to Richmond?",
        a: "Yes — we deliver across Richmond including Steveston, Bridgeport and the city centre, with setup timed to your venue.",
      },
      {
        q: "Do you rent chair covers and linens in Richmond?",
        a: "Yes — we stock linens, runners and napkins alongside chiavari, folding and ghost chairs.",
      },
      {
        q: "Can you handle last-minute corporate events near YVR?",
        a: "We often can — call 778-385-1498 and we will check crew and inventory availability for your date.",
      },
    ],
  },
  {
    slug: "delta",
    name: "Delta",
    region: "Delta, Ladner & Tsawwassen",
    hook: "Farm weddings in Ladner, waterfront events in Tsawwassen — full rental packages delivered across Delta.",
    paragraphs: [
      "Delta pairs rural charm with waterfront venues: barn weddings in Ladner, receptions in Tsawwassen, community events throughout North Delta. All of them need the same thing — reliable rentals that show up on time.",
      "We deliver tents, tables, chairs, linens and heaters across Delta with setup and teardown by our own crew. Acreages and farms are familiar territory for us: uneven ground, long driveways, no problem.",
      "One call covers your whole package with a single all-in quote — the way event rentals should work.",
    ],
    popular: ["pop-up-canopy", "tables", "chairs", "heaters"],
    faqs: [
      {
        q: "Do you deliver to Ladner and Tsawwassen?",
        a: "Yes — we serve all of Delta including Ladner, Tsawwassen and North Delta.",
      },
      {
        q: "Do you deliver to farms and rural venues?",
        a: "Yes — farm and acreage venues are a specialty. Our crew is experienced with rural access and uneven ground.",
      },
      {
        q: "What is included in a Delta wedding package?",
        a: "Typically pop-up canopies, tables, chairs, linens and heaters. We tailor every package to guest count, venue and budget — request a quote for an exact number.",
      },
    ],
  },
  {
    slug: "maple-ridge",
    name: "Maple Ridge",
    region: "Maple Ridge & Pitt Meadows",
    hook: "Golden Ears as your backdrop deserves better than folding chairs — premium wedding and event rentals across Maple Ridge.",
    paragraphs: [
      "Maple Ridge is outdoor-wedding territory: acreages with mountain views, riverside properties and venues that make the most of the landscape. Our tents, quality seating and linens are built for exactly these settings.",
      "We deliver to Maple Ridge and Pitt Meadows with full setup and teardown. Because many venues here are rural, we plan for access, ground conditions and power — details that separate a smooth event day from a stressful one.",
      "From intimate backyard ceremonies to 200-guest receptions, one call covers tents, tables, chairs, linens and heaters.",
    ],
    popular: ["pop-up-canopy", "chairs", "linens", "heaters"],
    faqs: [
      {
        q: "Do you deliver to Maple Ridge?",
        a: "Yes — we deliver, set up and pick up across Maple Ridge and Pitt Meadows.",
      },
      {
        q: "Can you handle rural and acreage venues?",
        a: "Yes — rural venues are familiar territory. We plan for access, ground conditions and power needs in advance.",
      },
      {
        q: "Do you offer heaters for fall weddings in Maple Ridge?",
        a: "Yes — patio heaters are one of our most-booked items for shoulder-season outdoor events.",
      },
    ],
  },
  {
    slug: "new-westminster",
    name: "New Westminster",
    region: "New Westminster & Queensborough",
    hook: "Riverfront weddings, historic venues and community festivals — event rentals delivered across New West.",
    paragraphs: [
      "New Westminster's riverfront and heritage venues host weddings and festivals with real character — and tight load-in logistics. Our crew is used to downtown-style constraints: limited parking, strict venue windows, stairs.",
      "We supply pop-up canopies, tables, chairs, linens, heaters and bars across New Westminster and Queensborough, with setup timed precisely to your venue's schedule.",
      "Whether it is a Fraser River waterfront reception or a community festival, you get one vendor, one quote and one crew from delivery to pickup.",
    ],
    popular: ["pop-up-canopy", "tables", "chairs", "bars"],
    faqs: [
      {
        q: "Do you deliver to New Westminster?",
        a: "Yes — we deliver across New Westminster and Queensborough with setup timed to your venue's schedule.",
      },
      {
        q: "Can you work with tight venue load-in windows?",
        a: "Yes — our crew regularly works around strict venue schedules, limited parking and difficult access.",
      },
      {
        q: "Do you rent bars and beverage service equipment?",
        a: "Yes — portable bars, coolers and service carts are available alongside our full event rental line.",
      },
    ],
  },
];

export function findCity(slug: string) {
  return cities.find((c) => c.slug === slug);
}
