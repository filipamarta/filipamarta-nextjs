import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What about me?",
  description:
    "The story of my life, summarized, explaining how I ended up doing Frontend Development and UX/UI Design.",
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
