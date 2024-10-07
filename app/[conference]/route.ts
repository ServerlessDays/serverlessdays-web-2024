import { NextResponse } from "next/server";
import events from "@/app/events.json";

export async function GET(
  request: Request,
  { params }: { params: { conference: string } }
) {
  const conference = params.conference.toLowerCase();
  const latestEvent = events
    .filter((event) => event.slug === conference)
    .filter((event) => event.date) // filter out events without a date
    .sort(
      (a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime()
    )[0];

  if (latestEvent && latestEvent.website) {
    return NextResponse.redirect(latestEvent.website, { status: 307 });
  }

  return NextResponse.json({ error: "No website found" }, { status: 404 });
}
