import { Metadata } from "next";
import { ReactNode } from "react";

export const siteName: string = "pdf-tiff-tools.com";
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
export const websiteURL: string = "https://www.tiff-split-combine.com";
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
    canonical: `${websiteURL}/`,
  },
  openGraph: {
    title: "TIFF Combiner, Splitter & Split-Merge Tool (Online & Desktop App)",
    description:
      "Combine, split, or split & merge TIFF files instantly. Use our online TIFF tools or desktop apps for complete privacy, speed, and efficiency.",
    url: `${websiteURL}/`,
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
  TIFFSplitterWeb: {
    title: "TIFF Splitter Online",
    imgName: `/${headerCompanyName.toLowerCase()}/${"tiff-splitter-web-icon".toLowerCase()}`,
    width: 1024,
    height: 1024,
  },
  TIFFSplitterWebOG: {
    title: "TIFF Splitter Online",
    imgName: `/${headerCompanyName.toLowerCase()}/${"tiff-splitter-web-icon-og".toLowerCase()}`,
    width: 1200,
    height: 630,
  },
  TIFFMergerWeb: {
    title: "TIFF Merger Online",
    imgName: `/${headerCompanyName.toLowerCase()}/${"tiff-merger-web-icon".toLowerCase()}`,
    width: 1024,
    height: 1024,
  },
  TIFFMergerWebOG: {
    title: "TIFF Merger Online",
    imgName: `/${headerCompanyName.toLowerCase()}/${"tiff-merger-web-icon-og".toLowerCase()}`,
    width: 1200,
    height: 630,
  },
  TIFFSplitterDesktop: {
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
  Online = "Online",
  Desktop = "Desktop",
  Converter = "Converter",
  Splitter = "Splitter",
  Merger = "Merger",
}
export const categoryList: string[] = [
  Categories.All,
  Categories.Online,
  Categories.Desktop,
  Categories.Converter,
  Categories.Splitter,
  Categories.Merger,
];

export enum ProductIDs {
  TIFFSplitterWeb = "tiff-splitter",
  TIFFMergerWeb = "tiff-merger",
  TIFFSplitterDesktop = "tiff-splitter-desktop",
  TIFFCombiner = "tiff-combiner",
  TIFFSplitMerge = "tiff-split-merge",
}
export const productTitles = {
  TIFFSplitterWeb: "TIFF Splitter",
  TIFFMergerWeb: "TIFF Merger",
  TIFFSplitterDesktop: "TIFF Splitter",
  TIFFCombiner: "TIFF Combiner",
  TIFFSplitMerge: "TIFF Split Merge",
} as const;
export type ProductTitles = (typeof productTitles)[keyof typeof productTitles];

export const productSubTitles = {
  TIFFSplitterWeb:
    "Online tool to split TIFF | Secure & private, your files never leave your device",
  TIFFMergerWeb:
    "Online tool to merge TIFF | Secure & private, your files never leave your device",
  TIFFSplitterDesktop:
    "Windows 11/10/8/7 | Fully functional 15 days free trial",
  TIFFCombiner: "Windows 11/10/8/7 | Fully functional 15 days free trial",
  TIFFSplitMerge: "Windows 11/10/8/7 | Fully functional 15 days free trial",
} as const;
export type ProductSubTitles =
  (typeof productSubTitles)[keyof typeof productSubTitles];

export const productWebsites = {
  TIFFSplitterWeb: "https://www.pdf-tiff-tools.com/tiff-splitter/",
  TIFFMergerWeb: "https://www.pdf-tiff-tools.com/tiff-merger/",
  TIFFSplitterDesktop: "https://www.pdf-tiff-tools.com/tiff-splitter-desktop/",
  TIFFCombiner: "https://www.pdf-tiff-tools.com/tiff-combiner/",
  TIFFSplitMerge: "https://www.pdf-tiff-tools.com/tiff-split-merge/",
} as const;
export type ProductWebsite =
  (typeof productWebsites)[keyof typeof productWebsites];

export const productDownloadLinks = {
  TIFFSplitter:
    "https://www.tiff-split-combine.com/downloads/tiff-splitter-setup.exe",
  TIFFCombiner:
    "https://www.tiff-split-combine.com/downloads/tiff-combiner-setup.exe",
  TIFFSplitMerge:
    "https://www.tiff-split-combine.com/downloads/tiff-split-merge-setup.exe",
} as const;
export type ProductDownloadLinks =
  (typeof productDownloadLinks)[keyof typeof productDownloadLinks];

export interface LicenseOption {
  licenseType: string;
  price: string;
  paymentLink: string;
}

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
  licenseOptions?: LicenseOption[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}
