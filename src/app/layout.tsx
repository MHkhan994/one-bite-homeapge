import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Adjust as needed
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${beVietnam.variable} antialiased bg-background`}>
        <div className="max-w-[1440px] mx-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
