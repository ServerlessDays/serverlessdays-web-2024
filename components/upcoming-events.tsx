import { getEvents } from "@/lib/server";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

export async function UpcomingEvents() {
  const events = await getEvents({
    future: true,
  });

  return (
    <section id="join" className="mb-20">
      <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">
        Upcoming conferences
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, ii) => (
          <Card
            key={event.label}
            className={cn(
              "bg-white border-2 rounded-lg flex flex-col items-start",
              // the next conference is highlighted
              ii === 0
                ? "border-secondary shadow-[4px_4px_0px_0px_rgba(11,185,167,1)] "
                : "border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] "
            )}
          >
            <CardHeader className="relative h-[200px] w-full mb-8">
              <Image
                src={`/images/covers/${event.slug}.webp`}
                alt={event.label}
                fill={true}
                className="w-full h-full object-cover object-top rounded-t-md"
              />
            </CardHeader>

            <CardContent>
              <CardTitle
                className={cn(
                  "text-2xl font-semibold mb-4",
                  ii === 0 && "text-secondary"
                )}
              >
                ServerlessDays {event.label}
              </CardTitle>
              <p className="mb-4">{event.humanDate}</p>
            </CardContent>

            <CardFooter>
              <a
                href={`/${event.slug}`}
                target="_blank"
                rel="noopener"
                className="hover:underline inline-flex items-center font-bold text-secondary"
              >
                Get tickets <ChevronRight className="ml-1" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

/* <div className="mt-12 bg-gray-100 border-2 border-black p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
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
          </div> */
