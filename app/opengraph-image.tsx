export const dynamic = "force-static";
import { ImageResponse } from "next/og";
export const alt = "POSKU: Manage Your Business, Smarter."; export const size = { width: 1200, height: 630 }; export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg,#050b1d,#101c45 60%,#0b4a6b)", color: "#e6ecff" }}>
    <div style={{ display: "flex", fontSize: 120, fontWeight: 800 }}>POS<span style={{ color: "#22d3ee" }}>KU</span></div>
    <div style={{ display: "flex", fontSize: 44, marginTop: 10 }}>Manage Your Business, Smarter.</div>
    <div style={{ display: "flex", fontSize: 30, marginTop: 36, color: "#9db4ff" }}>Aplikasi kasir Android. Lisensi seumur hidup Rp100.000.</div></div>, size);
}
