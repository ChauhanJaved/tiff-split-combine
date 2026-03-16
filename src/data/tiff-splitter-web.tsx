// src/data/tiff-splitter-web.tsx
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
  "Split multi-page TIFF files instantly in your browser. Our private, secure tool requires no file uploads—your documents stay on your device. Works offline on any device with our fully functional free trial.";

const features = [
  "Instantly Split Multi-Page TIFFs Online in Your Browser",
  "Private & Secure Client-Side Processing",
  "Flexible Page Selection and Splitting Options",
  "Smart File Naming and Output Organization",
  "No-Upload Architecture – Files Stay on Device",
];

const faqs = [
  {
    question: "Is the TIFF splitter free to use?",
    answer:
      "Yes, our TIFF splitter provides a fully functional free trial with no restrictions on features—only the number of file operations is limited. You don't need to create an account to try it out. If you need unlimited operations, we offer a simple one-time license purchase.",
  },
  {
    question: "Are my TIFF files uploaded to your servers?",
    answer:
      "Absolutely not. We designed this tool with your privacy in mind. All the splitting processing happens locally right inside your web browser. Your confidential files never leave your computer or mobile device.",
  },
  {
    question: "Can I extract specific pages from my TIFF file?",
    answer:
      "Yes! You have full control. You can either extract a single page, pull out a specific custom range of pages, or split the document at regular intervals. It's perfect for pulling out exactly what you need.",
  },
  {
    question: "Do I need to download any software?",
    answer:
      "No downloads are required. The tool works securely directly in your modern web browser whether you're on a desktop, laptop, or mobile tablet. It even functions offline as a Progressive Web App (PWA) once loaded.",
  },
  {
    question: "Is there a file size limit for the TIFFs I want to split?",
    answer:
      "Because the processing relies entirely on your device's own hardware instead of our servers, there are no strict artificial file size limits. You can process gigabyte-sized TIFFs as quickly as your device can handle them, saving you significant time and bandwidth.",
  },
];

