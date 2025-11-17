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
  title:
    "Mariposas Therapy Services | Pediatric Physical, Occupational & Speech Therapy",
  description:
    "Compassionate pediatric therapy services including Physical Therapy, Occupational Therapy, and Speech Therapy in South Florida. Mariposas Therapy Services helps children grow, develop, and thrive with personalized care. | Terapias pediátricas en Miami: terapia física, ocupacional y del habla con atención cálida y profesional.",
  keywords: [
    "pediatric therapy",
    "pediatric physical therapy",
    "pediatric occupational therapy",
    "pediatric speech therapy",
    "child therapy Miami",
    "therapy services Miami",
    "South Florida pediatric therapy",
    "developmental therapy",
    "child development specialist",
    "PT for kids",
    "OT for kids",
    "SLP for kids",
    "Mariposas Therapy Services",

    // Spanish
    "terapia pediátrica",
    "terapia física pediátrica",
    "terapia ocupacional pediátrica",
    "terapia del habla para niños",
    "servicios de terapia Miami",
    "terapia infantil Miami",
    "terapeutas pediátricos",
    "desarrollo infantil",
    "Mariposas Therapy Services",
  ],
  authors: [{ name: "Alejandro Morales Mollinedo" }],
  creator: "Mariposas Therapy Services",
  publisher: "Mariposas Therapy Services",

  // Use your Vercel URL until custom domain is active
  metadataBase: new URL("https://mariposastherapyservices-2stt.vercel.app"),

  openGraph: {
    title: "Mariposas Therapy Services",
    description:
      "Pediatric Physical, Occupational & Speech Therapy helping children grow with care and compassion.",
    url: "https://mariposastherapyservices-2stt.vercel.app",
    images: [
      {
        url: "/assets/logo.png", // Use relative path (works everywhere)
        width: 800,
        height: 800,
        alt: "Mariposas Therapy Services Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Healthcare Clinic structured data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "@id":
                "https://mariposastherapyservices-2stt.vercel.app/#clinic",
              name: "Mariposas Therapy Services",
              url: "https://mariposastherapyservices-2stt.vercel.app",
              logo: "/assets/logo.png",
              image: "/assets/logo.png",
              description:
                "Pediatric Physical, Occupational & Speech Therapy providing compassionate, high-quality care for children in South Florida.",
              telephone: "+1-786-576-8083",
              email: "mariposatherapyservices@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Miami",
                addressRegion: "FL",
                addressCountry: "US",
              },
              medicalSpecialty: [
                "Pediatric Physical Therapy",
                "Pediatric Occupational Therapy",
                "Pediatric Speech Therapy",
              ],
              areaServed: [
                "Miami, FL",
                "South Florida",
                "Doral, FL",
                "Kendall, FL",
                "Hialeah, FL",
              ],
              sameAs: ["https://facebook.com", "https://instagram.com"],
            }),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}