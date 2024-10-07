import Image from "next/image";

import headshotAnahitPogosova from "@/app/speakers/anahit-pogosova.webp";
import headshotSheenBrisals from "@/app/speakers/sheen-brisals.webp";
import headshotEricJohnson from "@/app/speakers/eric-johnson.webp";
import headshotDaniloPoccia from "@/app/speakers/danilo-poccia.webp";
import headshotClaraVilla from "@/app/speakers/clara-villa.webp";
import headshotEmrahSamdan from "@/app/speakers/emrah-samdan.webp";
import headshotJeremyDaly from "@/app/speakers/jeremy-daly.webp";
import headshotLucVanDonkersgoed from "@/app/speakers/luc-van-donkersgoed.webp";
import headshotSlobodanStojanovic from "@/app/speakers/slobodan-stojanovic.webp";

const SPEAKERS = [
  { name: "Sheen Brisals", image: headshotSheenBrisals },
  { name: "Anahit Pogosova", image: headshotAnahitPogosova },
  { name: "Jeremy Daly", image: headshotJeremyDaly },
  { name: "Luc van Donkersgoed", image: headshotLucVanDonkersgoed },
  { name: "Slobodan Stojanović", image: headshotSlobodanStojanovic },
  { name: "Eric Johnson", image: headshotEricJohnson },
  { name: "Danilo Poccia", image: headshotDaniloPoccia },
  { name: "Clara Villa", image: headshotClaraVilla },
  { name: "Emrah Samdan", image: headshotEmrahSamdan },
];

export function Speakers() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">
        Our speakers
      </h2>

      <p className="text-lg max-w-prose mb-8">
        Each event is indipendently organized and has a diverse group of{" "}
        <u>speakers from local and global</u> serverless community.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-9 gap-4">
        {SPEAKERS.map((speaker, i) => (
          <div
            key={speaker.name}
            className="flex flex-col items-center justify-start gap-4"
          >
            <Image
              src={speaker.image}
              alt={`Speaker ${i + 1}`}
              width={200}
              height={200}
              className="aspect-square object-cover object-top rounded-full grayscale hover:grayscale-0 transition-all duration-300 border-2 border-black"
            />

            <p className="text-center text-sm">{speaker.name}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-lg mt-8">
        Be next!{" "}
        <a
          href="mailto:hello@serverlessdays.io?subject=Interested%20in%20Speaking%20at%20ServerlessDays"
          className="text-black underline"
        >
          Contact us
        </a>{" "}
        for speaking opportunities.
      </p>
    </section>
  );
}
