"use client";

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
import { Event } from "@/lib/server";

export function UpcomingEventCard({
  event,
  index,
}: {
  event: Event;
  index: number;
}) {
  return (
    <Card
      key={event.label}
      className={cn(
        "bg-white border-2 rounded-lg flex flex-col items-start hover:shadow-none transition-all duration-300 cursor-pointer",
        // the next conference is highlighted
        index === 0
          ? "border-secondary shadow-[4px_4px_0px_0px_rgba(11,185,167,1)] "
          : "border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] "
      )}
      onClick={() => {
        window.open(`/${event.slug}`, "_blank");
      }}
    >
      <CardHeader className="relative h-[200px] w-full mb-8">
        <Image
          src={`/images/covers/${event.slug}.webp`}
          alt={event.label}
          fill={true}
          className="w-full h-[200px] object-cover object-top rounded-t-md border-b-2 border-black"
        />
      </CardHeader>

      <CardContent>
        <CardTitle
          className={cn(
            "text-2xl font-semibold mb-4",
            index === 0 && "text-secondary"
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
          className="group-hover:underline inline-flex items-center font-bold"
        >
          Get tickets <ChevronRight className="ml-1" />
        </a>
      </CardFooter>
    </Card>
  );
}
