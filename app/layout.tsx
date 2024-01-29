import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionContext from "@/context/active-section-context";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeSwitch from "@/components/theme-button";
import QueryProvider from "@/components/queryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "이유승. 웹 포트폴리오",
  description: "Generated by create next app",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 `}
      >
        <div className="bg-[#f3c4c5] absolute top-[6rem] -z-10 right-[11rem] h-[35rem] w-[31.25rem] rounded-full blur-[15rem] sm:w-[68.75rem] dark:bg-[#e89595]"></div>
        <div className="bg-[#dbd7fb] absolute top-[4rem] -z-10 left-[-35rem] h-[35rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <QueryProvider>
          {" "}
          <ThemeProvider attribute="class">
            {/* ContextAPI */}
            <ActiveSectionContext>
              <Header />
              <ThemeSwitch />
              {children}
            </ActiveSectionContext>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
