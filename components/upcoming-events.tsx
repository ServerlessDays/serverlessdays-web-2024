import { getEvents } from "@/lib/server";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export async function UpcomingEvents() {
  const events = await getEvents({
    future: true,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, ii) => (
        <div
          key={event.label}
          className={cn(
            "bg-white border-2 p-6 rounded-lg flex flex-col items-start",
            // the next conference is highlighted
            ii === 0
              ? "border-secondary shadow-[4px_4px_0px_0px_rgba(11,185,167,1)] "
              : "border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] "
          )}
        >
          <h3
            className={cn(
              "text-2xl font-semibold mb-4",
              ii === 0 && "text-secondary"
            )}
          >
            ServerlessDays {event.label}
          </h3>
          <p className="mb-4">Date: {event.humanDate}</p>
          <p className="mb-4 grow">
            Website:{" "}
            <a
              href={event.website}
              target="_blank"
              className="text-secondary underline underline-offset-2 hover:text-secondary/80 transition-colors duration-300 ease-in-out"
            >
              {event.website?.split("/")[2]}
            </a>
          </p>
          <a
            href={event.website}
            className="hover:underline inline-flex items-center font-bold text-secondary"
          >
            Get tickets <ChevronRight className="ml-1" />
          </a>
        </div>
      ))}
    </div>
  );
}
