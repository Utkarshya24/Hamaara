import type { Metadata } from "next";
import {Geist, Inter, Montserrat, Roboto, Manrope, DM_Sans, Instrument_Serif  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import Note from "@/components/home/Note";
import Footer from "@/components/home/Footer";

// Google Fonts import
const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"] });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif", subsets: ["latin"],
  weight: "400"
});


export const metadata: Metadata = {
  title: "Hamaara - Invest in a Brighter Future",
  description: "Hamaara: The heartbeat of the middle class.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${inter.variable} ${montserrat.variable} ${roboto.variable} ${manrope.variable} ${dmSans.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Note/>
        <div className="px-20 py-4">
          <Navbar/>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
