import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import LoadingScreen from "@/components/ui/LoadingScreen";
import "./globals.css";
import {
  diatypeRegular,
  diatypeMedium,
  diatypeMonoRegular,
  diatypeMonoMedium,
  diatypeCondensedMedium,
} from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Tandem Creative Dev",
  description:
    "Tandem is a creative development agency who prioritise human-centered design, based in London.",
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
        <LoadingScreen />
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
