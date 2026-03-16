// src/data/portfolio-items.ts

// Internal imports
import { portfolioItem } from "@/data/website-data";
import { TIFFCombiner } from "./tiff-combiner";
import { TIFFSplitMerge } from "./tiff-split-merge";
import { TIFFSplitterWeb } from "./tiff-splitter-web";
import { TIFFMergerWeb } from "./tiff-merger-web";
import { TIFFSplitterDesktop } from "./tiff-splitter-desktop";

export const portfolioItems: portfolioItem[] = [
  TIFFSplitterWeb,
  TIFFMergerWeb,
  TIFFSplitterDesktop,
  TIFFCombiner,
  TIFFSplitMerge,
];
