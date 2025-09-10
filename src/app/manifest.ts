import type { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TIFF Tools - Combiner, Splitter & Split-Merge",
    short_name: "TIFF Tools",
    description:
      "Easily combine, split, and manage TIFF files with our fast, secure TIFF tools. Available online and as offline desktop apps.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/icons/apple-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
    ],
  };
}
