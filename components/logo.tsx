import Image from "next/image";
import logo from "@/app/logo.svg";

export function Logo({ width = 300 }: { width?: number }) {
  return <Image src={logo} alt="ServerlessDays Logo" width={width} priority />
}
