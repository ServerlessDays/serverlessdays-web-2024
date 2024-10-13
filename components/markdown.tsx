import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeClassNames from 'rehype-class-names';

async function getMarkdownContent(md: string) {
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeClassNames, {
      h1: 'text-5xl font-bold mb-4',
      h2: 'text-3xl font-bold mb-4 mt-8',
      h3: 'text-xl font-bold mb-4 mt-8',
      h4: 'text-lg font-bold mb-4 mt-6',
      p: 'mb-6',
      ul: 'mb-6 list-disc list-outside pl-8',
      ol: 'mb-6 list-decimal list-outside pl-12',
      li: 'mb-1.5',
      strong: 'font-semibold text-secondary',
      hr: 'my-8',
      blockquote: 'border-l-4 border-gray-300 pl-4 italic',
    })
    .use(rehypeStringify)
    .process(md);
  return processedContent.toString();
}

export default async function Markdown({ children }: { children: string }) {
  const content = await getMarkdownContent(children);
  return <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />;
}
