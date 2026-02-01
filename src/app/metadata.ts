import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourportfolio.com"),
  title: {
    default: "Your Name | Portfolio",
    template: "%s | Your Name",
  },
  description: "Professional portfolio showcasing projects and skills",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
