import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontVariables } from "@/lib/fonts";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Cursor } from "@/components/ui/cursor";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://ravianand.dev"),
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Editorial portfolio of Ravi Anand, an AI & software engineer building agentic automation, retrieval systems and production interfaces.",
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description:
      "AI & software engineer building agentic automation, retrieval systems and production interfaces.",
    url: "https://ravianand.dev",
    siteName: SITE.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[200] focus-visible:rounded-full focus-visible:bg-foreground focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:text-background"
          >
            Skip to content
          </a>
          <Cursor />
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
