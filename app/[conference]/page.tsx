import { getConference } from "@/lib/server";
import { ConferenceHero } from "./conference-hero";
import { notFound } from "next/navigation";
import { About } from "@/components/about";
import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  params: { conference: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = await getConference(params.conference);

  if (!event) {
    return notFound();
  }

  return {
    title: `ServerlessDays ${event.label} - ${event.humanDate}`,
    description: `Join us in ${event.label} on ${event.humanDate} for a local, no-profit, accessible and inclusive event about serverless technologies.`,
    alternates: {
      canonical: `https://www.serverlessdays.io/${event.slug}`,
    },
  };
}

export default async function ConferencePage({ params }: Props) {
  const event = await getConference(params.conference);

  if (!event) {
    return notFound();
  }

  return (
    <div className="bg-white text-black font-mono">
      <main className="container mx-auto px-4 flex flex-col pt-4 pb-48 gap-48 items-center">
        <ConferenceHero event={event} />

        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="text-4xl font-bold border-b-0 border-black pb-2">
                About ServerlessDays
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <About small />
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" size="lg">
              <Link href={`/`} className="no-underline">
                Learn more
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
