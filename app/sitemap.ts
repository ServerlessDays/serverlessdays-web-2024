import { MetadataRoute } from "next";
import { getEvents } from "@/lib/server";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.serverlessdays.io";
const lastModified = new Date(); // cached at build time

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const conferences = await getEvents();

  const conferenceUrls = Array.from(new Set(conferences.map((conference) => ({
    url: `${BASE_URL}/${conference.slug}`,
    lastModified: lastModified,
  }))));

  return [
    {
      url: `${BASE_URL}`,
      lastModified: lastModified,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: lastModified,
    },
    {
      url: `${BASE_URL}/coc`,
      lastModified: lastModified,
    },
    ...["en", "it", "fr", "pt-br", "es"].map((lang) => ({
      url: `${BASE_URL}/coc/${lang}`,
      lastModified: lastModified,
    })),
    {
      url: `${BASE_URL}/past-events`,
      lastModified: lastModified,
    },
    {
      url: `${BASE_URL}/organize`,
      lastModified: lastModified,
    },
    ...conferenceUrls,
  ];
}
