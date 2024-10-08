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
        "bg-white border-2 rounded-lg flex flex-col items-start hover:shadow-none transition-all duration-300 cursor-pointer",
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
          className="w-full h-[200px] object-cover object-top rounded-t-md border-b-2 border-black bg-[#d668a8]"
          onError={(e) => {
            e.currentTarget.onerror = null;
            setSrc(`/images/covers/default-cover.webp`);
          }}
        />
      </CardHeader>

      <CardContent className="grow">
        <CardTitle className={cn("text-2xl font-semibold mb-4")}>
          ServerlessDays {event.label}
        </CardTitle>

        <p className="mb-4">
          {event.humanDate || event.originalDateString || ""}
        </p>
      </CardContent>

      <CardFooter>
        {type === "past" ? "More Info" : "Get Tickets"}{" "}
        <ChevronRight className="ml-1" />
      </CardFooter>
    </Card>
  );
}
