import Markdown from "@/components/markdown";
import ActiveLink from "@/components/active-link";

import contentEn from "./page-en.md?raw";
import contentIt from "./page-it.md?raw";
import contentFr from "./page-fr.md?raw";
import contentPtBr from "./page-pt-br.md?raw";
import contentEs from "./page-es.md?raw";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct - ServerlessDays",
  description: "ServerlessDays is dedicated to providing a harassment-free experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices.",
};

export default async function CodeOfConduct({ params }: { params: { lang: string } }) {
  let content: string;
  switch (params.lang) {
    case "en": content = contentEn; break;
    case "it": content = contentIt; break;
    case "fr": content = contentFr; break;
    case "pt-br": content = contentPtBr; break;
    case "es": content = contentEs; break;
    default: content = contentEn;
  }

  return (
    <div className="container mx-auto max-w-3xl px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 mb-8 gap-2">
        <ActiveLink href="/coc/en">English</ActiveLink>
        <ActiveLink href="/coc/it">Italian</ActiveLink>
        <ActiveLink href="/coc/pt-br">Português (Brasil)</ActiveLink>
        <ActiveLink href="/coc/es">Español</ActiveLink>
        <ActiveLink href="/coc/fr">French</ActiveLink>
      </div>

      <Markdown>{content}</Markdown>
    </div>
  );
}
