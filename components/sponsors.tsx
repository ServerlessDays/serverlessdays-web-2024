import logoAWS from "@/app/sponsors/aws-logo.svg";
import logoCloudflare from "@/app/sponsors/cloudflare-logo.svg";
import logoNTTDATA from "@/app/sponsors/nttdata-logo.svg";
import logoSG from "@/app/sponsors/sg-logo.svg";
import Image from "next/image";

const SPONSORS = [
  {
    name: "AWS",
    logo: logoAWS,
  },
  {
    name: "Cloudflare",
    logo: logoCloudflare,
  },
  {
    name: "NTT Data",
    logo: logoNTTDATA,
  },
  {
    name: "Serverless Guru",
    logo: logoSG,
  },
];

export function Sponsors() {
  return (
    <section id="sponsor" className="scroll-mt-14">
      <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">
        Our sponsors
      </h2>

      <p className="text-lg max-w-prose mb-8">
        Each event is indipendently organized and{" "}
        <strong>funded by awesome sponsors</strong>. We&apos;re incredibly grateful for
        the many companies that show their continued support across the globe.
        Previous events have been sponsored by:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {SPONSORS.map((sponsor) => (
          <div
            key={sponsor.name}
            className="bg-white p-4 py-8 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center aspect-square lg:aspect-auto"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={200}
              height={100}
              className="max-h-20"
            />
          </div>
        ))}
      </div>

      <p className="lg:text-center mt-8 text-lg">
        Interested in sponsoring?{" "}
        <a
          href="mailto:hello@serverlessdays.io?subject=Interested%20in%20Sponsoring%20ServerlessDays"
          className="text-black underline"
        >
          Reach out to us
        </a>{" "}
        for sponsorship opportunities.
      </p>
    </section>
  );
}
