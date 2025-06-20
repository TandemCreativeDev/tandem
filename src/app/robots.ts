import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/src/"],
      },
      {
        userAgent: ["GPTBot", "anthropic-ai", "Claude-Web"],
        allow: "/",
        crawlDelay: 5,
      },
      {
        userAgent: "CCBot",
        allow: "/",
        crawlDelay: 10,
      },
      {
        userAgent: ["AhrefsBot", "MJ12bot"],
        disallow: "/",
      },
    ],
    sitemap: "https://runintandem.com/sitemap.xml",
  };
}
