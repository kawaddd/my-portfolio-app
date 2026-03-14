import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://daiki-kawabata.vercel.app"; // 本番URLに差し替え

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "川畑 大輝 | AI活用エンジニア・業務自動化・Web開発",
    template: "%s | 川畑 大輝",
  },
  description:
    "AI活用・業務自動化・Web開発を軸に、課題の本質から設計・実装まで一気通貫で対応するエンジニア。PHP / SQL / Java / TypeScript / React / Next.js を活用した開発実績あり。フルリモート・業務委託対応可。",
  keywords: [
    "川畑大輝",
    "Daiki Kawabata",
    "AI活用エンジニア",
    "業務効率化",
    "業務自動化",
    "AI導入支援",
    "Web開発",
    "Next.js",
    "TypeScript",
    "React",
    "PHP",
    "SQL",
    "フリーランスエンジニア",
    "業務委託",
    "ポートフォリオ",
  ],
  authors: [{ name: "川畑 大輝", url: siteUrl }],
  creator: "川畑 大輝",
  publisher: "川畑 大輝",
  alternates: {
    canonical: siteUrl,
    languages: { "ja-JP": siteUrl },
  },
  openGraph: {
    title: "川畑 大輝 | AI活用エンジニア・業務自動化・Web開発",
    description:
      "AI × 設計 × 開発の力を統合し、業務課題を価値に変えるエンジニアのポートフォリオです。業務委託・相談受付中。",
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "川畑 大輝 Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "川畑 大輝 | AI活用エンジニア・業務自動化",
    description:
      "AI × 設計 × 開発の力を統合し、業務課題を価値に変えるエンジニアのポートフォリオです。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#07080F",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/* JSON-LD: Person schema */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "川畑 大輝",
  alternateName: "Daiki Kawabata",
  jobTitle: "AI活用エンジニア / クリエイティブ開発者",
  description:
    "AI活用・業務自動化・Web開発を軸に、課題の本質から設計・実装まで一気通貫で対応するエンジニア。",
  url: siteUrl,
  email: "contact@example.com",
  knowsAbout: [
    "AI活用",
    "業務効率化",
    "業務自動化",
    "Web開発",
    "TypeScript",
    "React",
    "Next.js",
    "PHP",
    "SQL",
    "Python",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
