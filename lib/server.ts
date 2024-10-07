import events from "@/app/events.json";
import { isValid, compareAsc, format, parse, isAfter } from "date-fns";

export type Event = {
  label: string;
  loc: {
    lat: number;
    lng: number;
  };
  email: string;
  website?: string;
  date?: Date;
  humanDate?: string;
  image?: string;
};

export const humanizeDate = (
  date: string | undefined
): {
  date: Date | null;
  humanDate: string;
} => {
  if (!date) {
    return { date: null, humanDate: "" };
  }

  const dateObj = parse(date, "d MMMM yyyy", new Date());

  if (!isValid(dateObj)) {
    return { date: null, humanDate: `${date}` };
  }

  const humanDate = format(dateObj, "d MMMM yyyy", {});
  return { date: dateObj, humanDate };
};

export async function getEvents(options: { future?: boolean } = {}) {
  let ret = events
    .map((event) => ({
      ...event,
      ...humanizeDate(event.date),
    }))
    .filter((event) => isValid(event.date))
    .sort((a, b) => compareAsc(a.date!, b.date!)) as Event[];

  // if future, return only future events
  if (options.future) {
    ret = ret.filter((event) => event.date && isAfter(event.date, new Date()));
  }

  return ret;
}
