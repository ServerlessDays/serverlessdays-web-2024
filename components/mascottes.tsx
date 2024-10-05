"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Import mascot SVGs
import AnteaterSVG from "@/app/images/mascottes/anteater.svg";
import DinoSVG from "@/app/images/mascottes/dino.svg";
import DogSVG from "@/app/images/mascottes/dog.svg";
import MothSVG from "@/app/images/mascottes/moth.svg";
import OctoSVG from "@/app/images/mascottes/octo.svg";
import OwlSVG from "@/app/images/mascottes/owl.svg";
import UnicornSVG from "@/app/images/mascottes/unicorn.svg";

export function Mascottes() {
  return (
    <motion.div
      className="container mx-auto px-4 py-8 justify-between items-center grid grid-cols-2 lg:grid-cols-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image src={AnteaterSVG} alt="Anteater mascot" className="size-48" />
      <Image src={DinoSVG} alt="Dino mascot" className="size-48" />
      <Image src={DogSVG} alt="Dog mascot" className="size-48" />
      <Image src={UnicornSVG} alt="Unicorn mascot" className="size-48" />
      <Image src={MothSVG} alt="Moth mascot" className="size-48" />
      <Image src={OctoSVG} alt="Octo mascot" className="size-48" />
      <Image src={OwlSVG} alt="Owl mascot" className="size-48" />
    </motion.div>
  );
}
