import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { PostHogProvider } from "@/lib/analytics/provider";
import "@/styles/globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clawcove.com";

export const metadata: Metadata = {
  title: {
    default: "ClawCove — Your AI Agent, Always On",
    template: "%s | ClawCove",
  },
  description:
    "Deploy your own AI agent to Discord, Slack, or Telegram in under 5 minutes. No coding, no servers — just your agent, running 24/7.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  keywords: [
    "AI agent",
    "AI chatbot",
    "Discord bot",
    "Slack bot",
    "Telegram bot",
    "AI assistant",
    "AI agent hosting",
    "ClawCove",
    "OpenClaw",
  ],
  openGraph: {
    title: "ClawCove — Your AI Agent, Always On",
    description:
      "Deploy your own AI agent to Discord, Slack, or Telegram in under 5 minutes. No coding, no servers — just your agent, running 24/7.",
    url: siteUrl,
    siteName: "ClawCove",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClawCove — Your AI Agent, Always On",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClawCove — Your AI Agent, Always On",
    description:
      "Deploy your own AI agent to Discord, Slack, or Telegram in under 5 minutes. No coding, no servers — just your agent, running 24/7.",
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
                "Deploy your own AI agent to Discord, Slack, or Telegram — always on, no coding required.",
            }),
          }}
        />
      </body>
    </html>
  );
}
