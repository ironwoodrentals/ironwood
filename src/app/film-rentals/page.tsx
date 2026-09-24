import type { Metadata } from "next";
import TrackPage from "@/components/TrackPage";
import { tracks, company } from "@/lib/site";

const track = tracks.find((t) => t.key === "film")!;

export const metadata: Metadata = {
  title: "Film & Production Rentals in BC",
  description: `Tents, heaters and ground protection mats for film and photo productions across British Columbia. Flexible terms for productions of every size. Call ${company.phone} for a quote.`,
  keywords: [
    "film production rentals BC",
    "ground protection mats Vancouver",
    "location equipment rentals film",
    "production tent rentals BC",
  ],
  alternates: { canonical: "/film-rentals" },
  openGraph: {
    title: "Film & Production Rentals in BC | Ironwood",
    description:
      "Tents, heat and ground protection for productions of every size, across the Lower Mainland.",
    url: "/film-rentals",
    type: "website",
  },
};

export default function FilmRentalPage() {
  return <TrackPage track={track} />;
}
