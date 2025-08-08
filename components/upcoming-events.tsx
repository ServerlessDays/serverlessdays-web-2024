"use client";

import { useEffect, useState } from "react";
import { UpcomingEventCard } from "./upcoming-event-card";
import { Event } from "@/lib/server";

export function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/events.json');
        const allEvents = await response.json();
        
        // Process events client-side
        const processedEvents = allEvents
          .map((event: { date?: string; slug?: string; label: string; loc: { lat: number; lng: number }; email: string; website?: string }) => {
            if (!event.date) return null;
            
            const dateObj = new Date(event.date);
            if (isNaN(dateObj.getTime())) return null;
            
            return {
              ...event,
              date: dateObj,
              humanDate: dateObj.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })
            };
          })
          .filter((event: Event | null) => event !== null)
          .filter((event: Event) => {
            const now = new Date();
            return event.date && (event.date > now || event.date.toDateString() === now.toDateString());
          })
          .sort((a: Event, b: Event) => a.date!.getTime() - b.date!.getTime());

        setEvents(processedEvents);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section id="join" className="scroll-mt-14">
        <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">
          Upcoming conferences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
          <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
          <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="join" className="scroll-mt-14">
      <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">
        Upcoming conferences
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {events.map((event) => (
          <UpcomingEventCard key={event.slug} event={event} type="upcoming" />
        ))}
      </div>
    </section>
  );
}
