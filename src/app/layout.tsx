import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formal / Geoffrey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="size-full" lang="en" title="Format / Geoffrey">
      <body className="size-full bg-gradient-to-t from-blue-200 to-gray-100">
        {children}
      </body>
    </html>
  );
}
