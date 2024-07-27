import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "next-themes";

const cx = (...classes: any[]) => classes.filter(Boolean).join(" ");

export const metadata: Metadata = {
  title: "lbh-io",
  description: "Bharath's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          "antialiased text-[#111010] bg-[#f0f7ff] dark:text-[#f0f7ff] dark:bg-[#111010] max-w-2xl mb-40 flex flex-col mx-4 mt-8 lg:mx-auto dark:bg-dot-white/[0.15] bg-dot-black/[0.2]",
          GeistSans.className,
          GeistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
