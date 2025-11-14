import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Mariposas Therapy Services | Pediatric Therapy in South Florida",
    template: "%s | Mariposas Therapy Services",
  },
  description:
    "Mariposas Therapy Services provides compassionate pediatric therapy including Physical Therapy, Occupational Therapy, and Speech Therapy for children in South Florida.",
  keywords: [
    "pediatric therapy",
    "pediatric physical therapy",
    "pediatric occupational therapy",
    "pediatric speech therapy",
    "therapy services Miami",
    "child developmental therapy",
  ],
  openGraph: {
    title: "Mariposas Therapy Services",
    description:
      "Pediatric Physical, Occupational, and Speech Therapy helping children grow with care and compassion.",
    url: "https://mariposastherapyservices-2stt.vercel.app",
    siteName: "Mariposas Therapy Services",
    images: [
      {
        url: "/assets/logo.png",   // only for OG (social media), NOT favicon
        width: 800,
        height: 800,
        alt: "Mariposas Therapy Services",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico", // THE ONLY FAVICON
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Ensure favicon is used everywhere */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}