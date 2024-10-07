// import Image from "next/image";

// Import images
import { Hero } from "@/components/hero";
import { UpcomingEvents } from "@/components/upcoming-events";
import { About } from "@/components/about";
import { Sponsors } from "@/components/sponsors";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <main className="container mx-auto px-4">
        <Hero />

        <UpcomingEvents />

        <About />

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
                {/* <Image
                  src={`/placeholder.svg?height=200&width=200`}
                  alt={`Speaker ${i + 1}`}
                  width={200}
                  height={200}
                  className="rounded-full grayscale hover:grayscale-0 transition-all duration-300 border-2 border-black"
                /> */}
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

        <Sponsors />

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
