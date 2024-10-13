import { getEvents } from "@/lib/server";
import { cn } from "@/lib/utils";
import {
  HeartHandshakeIcon,
  MapPinIcon,
  PersonStandingIcon,
  TreesIcon,
} from "lucide-react";

export async function About({
  small,
  extended,
}: {
  small?: boolean;
  extended?: boolean;
}) {
  const events = await getEvents();
  const locations = Array.from(
    new Set(events.map((event) => event.label))
  ).sort();

  return (
    <div
      id="about"
      className={cn(
        "grid grid-cols-1 gap-8 lg:gap-24 items-center prose scroll-mt-14",
        small || extended
          ? "lg:grid-cols-1"
          : "lg:grid-cols-2"
      )}
    >
      <section>
        {!small && (
          <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">
            About ServerlessDays
          </h2>
        )}

        <p className="text-lg mb-6 max-w-prose">
          ServerlessDays is a global conference series focused on fostering the
          serverless community.
        </p>
        <p className="text-lg mb-6 max-w-prose">
          Each conference is <u>unique</u>,<u>locally organized</u>, and{" "}
          <u>not-for-profit</u>.
        </p>
        <h3 className="text-xl font-semibold mb-4 mt-8">
          Our core principles are:
        </h3>
        <ul className="list-none list-outside text-md space-y-4 max-w-prose">
          <li className="flex flex-col items-start gap-2">
            <strong>
              <MapPinIcon className="inline text-gray-800" /> Local{" "}
            </strong>{" "}
            <span>
              Organized by local community leaders and featuring local speakers.
            </span>
          </li>
          <li className="flex flex-col items-start gap-2">
            <strong>
              <PersonStandingIcon className="inline text-gray-800" /> Accessible{" "}
            </strong>{" "}
            Affordable and physically accessible to all attendees.
          </li>
          <li className="flex flex-col items-start gap-2">
            <strong>
              <HeartHandshakeIcon className="inline text-gray-800" />{" "}
              Representative{" "}
            </strong>{" "}
            Reflective of the broader community; enforcing our Code of Conduct.
          </li>
          <li className="flex flex-col items-start gap-2">
            <strong>
              <TreesIcon className="inline text-gray-800" /> Sustainable{" "}
            </strong>{" "}
            Environmentally conscious, promoting sustainable tech practices.
          </li>
        </ul>
      </section>

      {!small && (
        <section className="flex flex-col gap-4 items-start">
          <p>
            We organized <strong>{events.length} events</strong> in{" "}
            <strong>{locations.length - 2} cities</strong>, including:{" "}
            <span className="inline md:hidden">
              {locations
                .filter((location) => !location.startsWith("("))
                .slice(10, 20)
                .map((location) => (
                  <span key={location}>{location}, </span>
                ))}

              <span>and more.</span>
            </span>
          </p>

          <div
            className={cn(
              "hidden md:grid gap-2 font-mono text-sm italic",
              extended ? "grid-cols-6" : "grid-cols-4"
            )}
          >
            {locations
              .filter((location) => !location.startsWith("("))
              .map((location) => (
                <div key={location}>{location}</div>
              ))}
          </div>
        </section>
      )}
    </div>
  );
}
