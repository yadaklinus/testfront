"use client"
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";

import { Navbar } from "@/components/navbar";
import { Toaster } from "react-hot-toast";
import { Session } from "@/config/sessionProvider"
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export const viewport: Viewport = {
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = usePathname()

  return (

    <Session>
      <html suppressHydrationWarning lang="en">
        <head />
        <body
          className={clsx(
            "min-h-screen bg-background font-sans antialiased",

          )}
        >
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col h-screen">
              <Toaster />
              {!(router === "/") ? <Navbar /> : ""}

              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">

                {children}
              </main>
              <footer className="w-full flex items-center justify-center py-3">

                <span className="text-default-600">Powered by</span>
                <p className="text-primary">{router}Codegit</p>

              </footer>
            </div>
          </Providers>
        </body>
      </html>
    </Session>
  );
}
