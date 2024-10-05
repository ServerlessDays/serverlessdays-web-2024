"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ChevronRight, HeartHandshakeIcon, MapPinIcon, PersonStandingIcon, TreesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
// @ts-ignore
import { useInView } from "react-intersection-observer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import images
import image1 from "@/app/images/events/2024-milano-1.webp";
import image2 from "@/app/images/events/2024-milano-2.webp";
import image3 from "@/app/images/events/2024-milano-3.webp";
import image4 from "@/app/images/events/2024-milano-4.webp";

export function ServerlessDaysLandingComponent() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <main className="container mx-auto px-4">
        <motion.section
          className="text-center mb-40 mt-16 items-center flex flex-col"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="hidden md:block text-4xl lg:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            ServerlessDays
          </motion.h1>
          <motion.p className="text-2xl mb-8" variants={itemVariants}>
            One Day. One Track. One Community.
          </motion.p>

          <motion.div
            className="max-w-xl grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-4"
            variants={itemVariants}
          >
            <Button
              variant="default"
              size="lg"
              className="font-semibold hover:bg-black hover:text-white transition-colors"
              onClick={() =>
                document
                  .getElementById("join")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Upcoming events
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-semibold hover:bg-black hover:text-white transition-colors"
              onClick={() =>
                document
                  .getElementById("sponsor")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Become a sponsor
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-semibold hover:bg-black hover:text-white transition-colors"
              onClick={() =>
                document
                  .getElementById("host")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Host an event
            </Button>
          </motion.div>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.section
            className="mb-20"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl font-bold mb-6 border-b-0 border-black pb-2"
              variants={itemVariants}
            >
              About ServerlessDays
            </motion.h2>
            <motion.p
              className="text-lg mb-6 max-w-prose"
              variants={itemVariants}
            >
              ServerlessDays is a global conference series focused on fostering the
              serverless community. So far, our community organized{" "}
              <strong>52 events</strong> in <strong>20 countries</strong>{" "}
              across the globe.
            </motion.p>
            <motion.p
              className="text-lg mb-6 max-w-prose"
              variants={itemVariants}
            >
              Each conference is <u>unique</u>,
              <u>locally organized</u>, and <u>not-for-profit</u>.
            </motion.p>
            <motion.h3
              className="text-2xl font-semibold mb-4"
              variants={itemVariants}
            >
              Our core principles are:
            </motion.h3>
            <motion.ul
              className="list-none list-outside text-lg space-y-4 max-w-prose"
              variants={itemVariants}
            >
              <li>
                <strong><MapPinIcon className="inline text-gray-800" /> Local </strong> - Organized by local community leaders
                and featuring local speakers.
              </li>
              <li>
                <strong><PersonStandingIcon className="inline text-gray-800" /> Accessible </strong> - Affordable and physically
                accessible to all attendees.
              </li>
              <li>
                <strong><HeartHandshakeIcon className="inline text-gray-800" /> Representative </strong> - Reflective of the broader
                community; enforcing our Code of Conduct.
              </li>
              <li>
                <strong><TreesIcon className="inline text-gray-800" /> Sustainable </strong> - Environmentally conscious,
                promoting sustainable tech practices.
              </li>
            </motion.ul>
          </motion.section>

          <motion.section
            className="hidden md:block"
            ref={ref}
            initial="visible"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="">
              <Carousel>
                <CarouselContent>
                  {[image1, image2, image3, image4].map((img, index) => (
                    <CarouselItem key={index} className="aspect-square flex items-center justify-center">
                      <Image
                        src={img}
                        alt={`Gallery image ${index + 1}`}
                        width={800}
                        height={600}
                        className="rounded-md object-cover"
                        fetchPriority="low"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="bg-white border-2 border-black p-2 rounded-full" />
                <CarouselNext className="bg-white border-2 border-black p-2 rounded-full" />
              </Carousel>
            </motion.div>
          </motion.section>
        </div>

        <section id="join" className="mb-20">
          <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">
            Upcoming conferences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((conf) => (
              <div
                key={conf}
                className="bg-white border-2 border-black p-6 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  ServerlessDays {conf}
                </h3>
                <p className="mb-4">Date: TBA</p>
                <p className="mb-4">Location: TBA</p>
                <a
                  href="#"
                  className="hover:underline inline-flex items-center font-bold text-secondary"
                >
                  Get tickets <ChevronRight className="ml-1" />
                </a>
              </div>
            ))}
          </div>

          {/* New CTA section */}
          <div className="mt-12 bg-gray-100 border-2 border-black p-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated on Future Events
            </h3>
            <p className="mb-6">
              Don&apos;t miss out on upcoming ServerlessDays conferences in your
              area. Join our mailing list to receive updates and announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 border-2 border-black rounded"
              />
              <Button variant="default" size="lg" className="font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">
            Our speakers
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="aspect-square flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=200&width=200`}
                  alt={`Speaker ${i + 1}`}
                  width={200}
                  height={200}
                  className="rounded-full grayscale hover:grayscale-0 transition-all duration-300 border-2 border-black"
                />
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-lg">
            Interested in speaking?{" "}
            <a
              href="mailto:hello@serverlessdays.io?subject=Interested%20in%20Speaking%20at%20ServerlessDays"
              className="text-black hover:underline"
            >
              Contact us to share your story.
            </a>
          </p>
        </section>

        <section id="sponsor" className="mb-20">
          <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">
            Our sponsors
          </h2>
          <p className="text-lg max-w-prose mb-8">
            Each event is indipendently organized and <u>funded by awesome sponsors</u>. We&apos;re incredibly grateful for many companies that show their continued support by sponsoring many ServerlessDays worldwide. Previous events have been sponsored by:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <Image
                  src={`/placeholder.svg?height=100&width=200`}
                  alt={`Sponsor ${i + 1}`}
                  width={200}
                  height={100}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-lg">
            Interested in sponsoring?{" "}
            <a
              href="mailto:hello@serverlessdays.io?subject=Interested%20in%20Sponsoring%20ServerlessDays"
              className="text-black hover:underline"
            >
              Reach out to us for opportunities.
            </a>
          </p>
        </section>

        <section id="host" className="mb-20">
          <h2 className="text-4xl font-bold mb-6 border-b-0 border-black pb-2">
            Organize
          </h2>
          <p className="text-lg mb-4 max-w-prose">
            Want to bring ServerlessDays to your area? Join our mission to build
            a strong local serverless community. Contact us at{" "}
            <a
              href="mailto:organise@serverlessdays.io?subject=Interested%20in%20Organizing%20ServerlessDays"
              className="text-black hover:underline"
            >
              organise@serverlessdays.io
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
