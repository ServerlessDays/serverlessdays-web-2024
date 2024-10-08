"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import logo from "@/app/logo.svg";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="ServerlessDays Logo" width={300} priority />
        </Link>

        <div className="hidden lg:flex space-x-6">
          <Link
            href="/#join"
            className="no-underline hover:underline"
            prefetch={true}
          >
            Upcoming events
          </Link>
          <Link
            href="/#sponsor"
            className="no-underline hover:underline"
            prefetch={true}
          >
            Become a sponsor
          </Link>
          <Link
            href="/#host"
            className="no-underline hover:underline"
            prefetch={true}
          >
            Host an event
          </Link>
          <Link
            href="/coc"
            className="no-underline hover:underline"
            prefetch={true}
          >
            Code of conduct
          </Link>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={toggleMenu}
          className="lg:hidden"
        >
          {isMenuOpen ? <X /> : <MenuIcon />}
        </Button>
      </nav>

      {isMenuOpen && (
        <div className="flex flex-col space-y-2 lg:hidden">
          <Link
            href="/#join"
            className="no-underline hover:underline"
            prefetch={true}
          >
            Upcoming events
          </Link>
          <Link
            href="/#sponsor"
            className="no-underline hover:underline"
            prefetch={true}
          >
            Become a sponsor
          </Link>
          <Link
            href="/#host"
            className="no-underline hover:underline"
            prefetch={true}
          >
            Host an event
          </Link>
          <Link
            href="/coc"
            className="no-underline hover:underline"
            prefetch={true}
          >
            Code of conduct
          </Link>
        </div>
      )}
    </>
  );
}
