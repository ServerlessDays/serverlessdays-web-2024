"use client";

import { useEffect, useState } from "react";
import { UpcomingEventCard } from "@/components/upcoming-event-card";
import { Event } from "@/lib/server";

export default function PreviousEventsPage() {
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
            return event.date && event.date < now;
          })
          .sort((a: Event, b: Event) => b.date!.getTime() - a.date!.getTime());

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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Past Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
          <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
          <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
        </div>
      </div>
    );
  }

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
