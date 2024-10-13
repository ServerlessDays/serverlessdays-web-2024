import { About } from "@/components/about";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About - ServerlessDays",
  description:
    "ServerlessDays is a global conference series focused on fostering the serverless community.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <About extended />
    </div>
  );
}
