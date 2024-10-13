// import Image from "next/image";

// Import images
import { Hero } from "@/components/hero";
import { UpcomingEvents } from "@/components/upcoming-events";
import { About } from "@/components/about";
import { Sponsors } from "@/components/sponsors";
import { Speakers } from "@/components/speakers";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "ServerlessDays",
  description:
    "A global conference series dedicated to building and connecting the serverless community. Locally organized, non-profit, and uniquely tailored to each location.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <main className="container mx-auto px-4 flex flex-col gap-20 lg:gap-36">
        <Hero />

        <UpcomingEvents />

        <About />

        <Speakers />

        <Sponsors />

        <section
          id="host"
          className="scroll-mt-14 flex flex-col gap-6 items-start mb-24"
        >
          <h2 className="text-4xl font-bold border-b-0 border-black pb-2">
            Organize
          </h2>

          <p className="text-lg max-w-prose">
            Want to bring ServerlessDays to your area? Join our mission to build
            a strong local serverless community.
            <br />
            <br />
            Read more about{" "}
            <Link href="/organize">how to organize a ServerlessDays event</Link>
            .
          </p>

          <Button
            size="lg"
            className="font-semibold hover:bg-black hover:text-white transition-colors"
            asChild
          >
            <Link href="/organize" className="no-underline">
              How to organize an event{" "}
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </section>
      </main>
    </div>
  );
}
