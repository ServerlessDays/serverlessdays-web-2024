"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function Hero() {
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
      className="text-center my-8 lg:my-16 items-center flex flex-col"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="break-words text-4xl lg:text-6xl font-bold mb-4"
        variants={itemVariants}
      >
        ServerlessDays
      </motion.h1>

      <motion.p
        className="text-xl mb-8 max-w-3xl mx-auto"
        variants={itemVariants}
      >
        A global conference series dedicated to building and connecting the
        serverless community. Locally organized, non-profit, accessible and
        inclusive.
      </motion.p>

      <motion.div
        className="max-w-xl grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4"
        variants={itemVariants}
      >
        <Button
          variant="default"
          size="xl"
          className="font-semibold hover:bg-black hover:text-white transition-colors"
          onClick={() =>
            document
              .getElementById("join")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Upcoming events
        </Button>
        {/* <Button
          variant="outline"
          size="xl"
          className="font-semibold hover:bg-black hover:text-white transition-colors"
          onClick={() =>
            document
              .getElementById("sponsor")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Become a sponsor
        </Button> */}
        <Button
          variant="outline"
          size="xl"
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
  );
}
