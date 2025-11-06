//Vendor Imports
import Link from "next/link";
import type { Metadata } from "next";
import { CircleCheck, Download, ShoppingCart, Slash } from "lucide-react";

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
                caption={`Free ${portfolioItem.title}`}
                desc={portfolioItem.subtitle}
              />
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                {portfolioItem.downloadLink && (
                  <Button asChild className="text-base">
                    <a
                      className="flex flex-row items-center justify-center gap-3"
                      href={portfolioItem.downloadLink}
                    >
                      <Download />
                      <span> Download Now</span>
                    </a>
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
            <section
              id="purchase"
              className="container mx-auto scroll-m-20 px-5 pt-10 lg:px-10 lg:pt-20 xl:max-w-screen-xl"
            >
              <div className="flex flex-col items-center">
                <SectionHeader
                  element="h2"
                  caption={`License Pricing`}
                  desc={
                    "Lifetime license with one-time purchase | Free upgrades | 15-day money-back guarantee | Secure payments via FastSpring"
                  }
                />

                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {portfolioItem.licenseOptions.map((license, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center"
                    >
                      <Button
                        asChild
                        variant={"outline"}
                        className="h-16 w-[275px]"
                      >
                        <Link
                          aria-label={`Buy ${license.licenseType} for ${license.price}`}
                          className="flex gap-3"
                          target="_blank"
                          href={license.paymentLink}
                          rel="noopener noreferrer"
                        >
                          <ShoppingCart />
                          <div className="flex flex-col items-start">
                            <span>{license.licenseType}</span>
                            <span>{license.price}</span>
                          </div>
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <h3 className="mt-10 font-semibold">
                    Secure Payments via FastSpring
                  </h3>
                  <p className="mt-2">
                    We partner with Bright Market, LLC, dba FastSpring, located
                    at 801 Garden St., Santa Barbara, CA 93101, USA, for secure
                    and efficient payment processing. Once your order is
                    complete, FastSpring will immediately send a license key to
                    the email address associated with your order. To activate
                    your license, simply enter the key in the app. For your
                    privacy, FastSpring does not share any sensitive payment
                    information, such as credit card details, with us. Your
                    transaction is completely secure.
                  </p>

                  <h3 className="mt-10 font-semibold">
                    One-Time Purchase with Lifetime License
                  </h3>
                  <p className="mt-2">
                    Enjoy a lifetime of access with just a one-time purchase of
                    our JPG to PDF converter. Once you’ve acquired the license,
                    there are no recurring fees or subscriptions. This lifetime
                    license provides you unlimited use of our powerful
                    conversion tools, making it a valuable, long-term investment
                    for users who frequently work with image to PDF conversions.
                  </p>

                  <h3 className="mt-10 font-semibold">
                    Free Lifetime Upgrades
                  </h3>
                  <p className="mt-2">
                    Stay up-to-date with all the latest features and
                    enhancements, free of charge. Our lifetime license includes
                    complimentary upgrades, ensuring you always have access to
                    the most optimized and advanced version of our converter.
                    Whether it’s new settings, increased speed, or enhanced
                    usability, you’ll receive every improvement at no additional
                    cost.
                  </p>

                  <h3 className="mt-10 font-semibold">
                    15-Day Money-Back Guarantee
                  </h3>
                  <p className="mt-2">
                    We&apos;re confident you&apos;ll find our converter
                    indispensable, but we understand that every user&apos;s
                    needs are different. That&apos;s why we offer a 15-day
                    money-back guarantee with your purchase. Try the software,
                    explore its features, and if you&apos;re not fully
                    satisfied, we&apos;ll gladly refund your payment within this
                    period — no questions asked.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
}
