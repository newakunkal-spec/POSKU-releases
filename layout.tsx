import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
const font = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" });
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#050b1d" };
const base = process.env.SITE_URL || "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: "POSKU: Aplikasi Kasir Android untuk UMKM",
  description: "Aplikasi kasir Android untuk mencatat transaksi, produk, stok, pengeluaran, dan laporan. Lisensi seumur hidup Rp100.000.",
  openGraph: { title: "POSKU: Manage Your Business, Smarter.", description: "Kasir digital offline untuk UMKM. Sekali bayar, berlaku seumur hidup.", type: "website", locale: "id_ID", siteName: "POSKU" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="id"><body className={font.className}>{children}</body></html>;
}
