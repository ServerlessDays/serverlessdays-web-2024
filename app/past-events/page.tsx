import { getEvents } from "@/lib/server";
import { UpcomingEventCard } from "@/components/upcoming-event-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Past events - ServerlessDays",
  description: "Explore past ServerlessDays events from around the world. Discover the history of our community-organized conferences on serverless technologies.",
};

export default async function PreviousEventsPage() {
  const events = (await getEvents({ future: false })).reverse();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Past Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {events.map((event, ii) => (
          <UpcomingEventCard key={ii} event={event} type="past" />
        ))}
      </div>
    </div>
  );
}
