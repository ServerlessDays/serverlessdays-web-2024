import pageMd from './page.md?raw';
import Markdown from '@/components/markdown';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organize an event - ServerlessDays",
};

export default async function OrganizePage() {
  return (
    <div className="container mx-auto max-w-3xl p-4">
      <Markdown>{pageMd}</Markdown>
    </div>
  );
}
