import type { Metadata } from "next";
import TrackPage from "@/components/TrackPage";
import { tracks, company } from "@/lib/site";

const track = tracks.find((t) => t.key === "event")!;

export const metadata: Metadata = {
  title: "Event Rentals in the Lower Mainland",
  description: `Wedding and event rentals across the Lower Mainland — tents, tables, chairs, linens, heaters and bars delivered, set up and picked up. Serving Surrey, Langley, Abbotsford, Vancouver and beyond. Call ${company.phone} for a same-day quote.`,
  keywords: [
    "event rentals Lower Mainland",
    "wedding rentals Surrey",
    "tent rentals Langley",
    "table chair rentals Vancouver",
    "party rentals Abbotsford",
    "event equipment rentals BC",
  ],
  alternates: { canonical: "/event-rentals" },
  openGraph: {
    title: "Event Rentals in the Lower Mainland | Ironwood",
    description:
      "Tents, tables, chairs, linens, heaters and bars — delivered, set up and picked up. One call, one crew, zero chasing.",
    url: "/event-rentals",
    type: "website",
  },
};

export default function EventRentalsPage() {
  return <TrackPage track={track} />;
}
