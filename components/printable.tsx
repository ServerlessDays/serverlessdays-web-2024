"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function Printable({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div>
      <div ref={contentRef} className={cn("print:p-12", className)}>
        {children}
      </div>
      <Button onClick={() => reactToPrintFn()}>Print</Button>
    </div>
  );
}
