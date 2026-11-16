"use client";
import { useEffect, useState } from "react";
export default function PlatformNotice() {
  const [m, setM] = useState("");
  useEffect(() => {
    const nav: any = navigator;
    if (!/Android/i.test(nav.userAgent)) { setM("Perangkat ini bukan Android. POSKU hanya bisa dipasang di HP Android 12 atau lebih baru. Anda tetap bisa mengunduh APK di sini lalu mengirimnya ke HP."); return; }
    // User-Agent Chrome tidak menunjukkan versi Android asli, jadi pakai userAgentData bila tersedia
    nav.userAgentData?.getHighEntropyValues?.(["platformVersion"]).then((v: any) => {
      const major = parseInt(String(v.platformVersion), 10);
      if (major > 0 && major < 12) setM(`HP Anda memakai Android ${major}. POSKU membutuhkan Android 12 atau lebih baru.`);
    }).catch(() => {});
  }, []);
  return m ? <p role="note" className="glass mt-6 rounded-xl px-4 py-3 text-sm text-amber-200" style={{ borderColor: "rgba(251,191,36,.4)" }}>{m}</p> : null;
}
