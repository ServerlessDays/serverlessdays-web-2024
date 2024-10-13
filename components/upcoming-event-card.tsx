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
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

type Props = {
  event: Event;
  type: "past" | "upcoming";
};

export function UpcomingEventCard({ event, type }: Props) {
  const { push } = useRouter();
  const [src, setSrc] = useState(`/images/covers/${event.slug}.webp`);

  return (
    <Card
      key={event.label}
      className={cn(
        "bg-white border-2 rounded-lg flex flex-col items-start hover:shadow-none transition-all duration-300 cursor-pointer group",
        "border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] "
      )}
      onClick={() => {
        push(`/${event.slug}`);
      }}
    >
      <CardHeader className="relative h-[200px] w-full mb-8">
        <Image
          src={src}
          alt=""
          fill={true}
          sizes="400px"
          className="w-full h-[200px] object-cover object-top rounded-t-md border-b-2 border-black bg-[#d668a8]"
          onError={(e) => {
            e.currentTarget.onerror = null;
            setSrc(`/images/covers/default-cover.webp`);
          }}
        />
      </CardHeader>

      <CardContent className="grow">
        <CardTitle className={cn("text-2xl font-semibold mb-4 text-balance")}>
          ServerlessDays {event.label}
        </CardTitle>

        <p className="mb-4">
          {event.humanDate || event.originalDateString || ""}
        </p>
      </CardContent>

      <CardFooter>
        <Link
          href={`/${event.slug}`}
          prefetch={true}
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="group-hover:underline inline-flex items-center font-bold"
        >
          {type === "past" ? "More Info" : "Get Tickets"}{" "}
          <ChevronRight className="ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
