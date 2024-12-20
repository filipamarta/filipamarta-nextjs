import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Filipa Marta",
  description:
    "Welcome to my corner of the internet. My name is Filipa Marta, I'm a creative frontend developer and a UX/UI Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
