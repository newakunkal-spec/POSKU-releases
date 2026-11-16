"use client";
import { useState } from "react";
export default function MobileMenu({ nav }: { nav: string[][] }) {
  const [o, setO] = useState(false);
  return <div className="relative md:hidden">
    <button className="btn btn-ghost !px-3 !py-2" aria-expanded={o} aria-controls="mm" onClick={() => setO(!o)}>{o ? "Tutup" : "Menu"}</button>
    {o && <ul id="mm" className="glass absolute right-0 mt-2 w-48 rounded-xl p-2" style={{ background: "#0a1330" }}>{nav.map(([n, h]) => <li key={h}><a className="block rounded-lg px-3 py-3 hover:bg-white/10" href={h} onClick={() => setO(false)}>{n}</a></li>)}</ul>}
  </div>;
}
