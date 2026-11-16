import { site, seedReleases, REPO, DL } from "@/lib/data";
import Releases from "@/components/Releases";
import OrderForm from "@/components/OrderForm";

export default function Home() {
  const s = site;
  const nav = [["Beranda", "#beranda"], ["Fitur", "#fitur"], ["Keunggulan", "#keunggulan"], ["Harga", "#harga"], ["Download", "#download"], ["FAQ", "#faq"]];
  const adv: string[] = s.advantages || [];
  const steps = ["Unduh POSKU.apk", "Buka file APK yang diunduh. Jika diminta, izinkan pemasangan dari browser Anda", "Ikuti petunjuk instalasi Android", "Buka aplikasi POSKU dan buat akun Pemilik", "Di layar Aktivasi, kirim kode perangkat dan Gmail ke admin, lalu tempel key yang diterima"];
  return <>
    <header className="sticky top-0 z-50 glass border-x-0 border-t-0"><nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" aria-label="Utama">
      <a href="#beranda" className="text-xl font-extrabold tracking-tight">POS<span className="text-aqua">KU</span></a>
      <ul className="hidden gap-6 text-sm md:flex">{nav.map(([n, h]) => <li key={h}><a className="text-slate-300 hover:text-white" href={h}>{n}</a></li>)}</ul>
      <div className="flex items-center gap-2"><a href={DL} className="btn btn-primary !py-2 text-sm">Download POSKU</a>
        <details className="relative md:hidden"><summary className="btn btn-ghost !px-3 !py-2 cursor-pointer list-none" aria-label="Menu">Menu</summary>
          <ul className="glass absolute right-0 mt-2 w-44 rounded-xl p-2 bg-navy-900">{nav.map(([n, h]) => <li key={h}><a className="block rounded-lg px-3 py-2 hover:bg-white/10" href={h}>{n}</a></li>)}</ul></details></div></nav></header>
    <main>
      <section id="beranda" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div><span className="glass rounded-full px-3 py-1 text-xs">Aplikasi Android</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">{s.hero.title}</h1>
          <p className="mt-4 max-w-lg text-slate-300">{s.hero.desc}</p>
          <div className="mt-7 flex flex-wrap gap-3"><a href={DL} className="btn btn-primary">Download POSKU</a><a href="#fitur" className="btn btn-ghost">Jelajahi Fitur</a></div>
          <p className="mt-5 text-sm text-slate-400">Lifetime License {s.price}. Sekali bayar, tanpa langganan.</p></div>
        <div className="mx-auto w-64" aria-hidden="true"><div className="rounded-[2.2rem] border-4 border-white/15 bg-navy-900 p-3 shadow-[0_0_80px_rgba(47,107,255,.35)]">
          <div className="overflow-hidden rounded-[1.6rem] bg-navy-950 h-[26rem] p-3"><p className="text-xs text-slate-400">Kasir</p><p className="text-lg font-bold">Total Rp47.500</p>
            <div className="mt-3 space-y-2 text-xs">{[["Kopi susu x2", "30.000"], ["Roti bakar", "12.500"], ["Es teh x1", "5.000"]].map(([a, b]) => <div key={a} className="glass flex justify-between rounded-lg px-2 py-2"><span>{a}</span><span>{b}</span></div>)}</div>
            <div className="mt-3 flex gap-2 text-[11px]">{["Tunai", "QRIS", "Transfer"].map((m, i) => <span key={m} className={"rounded-lg px-2 py-1 " + (i === 1 ? "bg-volt text-white" : "glass")}>{m}</span>)}</div>
            <div className="mt-4 overflow-hidden"><div className="receipt rounded-md bg-white p-2 text-[10px] text-slate-800"><p className="font-bold">Struk #0142</p><p>Terima kasih atas kunjungan Anda</p></div></div></div></div></div>
      </section>
      <section id="fitur" className="mx-auto max-w-6xl px-4 py-16"><h2 className="text-3xl font-extrabold">Fitur Unggulan</h2><p className="mt-2 text-slate-400">Hanya fitur yang sudah ada di aplikasi.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{s.features.map((f: any) => <article key={f.t} className="glass rounded-2xl p-5"><h3 className="font-bold">{f.t}{f.s === "soon" && <span className="ml-2 rounded-full bg-aqua/15 px-2 py-0.5 text-xs text-aqua">Coming Soon</span>}</h3><p className="mt-2 text-sm text-slate-300">{f.d}</p></article>)}</div></section>
      <section id="keunggulan" className="mx-auto max-w-6xl px-4 py-16"><h2 className="text-3xl font-extrabold">{s.advantagesTitle}</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">{adv.map((a) => <li key={a} className="glass rounded-xl px-4 py-3 text-slate-200">{a}</li>)}</ul></section>
      <section id="harga" className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2"><div className="glass rounded-3xl p-7 shadow-[0_0_60px_rgba(47,107,255,.25)]"><h2 className="text-2xl font-extrabold">POSKU Lifetime License</h2>
        <p className="mt-3 text-5xl font-extrabold">{s.price}</p>
        <ul className="mt-5 space-y-2 text-sm text-slate-300"><li>Sekali bayar, berlaku seumur hidup</li><li>Tidak ada biaya langganan bulanan</li><li>1 lisensi untuk 1 perangkat dan 1 Gmail</li><li>Pindah HP: minta key baru lewat admin</li><li>Key diterbitkan admin setelah pembayaran diverifikasi</li><li>Panduan instalasi dan aktivasi tersedia di bawah</li></ul>
        <p className="mt-5 text-xs text-slate-400">Pesanan baru berstatus menunggu pembayaran. Lisensi tidak aktif sebelum admin memverifikasi pembayaran.</p></div>
        <div><h3 className="mb-3 font-bold">Pesan lisensi</h3><OrderForm wa={s.whatsapp} /><p className="mt-3 text-sm text-slate-400">Pertanyaan? WhatsApp {s.whatsappDisplay}</p></div></section>
      <section id="download" className="mx-auto max-w-6xl px-4 py-16"><h2 className="text-3xl font-extrabold">Download POSKU</h2><Releases seed={seedReleases} repo={REPO} minAndroid={s.minAndroid}><h3 className="mt-10 text-xl font-bold">Panduan instalasi</h3>
        <ol className="mt-4 grid gap-3 md:grid-cols-5">{steps.map((t, i) => <li key={t} className="glass rounded-2xl p-4 text-sm"><span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-volt font-bold">{i + 1}</span>{t}</li>)}</ol></Releases></section>
      <section id="faq" className="mx-auto max-w-3xl px-4 py-16"><h2 className="text-3xl font-extrabold">FAQ</h2><div className="mt-6 space-y-3">{s.faq.map((f: any) => <details key={f.q} className="glass rounded-xl px-4 py-3"><summary className="cursor-pointer font-semibold">{f.q}</summary><p className="mt-2 text-sm text-slate-300">{f.a}</p></details>)}</div></section>
    </main>
    <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-slate-400"><p>Developed with dedication by <a className="text-slate-200 underline" href={s.developerUrl} target="_blank" rel="noopener noreferrer">{s.developer}</a>.</p><p className="mt-1">© 2026 POSKU. All Rights Reserved.</p></footer>
  </>;
}
