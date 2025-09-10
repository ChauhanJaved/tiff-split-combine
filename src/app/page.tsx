//External Imports
import { Metadata } from "next";
//Internal Imports
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import { indexMetadata } from "@/data/website-data";

export const metadata: Metadata = indexMetadata;
export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Contact />
      </main>
    </>
  );
}
