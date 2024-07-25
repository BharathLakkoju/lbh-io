import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "next-themes";

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
        className={`${GeistSans.className} antialiased text-black bg-white dark:text-white dark:bg-[#111010] max-w-2xl mb-40 flex flex-col mx-4 mt-8 lg:mx-auto bg-grid-white/[0.02] dark:bg-grid-black/[0.02]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
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
