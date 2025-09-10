import { ProductIDs, websiteURL } from "@/data/website-data";
import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${websiteURL}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${websiteURL}/index.html`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${websiteURL}/${ProductIDs.TIFFSplitter}.html`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/${ProductIDs.TIFFCombiner}.html`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/${ProductIDs.TIFFSplitMerge}.html`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
