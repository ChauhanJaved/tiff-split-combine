//Vendor Imports
import Link from "next/link";
import type { Metadata } from "next";
import {
  CircleCheck,
  Download,
  Slash,
  SquareArrowOutUpRight,
} from "lucide-react";

//Internal Imports
import { Categories, HeaderNavItems } from "@/data/website-data";
import { portfolioItems } from "@/data/portfolio-items";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import ProductImage from "@/components/product-image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import BreadcrumbNextLink from "@/components/breadcrumb-next-link";
import ProductImageWebApp from "@/components/product-image-web-app";

type Props = {
  params: Promise<{ product: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ product: item.id }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product } = await params;
  const portfolioItem = portfolioItems.find((item) => item.id === product);
  return portfolioItem?.metaData ?? {};
}

export default async function Page({ params }: Props) {
  const { product } = await params;
  const portfolioItem = portfolioItems.find((item) => item.id === product);

  return (
    <>
      <div className="px-5 pt-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbNextLink
                linkName={
                  HeaderNavItems.Home[0].toUpperCase() +
                  HeaderNavItems.Home.slice(1)
                }
                hrefActiveSection={`/#${HeaderNavItems.Home}`}
                headerActiveSection={HeaderNavItems.Home}
              />
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{portfolioItem?.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <main id="main" className="text-lg">
        {portfolioItem && (
          <>
            <div className="container mx-auto flex flex-col items-center justify-center px-5 py-10 xl:max-w-screen-xl">
              <SectionHeader
                caption={portfolioItem.title}
                desc={portfolioItem.subtitle}
              />
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                {portfolioItem.downloadLink && (
                  <Button asChild className="text-base">
                    <Link
                      className="flex flex-row items-center justify-center gap-3"
                      href={portfolioItem.downloadLink}
                    >
                      <Download />
                      <span> Download Now</span>
                    </Link>
                  </Button>
                )}
              </div>

              <div className="mt-10 flex w-full flex-col justify-center md:flex-row">
                {/* ----- Box-1 ----- */}
                {portfolioItem.categories[1] === Categories.WebApp ? (
                  <ProductImageWebApp
                    src={portfolioItem.src}
                    width={portfolioItem.width}
                    height={portfolioItem.height}
                    alt={portfolioItem.title}
                    productWebsite={portfolioItem.productWebsite}
                  />
                ) : (
                  <ProductImage
                    src={portfolioItem.src}
                    width={portfolioItem.width}
                    height={portfolioItem.height}
                    alt={portfolioItem.title}
                    galleryID="product-image"
                  />
                )}

                {/* ----- Box-2 ----- */}
                <div className="mt-5 md:mt-0 md:ml-3 md:w-1/3">
                  <div className="flex flex-col text-center">
                    {portfolioItem.features.map((item, index) => (
                      <div key={index} className="mb-3 flex w-full flex-col">
                        <div className="flex flex-row items-start">
                          <div className="mt-1 size-6">
                            <CircleCheck />
                          </div>
                          <div className="flex flex-grow flex-col pl-3 text-left">
                            <h2 className={`text-base lg:text-lg`}>{item}</h2>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {portfolioItem.description}
            </div>
          </>
        )}
      </main>
    </>
  );
}
