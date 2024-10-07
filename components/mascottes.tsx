"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Import mascot SVGs
import AnteaterSVG from "@/app/mascottes/anteater.svg";
import DinoSVG from "@/app/mascottes/dino.svg";
import DogSVG from "@/app/mascottes/dog.svg";
import MothSVG from "@/app/mascottes/moth.svg";
import OctoSVG from "@/app/mascottes/octo.svg";
import OwlSVG from "@/app/mascottes/owl.svg";
import UnicornSVG from "@/app/mascottes/unicorn.svg";

export function Mascottes() {
  return (
    <motion.div
      className="container mx-auto px-4 lg:py-8 justify-between items-center grid grid-cols-1 lg:grid-cols-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        src={AnteaterSVG}
        alt="Anteater mascot"
        className="hidden lg:block size-48"
      />
      <Image
        src={DinoSVG}
        alt="Dino mascot"
        className="hidden lg:block size-48"
      />
      <Image
        src={DogSVG}
        alt="Dog mascot"
        className="hidden lg:block size-48"
      />
      <Image
        src={UnicornSVG}
        alt="Unicorn mascot"
        className="size-64 lg:size-48 mx-auto"
      />
      <Image
        src={MothSVG}
        alt="Moth mascot"
        className="hidden lg:block size-48"
      />
      <Image
        src={OctoSVG}
        alt="Octo mascot"
        className="hidden lg:block size-48"
      />
      <Image
        src={OwlSVG}
        alt="Owl mascot"
        className="hidden lg:block size-48"
      />
    </motion.div>
  );
}
