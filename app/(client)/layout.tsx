import type { Metadata } from "next";
import { Lekton, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Provider } from "../utils/provider";
import { AppWrapper } from "../context/index";

import { getTheme } from "../utils/getTheme";

const lekton400 = Lekton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lekton400",
});

const lekton700 = Lekton({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-lekton700",
});

const poppins200 = Poppins({
  subsets: ["latin"],
  weight: "200",
  variable: "--font-poppins200",
});

const poppins700 = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins700",
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Just a blog...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: getTheme }} />
      </head>
      <body
        className={`${lekton700.variable} ${lekton400.variable} ${poppins200.variable} ${poppins700.variable} hidebottomscroll`}
      >
        <Provider>
          <AppWrapper>
            <Navbar title="A BLOG" tags={true} />
            <main>{children}</main>
          </AppWrapper>
        </Provider>
      </body>
    </html>
  );
}
