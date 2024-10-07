"use client";

import { motion } from "framer-motion";
import {
  HeartHandshakeIcon,
  MapPinIcon,
  PersonStandingIcon,
  TreesIcon,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image1 from "@/app/images/events/2024-milano-1.webp";
import image2 from "@/app/images/events/2024-milano-2.webp";
import image3 from "@/app/images/events/2024-milano-3.webp";
import image4 from "@/app/images/events/2024-milano-4.webp";
import Image from "next/image";

export function About() {
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <motion.section
        className="mb-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold mb-6 border-b-0 border-black pb-2"
          variants={itemVariants}
        >
          About ServerlessDays
        </motion.h2>
        <motion.p className="text-lg mb-6 max-w-prose" variants={itemVariants}>
          ServerlessDays is a global conference series focused on fostering the
          serverless community. So far, our community organized{" "}
          <strong>61 events</strong> in <strong>20 countries</strong> across the
          globe.
        </motion.p>
        <motion.p className="text-lg mb-6 max-w-prose" variants={itemVariants}>
          Each conference is <u>unique</u>,<u>locally organized</u>, and{" "}
          <u>not-for-profit</u>.
        </motion.p>
        <motion.h3
          className="text-xl font-semibold mb-4 mt-8"
          variants={itemVariants}
        >
          Our core principles are:
        </motion.h3>
        <motion.ul
          className="list-none list-outside text-md space-y-4 max-w-prose"
          variants={itemVariants}
        >
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
        </motion.ul>
      </motion.section>

      <motion.section
        className="hidden md:block"
        initial="visible"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="">
          <Carousel>
            <CarouselContent>
              {[image1, image2, image3, image4].map((img, index) => (
                <CarouselItem
                  key={index}
                  className="aspect-square flex items-center justify-center"
                >
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
  );
}
