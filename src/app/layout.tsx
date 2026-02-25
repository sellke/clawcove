import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { PostHogProvider } from "@/lib/analytics/provider";
import "@/styles/globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clawcove.com";

export const metadata: Metadata = {
  title: {
    default: "ClawCove — Your Own Personal AI, Always On",
    template: "%s | ClawCove",
  },
  description:
    "Your own AI assistant, running 24/7 on a private machine. Powered by OpenClaw. Draft emails, automate tasks, manage your calendar — no setup, no servers.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  keywords: [
    "personal AI assistant",
    "AI agent",
    "OpenClaw hosting",
    "AI assistant 24/7",
    "managed AI agent",
    "AI automation",
    "ClawCove",
    "OpenClaw",
  ],
  openGraph: {
    title: "ClawCove — Your Own Personal AI, Always On",
    description:
      "Your own AI assistant, running 24/7 on a private machine. Powered by OpenClaw. Draft emails, automate tasks, manage your calendar — no setup, no servers.",
    url: siteUrl,
    siteName: "ClawCove",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClawCove — Your Own Personal AI, Always On",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClawCove — Your Own Personal AI, Always On",
    description:
      "Your own AI assistant, running 24/7 on a private machine. Powered by OpenClaw. Draft emails, automate tasks, manage your calendar — no setup, no servers.",
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
              description:
                "Your own personal AI assistant, running 24/7 on a private machine. Powered by OpenClaw.",
            }),
          }}
        />
      </body>
    </html>
  );
}
