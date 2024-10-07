// import Image from "next/image";

// Import images
import { Hero } from "@/components/hero";
import { UpcomingEvents } from "@/components/upcoming-events";
import { About } from "@/components/about";
import { Sponsors } from "@/components/sponsors";
import { Speakers } from "@/components/speakers";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <main className="container mx-auto px-4 flex flex-col gap-36">
        <Hero />

        <UpcomingEvents />

        <About />

        <Speakers />

        <Sponsors />

        <section id="host">
          <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">
            Organize
          </h2>
          <p className="text-lg mb-4 max-w-prose">
            Want to bring ServerlessDays to your area? Join our mission to build
            a strong local serverless community. Contact us at{" "}
            <a
              href="mailto:organise@serverlessdays.io?subject=Interested%20in%20Organizing%20ServerlessDays"
              className="text-black hover:underline"
            >
              organise@serverlessdays.io
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
