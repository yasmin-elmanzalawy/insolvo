import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});
export const metadata: Metadata = {
  title: {
    default: "Insolvo",
    template: "%s | Insolvo",
  },
  description: "Official website of Insolvo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body className={`${montserrat.variable} ${openSans.variable} bg-white text-gray-900 antialiased`}>        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}