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
  title: "Ashwith Rai - Developer & Tech Enthusiast",
  description:
    "Ashwith Rai is a passionate web developer and tech enthusiast specializing in modern web technologies. Explore my portfolio and projects here!",
  keywords: "Ashwith Rai, web developer, Next, React, FastAPI, Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} `}>{children}</body>
    </html>
  );
}
