// src/data/portfolio-items.ts

// Internal imports
import { portfolioItem } from "@/data/website-data";
import { TIFFSplitter } from "./tiff-splitter";
import { TIFFCombiner } from "./tiff-combiner";
import { TIFFSplitMerge } from "./tiff-split-merge";

export const portfolioItems: portfolioItem[] = [
  TIFFSplitter,
  TIFFCombiner,
  TIFFSplitMerge,
];
