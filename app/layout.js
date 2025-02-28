import "./globals.css";
import "./theme.css";
import { Plus_Jakarta_Sans } from "next/font/google";
// ✅ Explicitly specify available weights
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Ajay - Developer & Tech Enthusiast",
  description:
    "Ajay is a passionate web developer and tech enthusiast specializing in modern web technologies. Explore my portfolio and projects here!",
  keywords: "Ajay, web developer, React, FastAPI,Data Analyst",
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon/apple-touch-icon.png", // iOS Safari
  },
  manifest: "/favicon/site.webmanifest", // Web app manifest
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} `}>{children}</body>
    </html>
  );
}
