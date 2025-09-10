"use client";
//External  imports

import React, { useState } from "react";
import Link from "next/link";

//Internal imports
import SectionHeader from "@/components/section-header";
import { poppins } from "@/lib/font";
import { Button } from "@/components/ui/button";
import { Categories, categoryList, HeaderNavItems } from "@/data/website-data";
import { portfolioItems } from "@/data/portfolio-items";
import { useActiveSection } from "@/context/active-section-context";
import Image from "next/image";

const Hero = () => {
  const { setActiveSection } = useActiveSection();
  const [selectedCategory, setSelectedCategory] = useState<Categories>(
    Categories.All,
  );
  const handleCategoryClick = (category: Categories) => {
    setSelectedCategory(category);
  };
  const filteredItems = portfolioItems.filter((item) =>
    [selectedCategory].every((category) => item.categories.includes(category)),
  );

  const filteredCategoryList = categoryList.filter(
    (category) =>
      category === Categories.All ||
      category === Categories.WebApp ||
      category === Categories.DesktopApp,
  );
  return (
    <section id={HeaderNavItems.Home} className="relative flex w-full flex-col">
      {/* Hero background image */}
      <Image
        className="object-cover dark:hidden"
        src={"/frameworkteam/hero-bg"}
        fill
        alt="hero image"
        priority
      />

      <div className="z-0 container m-auto px-5 pt-24 text-lg md:px-10 md:pt-32 xl:max-w-screen-xl">
        <div className="flex flex-col bg-transparent pt-5 pb-7 text-center">
          <SectionHeader
            caption="Free TIFF Split Combine Tool"
            desc="Easily combine, split, or split & merge TIFF files using our free online tools or secure desktop applications"
            element="h1"
          />
        </div>
        {/* ===== Catagory filter ===== */}
        <ul
          role="list"
          aria-label="Category filter"
          className={`${poppins.className} mt-5 flex flex-wrap items-center justify-center gap-3`}
        >
          {filteredCategoryList.map((item, index) => (
            <li key={index}>
              <Button
                onClick={() => handleCategoryClick(item)}
                variant={selectedCategory === item ? "default" : "outline"}
              >
                {item}
              </Button>
            </li>
          ))}
        </ul>
        <ul className="mt-5 mb-3 flex flex-wrap items-center justify-center text-center">
          {filteredItems.map((item, index) => {
            return (
              // ===== Portfolio Item =====
              <li
                key={index}
                className="flex w-full flex-col items-center justify-center p-4 sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <Link
                  href={item.pageLink}
                  onClick={() => {
                    setActiveSection("");
                  }}
                >
                  <div className="flex w-[200px] flex-col items-center justify-center rounded border py-3 shadow-md hover:shadow-lg active:shadow-lg">
                    <div className="bg-secondary/70 relative mt-3 flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-md">
                      <Image
                        src={item.src}
                        alt={`${item.title}`}
                        fill
                        className={`absolute inset-0 h-full w-full object-contain p-3`}
                        sizes="(max-width: 150px) 100vw, 150px"
                      />
                    </div>
                    <p className="mt-3 text-xs">{item.categories[1]}</p>
                    <p className="mt-2 text-sm font-bold">{item.title}</p>
                  </div>
                </Link>
              </li>
              // ===== End Portfolio Item =====
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Hero;
