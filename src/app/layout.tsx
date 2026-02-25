import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { PostHogProvider } from "@/lib/analytics/provider";
import "@/styles/globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clawcove.com";

export const metadata: Metadata = {
  title: {
    default: "ClawCove — OpenClaw Hosting, Simplified",
    template: "%s | ClawCove",
  },
  description:
    "Your own AI agent, running 24/7, in under 5 minutes. ClawCove is the easiest way to deploy and manage OpenClaw agents.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  keywords: [
    "OpenClaw",
    "AI agent hosting",
    "managed AI agents",
    "Discord bot hosting",
    "Slack bot hosting",
    "AI agent deployment",
    "ClawCove",
  ],
  openGraph: {
    title: "ClawCove — OpenClaw Hosting, Simplified",
    description:
      "Your own AI agent, running 24/7, in under 5 minutes. ClawCove is the easiest way to deploy and manage OpenClaw agents.",
    url: siteUrl,
    siteName: "ClawCove",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClawCove — OpenClaw Hosting, Simplified",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClawCove — OpenClaw Hosting, Simplified",
    description:
      "Your own AI agent, running 24/7, in under 5 minutes. ClawCove is the easiest way to deploy and manage OpenClaw agents.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <PostHogProvider>{children}</PostHogProvider>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires innerHTML; content is static and trusted
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ClawCove",
              url: siteUrl,
              description: "Managed OpenClaw hosting platform",
            }),
          }}
        />
      </body>
    </html>
  );
}
