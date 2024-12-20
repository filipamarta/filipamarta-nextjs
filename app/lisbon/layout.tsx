import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lisbon, the city where I was born",
  description:
    "Sharing a nice google maps list of Lisbon, with who wander through this corner of the internet.",
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
