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
    <html
      className="size-full bg-gradient-to-t from-blue-200 to-gray-100"
      lang="en"
      title="Formal / Geoffrey"
    >
      <body className="size-full ">
        <div className="bg-gradient-to-t from-blue-200 to-gray-100 fixed size-full"></div>
        {children}
      </body>
    </html>
  );
}
