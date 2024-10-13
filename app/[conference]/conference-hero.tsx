"use client";

import { Button } from "@/components/ui/button";
import { Event } from "@/lib/server";
import { motion } from "framer-motion";
import Link from "next/link";

export function ConferenceHero({ event }: { event: Event }) {
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
    <motion.section
      className="text-center my-16 items-center flex flex-col"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="break-words text-4xl lg:text-6xl font-bold mb-4"
        variants={itemVariants}
      >
        ServerlessDays {event.label}
      </motion.h1>

      <motion.p
        className="text-xl mb-8 max-w-3xl mx-auto"
        variants={itemVariants}
      >
        Join us in{" "}
        <Link
          href={`https://www.google.com/maps?q=${event.loc.lat},${event.loc.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold text-secondary"
        >
          {event.label}
        </Link>{" "}
        on{" "}
        <strong className="font-bold text-secondary">{event.humanDate}</strong>{" "}
        for a local, no-profit, accessible and inclusive event about serverless
        technologies.
      </motion.p>

      <motion.div
        className="max-w-xl grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4"
        variants={itemVariants}
      >
        <Button
          variant="default"
          size="lg"
          className="font-semibold hover:bg-black hover:text-white transition-colors"
          asChild
        >
          <Link href={`/${event.slug}/r`} className="no-underline">Details & Tickets</Link>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="font-semibold hover:bg-black hover:text-white transition-colors"
          asChild
        >
          <Link href="/" className="no-underline">Find other events</Link>
        </Button>
      </motion.div>
    </motion.section>
  );
}
