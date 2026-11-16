"use client";
import { useState } from "react";
export default function OrderForm({ wa }: { wa: string }) {
  const [s, setS] = useState({ name: "", gmail: "", deviceCode: "" }); const [err, setErr] = useState("");
  function go(e: React.FormEvent) {
    e.preventDefault(); const gmail = s.gmail.trim().toLowerCase();
    if (s.name.trim().length < 2) return setErr("Isi nama Anda.");
    if (!/^[a-z0-9._+-]+@gmail\.com$/.test(gmail)) return setErr("Masukkan alamat Gmail yang valid.");
    if (s.deviceCode.trim().length < 6) return setErr("Isi kode perangkat dari layar Aktivasi POSKU.");
    setErr("");
    const msg = encodeURIComponent(`Halo admin POSKU, saya ingin membeli Lifetime License.\nNama: ${s.name.trim()}\nGmail: ${gmail}\nKode perangkat: ${s.deviceCode.trim()}`);
    window.open(`https://wa.me/${wa}?text=${msg}`, "_blank", "noopener,noreferrer");
  }
  const f = "mt-1 w-full rounded-xl bg-navy-900/80 border border-white/15 px-3 py-2.5 text-sm";
  return <form onSubmit={go} className="glass rounded-2xl p-5 space-y-3" noValidate>
    <label className="block text-sm">Nama<input className={f} value={s.name} onChange={(e) => setS({ ...s, name: e.target.value })} autoComplete="name" /></label>
    <label className="block text-sm">Gmail untuk lisensi<input className={f} type="email" inputMode="email" placeholder="nama@gmail.com" value={s.gmail} onChange={(e) => setS({ ...s, gmail: e.target.value })} /></label>
    <label className="block text-sm">Kode perangkat<input className={f} placeholder="Salin dari layar Aktivasi POSKU" value={s.deviceCode} onChange={(e) => setS({ ...s, deviceCode: e.target.value })} /></label>
    {err && <p className="text-sm text-red-300" role="alert">{err}</p>}
    <button className="btn btn-primary w-full">Dapatkan Lisensi</button>
    <p className="text-xs text-slate-400">Anda diarahkan ke WhatsApp admin. Lisensi aktif setelah pembayaran diverifikasi admin.</p>
  </form>;
}
