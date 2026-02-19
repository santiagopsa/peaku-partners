import type { Metadata } from "next";
import Nav from "@/components/Nav";
import VideoHero from "@/components/sections/VideoHero";
import Lore from "@/components/sections/Lore";
import Levels from "@/components/sections/Levels";
import StickySwap from "@/components/sections/StickySwap";
import Rewards from "@/components/sections/Rewards";
import Join from "@/components/sections/Join";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "PeakU | Partnership for coworkings and their community",
  description:
    "Activate the PeakU partnership in your coworking and offer your community access to publish one premium job opening at no cost.",
  keywords: [
    "coworking partnership",
    "benefits for coworking community",
    "PeakU premium job opening",
    "talent for coworking",
    "partnerships for coworkings",
    "PeakU coworkings",
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      en: `${SITE_URL}/`,
      es: `${SITE_URL}/es`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    locale: "en_US",
    title: "PeakU | Activate partnership in your coworking",
    description:
      "Give your community direct access to publish one premium job opening on PeakU and get a communication kit to share the benefit.",
    url: `${SITE_URL}/`,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "PeakU partnership for coworking communities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakU | Partnership for coworkings",
    description:
      "Activate the partnership at no cost and share premium job opening access with your community.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <main id="top">
      <Nav />
      <VideoHero />
      <Lore />
      <Levels />
      <div id="thesis">
        <StickySwap />
      </div>
      <Rewards />
      <Join />
    </main>
  );
}
