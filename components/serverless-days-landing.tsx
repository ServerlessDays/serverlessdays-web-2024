import Image from "next/image";
import { Button } from "@/components/ui/button";

// Import images
import { Hero } from "./hero";
import { UpcomingEvents } from "./upcoming-events";
import { About } from "./about";

export function ServerlessDaysLandingComponent() {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <main className="container mx-auto px-4">
        <Hero />

        <About />

        <section id="join" className="mb-20">
          <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">
            Upcoming conferences
          </h2>
          <UpcomingEvents />
          {/* New CTA section */}

          <div className="mt-12 bg-gray-100 border-2 border-black p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated on Future Events
            </h3>
            <p className="mb-6">
              Don&apos;t miss out on upcoming ServerlessDays conferences in your
              area. Join our mailing list to receive updates and announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 border-2 border-black rounded"
              />
              <Button variant="default" size="lg" className="font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">
            Our speakers
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square flex items-center justify-center"
              >
                <Image
                  src={`/placeholder.svg?height=200&width=200`}
                  alt={`Speaker ${i + 1}`}
                  width={200}
                  height={200}
                  className="rounded-full grayscale hover:grayscale-0 transition-all duration-300 border-2 border-black"
                />
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-lg">
            Interested in speaking?{" "}
            <a
              href="mailto:hello@serverlessdays.io?subject=Interested%20in%20Speaking%20at%20ServerlessDays"
              className="text-black hover:underline"
            >
              Contact us to share your story.
            </a>
          </p>
        </section>

        <section id="sponsor" className="mb-20">
          <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">
            Our sponsors
          </h2>
          <p className="text-lg max-w-prose mb-8">
            Each event is indipendently organized and{" "}
            <u>funded by awesome sponsors</u>. We&apos;re incredibly grateful
            for many companies that show their continued support by sponsoring
            many ServerlessDays worldwide. Previous events have been sponsored
            by:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <Image
                  src={`/placeholder.svg?height=100&width=200`}
                  alt={`Sponsor ${i + 1}`}
                  width={200}
                  height={100}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-lg">
            Interested in sponsoring?{" "}
            <a
              href="mailto:hello@serverlessdays.io?subject=Interested%20in%20Sponsoring%20ServerlessDays"
              className="text-black hover:underline"
            >
              Reach out to us for opportunities.
            </a>
          </p>
        </section>

        <section id="host" className="mb-20">
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
