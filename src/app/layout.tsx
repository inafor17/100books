import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "世界傑作文学100選",
    template: "%s | 世界傑作文学100選",
  },
  description:
    "ノルウェー・ブック・クラブが選定した世界文学の傑作100選。千夜一夜物語、ギルガメシュ叙事詩、源氏物語など、古今東西の名作と豆知識をお楽しみください。",
  keywords: [
    "世界文学",
    "名作",
    "古典文学",
    "現代文学",
    "海外文学",
    "ノルウェー・ブック・クラブ",
    "100選",
    "書籍",
    "読書",
  ],
  authors: [{ name: "nomon" }],
  creator: "nomon",
  publisher: "nomon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title: "世界傑作文学100選 | ノルウェー・ブック・クラブ選出",
    description: "ノルウェー・ブック・クラブが選定した世界文学の傑作100選",
    siteName: "世界傑作文学100選",
  },
  twitter: {
    card: "summary_large_image",
    title: "世界傑作文学100選",
    description: "ノルウェー・ブック・クラブが選定した世界文学の傑作100選",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
