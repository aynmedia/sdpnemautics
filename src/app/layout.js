/** @format */
import Footer from "@/components/footer";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "SD Pneumatics",
  description:
    "SD Pneumatics is a leading provider of high-quality pneumatic solutions, specializing in air compressors, air dryers, and advanced industrial automation systems. Our commitment to innovation, reliability, and customer satisfaction ensures efficient and sustainable solutions for diverse industrial needs.",
  keywords:
    "SD Pneumatics, Pneumatics, Compressors, Air Dryers, Industrial Automation",
  opengraph: {
    type: "website",
    locale: "en_US",
    url: "https://sdpnematics.com",
    title: "SD Pneumatics",
    description:
      "SD Pneumatics is a leading provider of high-quality pneumatic solutions, specializing in air compressors, air dryers, and advanced industrial automation systems. Our commitment to innovation, reliability, and customer satisfaction ensures efficient and sustainable solutions for diverse industrial needs.",
    images: [
      {
        url: "https://sdpnematics.com/images/SD_Pneumatics.webp",
        width: 800,
        height: 600,
        alt: "SD Pneumatics",
      },
    ],
    site_name: "SD Pneumatics",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:type" content={metadata.opengraph.type} />
        <meta property="og:locale" content={metadata.opengraph.locale} />
        <meta property="og:title" content={metadata.opengraph.title} />
        <meta
          property="og:description"
          content={metadata.opengraph.description}
        />
        <meta property="og:image" content={metadata.opengraph.images[0].url} />
        <meta property="og:url" content={metadata.opengraph.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sdpnematics" />
        <meta name="twitter:title" content={metadata.opengraph.title} />
        <meta
          name="twitter:description"
          content={metadata.opengraph.description}
        />
        <meta name="twitter:image" content={metadata.opengraph.images[0].url} />
      </head>
      <body className="font-sans">
        <Navbar />
        <div className="overflow-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
