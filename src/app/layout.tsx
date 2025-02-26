import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import {
  diatypeRegular,
  diatypeMedium,
  diatypeMonoRegular,
  diatypeMonoMedium,
  diatypeCondensedMedium,
} from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Tandem - Technology with purpose",
  description: "We blend full-stack development with thoughtful, accessible, and aesthetically refined design",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${diatypeRegular.variable} ${diatypeMedium.variable} ${diatypeMonoRegular.variable} ${diatypeMonoMedium.variable} ${diatypeCondensedMedium.variable} scroll-smooth`}
    >
      <body className="font-tandem-regular antialiased relative">
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
