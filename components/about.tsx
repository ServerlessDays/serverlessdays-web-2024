import { getEvents } from "@/lib/server";
import {
  HeartHandshakeIcon,
  MapPinIcon,
  PersonStandingIcon,
  TreesIcon,
} from "lucide-react";

export async function About() {
  const events = await getEvents();
  const locations = Array.from(
    new Set(events.map((event) => event.label))
  ).sort();

  return (
    <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <section>
        <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">
          About ServerlessDays
        </h2>
        <p className="text-lg mb-6 max-w-prose">
          ServerlessDays is a global conference series focused on fostering the
          serverless community. So far, our community organized{" "}
          <strong>{events.length} events</strong> in{" "}
          <strong>{locations.length - 2} cities</strong> across the globe.
        </p>
        <p className="text-lg mb-6 max-w-prose">
          Each conference is <u>unique</u>,<u>locally organized</u>, and{" "}
          <u>not-for-profit</u>.
        </p>
        <h3 className="text-xl font-semibold mb-4 mt-8">
          Our core principles are:
        </h3>
        <ul className="list-none list-outside text-md space-y-4 max-w-prose">
          <li>
            <strong>
              <MapPinIcon className="inline text-gray-800" /> Local{" "}
            </strong>{" "}
            - Organized by local community leaders and featuring local speakers.
          </li>
          <li>
            <strong>
              <PersonStandingIcon className="inline text-gray-800" /> Accessible{" "}
            </strong>{" "}
            - Affordable and physically accessible to all attendees.
          </li>
          <li>
            <strong>
              <HeartHandshakeIcon className="inline text-gray-800" />{" "}
              Representative{" "}
            </strong>{" "}
            - Reflective of the broader community; enforcing our Code of
            Conduct.
          </li>
          <li>
            <strong>
              <TreesIcon className="inline text-gray-800" /> Sustainable{" "}
            </strong>{" "}
            - Environmentally conscious, promoting sustainable tech practices.
          </li>
        </ul>
      </section>

      <section className="hidden md:block overflow-hidden">
        <div className="grid grid-cols-4 gap-2 font-serif italic">
          {locations
            .filter((location) => !location.startsWith("("))
            .map((location) => (
              <div key={location}>{location}</div>
            ))}
        </div>
      </section>
    </div>
  );
}
