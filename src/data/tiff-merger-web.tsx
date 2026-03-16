// src/data/tiff-merger-web.tsx

import {
  Categories,
  portfolioItem,
  ProductIDs,
  productImages,
  productSubTitles,
  productTitles,
  productWebsites,
  siteName,
  websiteURL,
} from "@/data/website-data";

import cloudinaryLoader from "@/lib/cloudinary-loader";

const description =
  "Need to combine multiple TIFF files into one? Our online TIFF merger lets you do it securely right in your browser. There's no need to upload your sensitive documents to any server—everything stays 100% private on your device. We offer a fully functional free trial so you can test all features, including custom compression, color modes, and DPI settings. It works instantly on both mobile and desktop!";

const features = [
  "Convenient Online Web App for Instant Use",
  "Local, Secure, and Private File Merging",
  "Combine Multiple TIFFs into a Single Multi-Page File",
  "Advanced Settings: Customize Compression, Color Mode, and DPI",
  "Simple Drag-and-Drop with Easy File Rearrangement",
];

const faqs = [
  {
    question: "Is the TIFF merger free to use?",
    answer:
      "The tool offers a free trial with a limited number of operations — fully functional with no feature restrictions during the trial. No account required to try it. For unlimited operations, a one-time license purchase is available.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All merging happens entirely in your browser using client-side processing. Your files never leave your device, ensuring complete privacy and security.",
  },
  {
    question: "Can I customize the output TIFF file?",
    answer:
      "Yes. You can customize the compression type (e.g., LZW), color mode, and DPI for the merged TIFF document to suit your specific archiving or printing needs.",
  },
  {
    question: "Is there a file size limit?",
    answer:
      "Because the processing is done locally in your browser, there is no strict file size limit imposed by a server. You can process gigabyte-sized TIFFs instantly using your device's own power.",
  },
  {
    question: "What devices and operating systems are supported?",
    answer:
      "The merger works on any device with a modern browser — desktop, laptop, tablet, or smartphone. No downloads or installations are required.",
  },
];

export const TIFFMergerWeb: portfolioItem = {
  id: ProductIDs.TIFFMergerWeb,
  title: productTitles.TIFFMergerWeb,
  subtitle: productSubTitles.TIFFMergerWeb,
  src: productImages.TIFFMergerWeb.imgName,
  width: productImages.TIFFMergerWeb.width,
  height: productImages.TIFFMergerWeb.height,
  categories: [Categories.All, Categories.Online, Categories.Merger],
  pageLink: `/${ProductIDs.TIFFMergerWeb}`,
  productWebsite: productWebsites.TIFFMergerWeb,
  features,
  description: (
    <div className="flex flex-col">
      <h2 className="mt-10 font-bold">
        Merge TIFFs Online Without Giving Up Your Privacy
      </h2>
      <p className="mt-2">
        Let&apos;s be honest—uploading sensitive documents to a random server
        just to combine them isn&apos;t ideal. That&apos;s why our TIFF merger
        does everything locally, right inside your browser. Your files never
        leave your device, meaning you get 100% privacy and top-tier security.
        It&apos;s the perfect solution for handling confidential invoices,
        medical records, or personal documents.
      </p>

      <h3 className="mt-8 font-semibold">
        No Uploads, No Waiting, Works Offline
      </h3>
      <p className="mt-2">
        Since we skip the uploading step entirely, you can process massive,
        multi-page TIFF files instantly using your own device&apos;s power.
        Plus, as a Progressive Web App (PWA), you can even use it when your
        internet connection drops. It&apos;s fast, reliable, and always ready
        when you need it.
      </p>

      <h2 className="mt-10 font-bold">
        Fully Functional Free Trial (No Catch)
      </h2>
      <p className="mt-2">
        We want you to see exactly how well this works, which is why we offer a
        fully functional free trial. There are no sneaky feature restrictions or
        watermarks—you just have a limit on the number of operations you can
        perform. You don&apos;t even need to create an account to try it out!
      </p>

      <h3 className="mt-8 font-semibold">Tweak Your Output Like a Pro</h3>
      <p className="mt-2">
        Need your merged document formatted a specific way? We&apos;ve got you
        covered. You can easily adjust the <strong>Compression</strong> (like
        LZW to save space), change the <strong>Color Mode</strong> (Grayscale,
        Black & White, etc.), and set the exact <strong>DPI</strong> you need
        for perfect printing or digital archiving.
      </p>

      <h2 className="mt-10 font-bold">As Simple as Drag and Drop</h2>
      <p className="mt-2">
        Nobody wants to navigate clunky menus. Just grab your TIFF files, drag
        them directly into the tool, and you&apos;re good to go. You can even
        rearrange them seamlessly before merging so your final multi-page TIFF
        is organized exactly how you want it.
      </p>

      <h3 className="mt-8 font-semibold">Works Wherever You Are</h3>
      <p className="mt-2">
        Whether you&apos;re sitting at a desktop PC, working on a laptop, or
        using a tablet on the couch, our online web app works flawlessly across
        modern browsers. There&apos;s absolutely nothing to download or install.
      </p>

      <h2 className="mt-10 font-bold">Frequently Asked Questions:</h2>

      <dl className="mt-5 space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <dt className="font-semibold">{faq.question}</dt>
            <dd className="mt-2">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  ),
  metaData: {
    title: `${productTitles.TIFFMergerWeb} Online | Private, Secure & Free Trial`,
    keywords:
      "private tiff merger, client-side tiff merger, no upload tiff to tiff, merge tiff mobile, merge multi-page tiff online, tiff merger secure, online tiff merger, tiff combine tool, tiff merger trial, batch tiff merger online, merge tiff locally, secure tiff tool",
    description,
    alternates: {
      canonical: productWebsites.TIFFMergerWeb,
    },
    openGraph: {
      title: `${productTitles.TIFFMergerWeb} Online | Private, Secure & Free Trial`,
      description,
      url: productWebsites.TIFFMergerWeb,
      siteName: siteName,
      images: [
        {
          url: cloudinaryLoader({
            src: productImages.TIFFMergerWebOG.imgName,
            width: productImages.TIFFMergerWebOG.width,
          }),
          width: productImages.TIFFMergerWebOG.width,
          height: productImages.TIFFMergerWebOG.height,
          alt: `${productTitles.TIFFMergerWeb} Online`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@pdftifftools",
      creator: "@pdftifftools",
      title: `${productTitles.TIFFMergerWeb} Online | Private, Secure & Free Trial`,
      description,
      images: [
        cloudinaryLoader({
          src: productImages.TIFFMergerWebOG.imgName,
          width: productImages.TIFFMergerWebOG.width,
        }),
      ],
    },
  },
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${websiteURL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: productTitles.TIFFMergerWeb,
          item: productWebsites.TIFFMergerWeb,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};
