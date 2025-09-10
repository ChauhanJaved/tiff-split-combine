import { Metadata } from "next";
import { ReactNode } from "react";

export const headerCompanyName: string = "FrameworkTeam";
export const companyName: string = "FrameworkTeam Softwares";
export const email: string = "support@frameworkteam.com";
export const copyrightYear: string = new Date().getFullYear().toString();

export enum HeaderNavItems {
  Home = "home",
  Contact = "contact",
}
export const headerNavItems: string[] = [
  HeaderNavItems.Home,
  HeaderNavItems.Contact,
];
export const websiteURL: string = "https://www.tiff-split-combine.com/";
export const indexMetadata: Metadata = {
  title: "TIFF Combiner, Splitter & Split-Merge Tool (Online & Desktop App)",
  description:
    "Easily manage your TIFF files with our powerful tools: combine multiple TIFFs, split large TIFF files, or split & merge as needed. Available online or as secure offline desktop apps.",
  keywords: [
    "tiff combiner online",
    "tiff splitter online",
    "tiff split and merge online",
    "combine tiff files desktop app",
    "split tiff files desktop app",
    "merge tiff files desktop app",
    "tiff file tools",
    "tiff management software",
    "tiff editor",
    "secure tiff converter",
    "free tiff utility",
  ],
  alternates: {
    canonical: `${websiteURL}`,
  },
  openGraph: {
    title: "TIFF Combiner, Splitter & Split-Merge Tool (Online & Desktop App)",
    description:
      "Combine, split, or split & merge TIFF files instantly. Use our online TIFF tools or desktop apps for complete privacy, speed, and efficiency.",
    url: `${websiteURL}`,
    siteName: "TIFF File Tools",
    images: [
      {
        url: "https://res.cloudinary.com/dgq2mp4fs/image/upload/v1721890438/frameworkteam/hero-img.png",
        width: 539,
        height: 438,
        alt: "TIFF Combiner, Splitter & Split-Merge Tools Online & Desktop",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};
export const productImages = {
  TIFFSplitter: {
    title: "TIFF Splitter",
    imgName: `/${headerCompanyName.toLowerCase()}/${"tiff-splitter".toLowerCase()}`,
    width: 739,
    height: 469,
  },
  TIFFCombiner: {
    title: "TIFF Combiner",
    imgName: `/${headerCompanyName.toLowerCase()}/${"tiff-combiner".toLowerCase()}`,
    width: 739,
    height: 469,
  },
  TIFFSplitMerge: {
    title: "TIFF Split & Merge",
    imgName: `/${headerCompanyName.toLowerCase()}/${"tiff-split-merge".toLowerCase()}`,
    width: 739,
    height: 469,
  },
};
export enum Categories {
  All = "All",
  WebApp = "Web App",
  DesktopApp = "Desktop App",
  Converter = "Converter",
  Splitter = "Splitter",
  Merger = "Merger",
}
export const categoryList: string[] = [
  Categories.All,
  Categories.WebApp,
  Categories.DesktopApp,
  Categories.Converter,
  Categories.Splitter,
  Categories.Merger,
];

export enum ProductIDs {
  TIFFSplitter = "tiff-splitter",
  TIFFCombiner = "tiff-combiner",
  TIFFSplitMerge = "tiff-split-merge",
}
export const productTitles = {
  TIFFSplitter: "TIFF Splitter",
  TIFFCombiner: "TIFF Combiner",
  TIFFSplitMerge: "TIFF Split Merge",
} as const;
export type ProductTitles = (typeof productTitles)[keyof typeof productTitles];

export const productSubTitles = {
  TIFFSplitter: "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
  TIFFCombiner: "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
  TIFFSplitMerge: "Windows 11/10/8/7 | Fully Functional 15 Days Free Trial",
} as const;
export type ProductSubTitles =
  (typeof productSubTitles)[keyof typeof productSubTitles];

export const productWebsites = {
  TIFFSplitter: "https://www.tiff-split-combine.com/tiff-splitter.html",
  TIFFCombiner: "https://www.tiff-split-combine.com/tiff-combiner.html",
  TIFFSplitMerge: "https://www.tiff-split-combine.com/tiff-split-merge.html",
} as const;
export type ProductWebsite =
  (typeof productWebsites)[keyof typeof productWebsites];

export const productDownloadLinks = {
  TIFFSplitter:
    "https://tiff-split-combine.com/downloads/tiff-splitter-setup.exe",
  TIFFCombiner:
    "https://tiff-split-combine.com/downloads/tiff-combiner-setup.exe",
  TIFFSplitMerge:
    "https://tiff-split-combine.com/downloads/tiff-split-merge-setup.exe",
} as const;
export type ProductDownloadLinks =
  (typeof productDownloadLinks)[keyof typeof productDownloadLinks];
export interface portfolioItem {
  id: ProductIDs;
  title: ProductTitles;
  subtitle: ProductSubTitles;
  src: string;
  width: number;
  height: number;
  categories: Categories[];
  pageLink: string;
  productWebsite: ProductWebsite;
  downloadLink?: ProductDownloadLinks;
  features: string[];
  description?: ReactNode;
  metaData: Metadata;
}
