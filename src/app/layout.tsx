import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codeflix",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#141414] text-white">{children}</body>
    </html>
  );
}
