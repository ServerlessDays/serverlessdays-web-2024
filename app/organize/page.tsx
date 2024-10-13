import pageMd from './page.md?raw';
import Markdown from '@/components/markdown';

export default async function OrganizePage() {
  return (
    <div className="container mx-auto max-w-3xl p-4">
      <Markdown>{pageMd}</Markdown>
    </div>
  );
}