export const TIFFSplitterWeb: portfolioItem = {
  id: ProductIDs.TIFFSplitterWeb,
  title: productTitles.TIFFSplitterWeb,
  subtitle: productSubTitles.TIFFSplitterWeb,
  src: productImages.TIFFSplitterWeb.imgName,
  width: productImages.TIFFSplitterWeb.width,
  height: productImages.TIFFSplitterWeb.height,
  categories: [Categories.All, Categories.Online, Categories.Splitter],
  pageLink: `/${ProductIDs.TIFFSplitterWeb}`,
  productWebsite: productWebsites.TIFFSplitterWeb,
  features,
  description: (
    <div className="flex flex-col">
      <h2 className="mt-10 font-bold">Privacy-First Online TIFF Splitter</h2>
      <p className="mt-2">
        Unlike traditional online tools that force you to upload large,
        sensitive files to their servers, our{" "}
        <strong>Online TIFF Splitter</strong> runs entirely within your browser
        natively. Your confidential documents never leave your device or travel
        over the internet, ensuring proper compliance with secure workflow
        standards and giving you 100% data privacy.
      </p>

      <h3 className="mt-8 font-semibold">
        Instant Splitting &mdash; No Frustrating File Limits
      </h3>
      <p className="mt-2">
        By completely eliminating the need to upload files, you&#39;ll save
        tremendous amounts of time and bandwidth. You can easily process
        massive, gigabyte-sized TIFFs instantly using your computer&#39;s own
        processing power. Experience flawless performance even if your internet
        connection drops or is painfully slow.
      </p>

      <h2 className="mt-10 font-bold">Split Multi-Page TIFFs with Precision</h2>
      <p className="mt-2">
        Effortlessly break down massive, multi-page TIFF files into single,
        manageable pages. This is perfect for more efficient sharing, easier
        editing, and better storage management. It&#39;s incredibly useful if
        you deal with batch-scanned documents, large fax archives, and digitized
        enterprise reports that require you to access or reorganize individual
        pages on the fly.
      </p>

      <h3 className="mt-8 font-semibold">
        Extract Specific Pages or Custom Ranges
      </h3>
      <p className="mt-2">
        Take control by selecting exactly which pages you want to extract.
        Whether you need an isolated single page, a specific custom range, or
        want to split the document at regular intervals, our tool makes it
        simple. It&#39;s ideally suited for complex workflows like invoice
        reviews, patient file abstraction, or careful legal document submission
        systems.
      </p>

      <h2 className="mt-10 font-bold">
        Smart File Naming and Organized Outputs
      </h2>
      <p className="mt-2">
        We help you maintain strict order with logically and automatically
        generated filenames for every single split page. This thoughtful feature
        gracefully streamlines your batch processing, making high-volume tasks
        like legal discovery, corporate enterprise scanning, and tedious
        archival systems a breeze.
      </p>

      <h3 className="mt-8 font-semibold">Live Page Preview Before Splitting</h3>
      <p className="mt-2">
        Say goodbye to frustrating mistakes. With our built-in live preview of
        all TIFF pages, you can comfortably verify the order, read the content,
        and double-check your selection before committing to the split. This
        invaluable feature ultimately saves you time and prevents annoying
        rework.
      </p>

      <h3 className="mt-8 font-semibold">Drag-and-Drop Simplicity</h3>
      <p className="mt-2">
        We&#39;ve designed our interface purely for speed and maximum ease of
        use. Rapidly load your files using a straightforward drag-and-drop
        mechanism. Forget about technical setups or getting lost in complex
        navigation menus — just directly drag in your TIFF file and begin
        splitting instantly.
      </p>

      <h2 className="mt-10 font-bold">
        Fast, Reliable TIFF Splitting in Your Browser
      </h2>
      <p className="mt-2">
        Cleanly separate large TIFFs in mere seconds without ever sacrificing
        performance. Our tool was carefully engineered specifically for users
        who demand consistent, highly reliable results under heavy daily
        workloads — ranging from busy office scanning stations to massive
        enterprise digitization projects.
      </p>

      <h3 className="mt-8 font-semibold">
        Accessible Across Devices &mdash; Offline Capable PWA
      </h3>
      <p className="mt-2">
        Need to use our <strong>TIFF splitter online</strong>? You can access it
        from literally any modern browser on a desktop, laptop, or tablet.
        Absolutely no bulky software installation is required. Even better, as a
        modern Progressive Web App (PWA), it seamlessly continues to work even
        when you lose your internet connection! Enjoy the rock-solid reliability
        of a traditional desktop tool fused with the unmatched convenience of
        the modern web.
      </p>

      <h2 className="mt-10 font-bold">Comprehensive Splitting Settings</h2>
      <p className="mt-2">
        Tailor the splitting process to your exact use case with our advanced
        configuration options:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-6">
        <li>
          <strong>Flexible Split Modes:</strong> Choose to split every single
          page, extract custom comma-separated page ranges (e.g., 1-3, 5, 8-10),
          or automatically split every <em>N</em> pages.
        </li>
        <li>
          <strong>Versatile Output Options:</strong> When extracting ranges,
          decide whether to output each range as a separate TIFF or merge all
          extracted ranges into a single new TIFF document.
        </li>
        <li>
          <strong>Smart File Naming Strategy:</strong> Keep your outputs
          organized by retaining original filenames with page indices, using
          sequential numbering, or applying your own custom prefix.
        </li>
        <li>
          <strong>Pro-Level Compression Control:</strong> Optimize your output
          file sizes by choosing from standard compression algorithms including
          LZW (Lossless), JPEG (Lossy), PackBits, or No Compression.
        </li>
      </ul>

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
    title: `Secure Online ${productTitles.TIFFSplitterWeb} | Private Browser Tool (Free Trial)`,
    keywords:
      "Online TIFF Splitter, Client-side TIFF Splitter, Browser-based TIFF Tool, Private TIFF Splitter, No Upload TIFF Splitter, Offline TIFF Tool, Split Multi-Page TIFF, Extract TIFF Pages, Free Trial TIFF Split Tool, Batch TIFF Splitter",
    description,
    alternates: {
      canonical: productWebsites.TIFFSplitterWeb,
    },
    openGraph: {
      title: `Secure Client-Side ${productTitles.TIFFSplitterWeb} | Private Browser Tool (Free Trial)`,
      description,
      url: productWebsites.TIFFSplitterWeb,
      siteName: siteName,
      images: [
        {
          url: cloudinaryLoader({
            src: productImages.TIFFSplitterWebOG.imgName,
            width: productImages.TIFFSplitterWebOG.width,
          }),
          width: productImages.TIFFSplitterWebOG.width,
          height: productImages.TIFFSplitterWebOG.height,
          alt: `${productTitles.TIFFSplitterWeb} Online Free Trial`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@pdftifftools",
      creator: "@pdftifftools",
      title: `Secure Client-Side ${productTitles.TIFFSplitterWeb} | Private Browser Tool (Free Trial)`,
      description,
      images: [
        cloudinaryLoader({
          src: productImages.TIFFSplitterWebOG.imgName,
          width: productImages.TIFFSplitterWebOG.width,
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
          name: productTitles.TIFFSplitterWeb,
          item: productWebsites.TIFFSplitterWeb,
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
