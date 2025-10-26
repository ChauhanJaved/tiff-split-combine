import {
  Categories,
  portfolioItem,
  ProductIDs,
  productImages,
  productSubTitles,
  productTitles,
  productWebsites,
  productDownloadLinks,
} from "@/data/website-data";
import cloudinaryLoader from "@/lib/cloudinary-loader";
export const TIFFSplitter: portfolioItem = {
  id: ProductIDs.TIFFSplitter,
  title: productTitles.TIFFSplitter,
  subtitle: productSubTitles.TIFFSplitter,
  src: productImages.TIFFSplitter.imgName,
  width: productImages.TIFFSplitter.width,
  height: productImages.TIFFSplitter.height,
  categories: [Categories.All, Categories.DesktopApp, Categories.Splitter],
  pageLink: `/${ProductIDs.TIFFSplitter}`,
  productWebsite: productWebsites.TIFFSplitter,
  downloadLink: productDownloadLinks.TIFFSplitter,
  features: [
    "Split Locally with Full Offline Security",
    "Blazing-Fast Performance",
    "Streamlined Batch Splitting",
    "Flexible Splitting Options",
  ],
  description: (
    <div className="flex flex-col">
      <strong className="mt-10">
        Discover the Ultimate TIFF Splitter for Windows
      </strong>
      <p className="mt-2">
        Effortlessly manage and split your multi-page TIFF files with our
        powerful desktop software, specifically designed for Windows users. This
        TIFF splitter operates entirely offline, ensuring complete data privacy
        and security. With no need for an internet connection, you can safely
        split your files locally, protecting them from security risks or
        unauthorized access.
      </p>
      <strong className="mt-10">Fast and Reliable TIFF Splitting</strong>
      <p className="mt-2">
        Experience lightning-fast and dependable TIFF splitting with our
        advanced software. Whether you&#39;re at home, in the office, or on the
        go, split your multi-page TIFF files into separate images in seconds
        without the need for an internet connection. Maintain productivity with
        swift and efficient splitting, no matter where you are.
      </p>
      <strong className="mt-10">Effortless Batch TIFF Splitting</strong>
      <p className="mt-2">
        Enhance your workflow by splitting multiple TIFF files in just one step.
        Our batch splitting feature allows you to handle large volumes of files
        quickly and efficiently, eliminating the need to split documents
        individually. Whether you&#39;re dealing with a few TIFFs or thousands,
        our software simplifies bulk splitting, making it stress-free and
        time-saving.
      </p>
      <strong className="mt-10">Optimized for High-Volume Splitting</strong>
      <p className="mt-2">
        Ideal for high-volume tasks, our TIFF splitter effortlessly handles bulk
        processing. Whether you&#39;re splitting a few multi-page TIFFs or
        managing large-scale projects, this robust software ensures quick and
        efficient splitting. Add your files or folders into the splitter, adjust
        your settings, and hit &#34;Split&#34;—your TIFF files will be separated
        into high-quality images in no time.
      </p>
      <strong className="mt-10">
        Flexible Splitting Options for Complete Control
      </strong>
      <p className="mt-2">
        Easily manage your TIFF files with our customizable splitting options.
        You can split a multi-page TIFF into individual single-page files,
        divide the file by every X number of pages, or specify custom page
        ranges to extract exactly what you need. Whether you need precise page
        extractions or comprehensive splitting, our software gives you the
        flexibility to handle your TIFF files with ease.
      </p>
      <strong className="mt-10">Why Split Multi-Page TIFFs?</strong>
      <p className="mt-2">
        While multi-page TIFFs are excellent for archiving and managing large
        documents, splitting them into individual images can be highly
        beneficial. Separated images offer more flexibility for editing,
        sharing, and organizing. Whether for web use, design work, or
        presentations, splitting your TIFFs into individual images allows for
        greater versatility and ease of use.
      </p>
      <strong className="mt-10">Conclusion</strong>
      <p className="mt-2">
        Our TIFF Splitter for Windows combines speed, security, and
        user-friendliness in one powerful tool. Whether splitting a handful of
        files or managing large-scale projects, this software delivers the
        flexibility and efficiency you need. Don&#39;t settle for less—download
        the best TIFF Splitter for Windows today and enjoy seamless,
        high-quality file splitting.
      </p>
    </div>
  ),
  metaData: {
    title: `Free ${productTitles.TIFFSplitter} for Windows | Fast & Reliable TIFF Splitting Tool`,
    keywords:
      "TIFF Splitter, Split TIFF Files, Batch TIFF Splitting, Windows TIFF Splitter, TIFF File Management",
    description:
      "Effortlessly split multi-page TIFF files with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable splitting options for precise control.",
    alternates: {
      canonical: productWebsites.TIFFSplitter,
    },
    openGraph: {
      title: `Free ${productTitles.TIFFSplitter} for Windows | Fast & Reliable TIFF Splitting Tool`,
      description:
        "Effortlessly split multi-page TIFF files with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable splitting options for precise control.",
      url: `https://www.frameworkteam.com/${ProductIDs.TIFFSplitter}`,
      siteName: `${productTitles.TIFFSplitter} for Windows`,
      images: [
        {
          url: cloudinaryLoader({
            src: productImages.TIFFSplitter.imgName,
            width: productImages.TIFFSplitter.width,
          }),
          width: productImages.TIFFSplitter.width,
          height: productImages.TIFFSplitter.height,
          alt: `Free ${productTitles.TIFFSplitter} for Windows`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
  },
  licenseOptions: [
    {
      licenseType: "ONE Computer License",
      price: "$24.95 USD",
      paymentLink:
        "https://frameworkteam.onfastspring.com/tiff-splitter-one-computer-license",
    },
    {
      licenseType: "TWO Computers License",
      price: "$39.95 USD",
      paymentLink:
        "https://frameworkteam.onfastspring.com/tiff-splitter-two-computers-license",
    },
    {
      licenseType: "THREE Computers License",
      price: "$44.95 USD",
      paymentLink:
        "https://frameworkteam.onfastspring.com/tiff-splitter-three-computers-license",
    },
    {
      licenseType: "FIVE Computers License",
      price: "$64.95 USD",
      paymentLink:
        "https://frameworkteam.onfastspring.com/tiff-splitter-five-computers-license",
    },
    {
      licenseType: "TEN Computers License",
      price: "$109.95 USD",
      paymentLink:
        "https://frameworkteam.onfastspring.com/tiff-splitter-ten-computers-license",
    },
    {
      licenseType: "UNLIMITED Computers License",
      price: "$224.95 USD",
      paymentLink:
        "https://frameworkteam.onfastspring.com/tiff-splitter-unlimited-computers-license",
    },
  ],
};
