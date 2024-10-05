"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import logo from "@/app/images/logo.svg";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="ServerlessDays Logo" width={300} priority />
        </Link>

        <div className="hidden md:flex space-x-6">
          <a href="#join" className="hover:underline">
            Upcoming events
          </a>
          <a href="#sponsor" className="hover:underline">
            Become a sponsor
          </a>
          <a href="#host" className="hover:underline">
            Host an event
          </a>
          <Link href="/coc" className="hover:underline">
            Code of conduct
          </Link>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMenu}
          className="md:hidden"
        >
          {isMenuOpen ? <X /> : <MenuIcon />}
        </Button>
      </nav>

      {isMenuOpen && (
        <div className="mt-4 flex flex-col space-y-2 md:hidden">
          <a href="#join" className="hover:underline">
            Attend
          </a>
          <a href="#sponsor" className="hover:underline">
            Become a sponsor
          </a>
          <a href="#host" className="hover:underline">
            Host an event
          </a>
          <Link href="/code-of-conduct" className="hover:underline">
            Code of conduct
          </Link>
        </div>
      )}
    </>
  );
}
