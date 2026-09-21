import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dinas Kependudukan dan Pencatatan Sipil Provinsi DKI Jakarta",
  description: "Portal layanan administrasi kependudukan dan pencatatan sipil bagi warga DKI Jakarta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
