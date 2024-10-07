import { getEvents } from "@/lib/server";
import { UpcomingEventCard } from "./upcoming-event-card";

export async function UpcomingEvents() {
  const events = await getEvents({
    future: true,
  });

  return (
    <section id="join">
      <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">
        Upcoming conferences
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <UpcomingEventCard key={event.slug} event={event} />
        ))}
      </div>
    </section>
  );
}
