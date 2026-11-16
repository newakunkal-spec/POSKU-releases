"use client";
import { useEffect, useState } from "react";
import { DL, APK_NAME } from "@/lib/data";
type R = { tag: string; version: string; date: string; size: number; sha256?: string; changelog: string[] };
const mb = (n: number) => (n / 1048576).toFixed(1).replace(".", ",") + " MB";
const tgl = (d: string) => new Date(d).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

export default function Releases({ seed, repo, minAndroid, children }: { seed: R[]; repo: string; minAndroid: string; children: React.ReactNode }) {
  const [list, setList] = useState<R[]>(seed);
  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}/releases?per_page=20`).then((r) => (r.ok ? r.json() : Promise.reject())).then((j: any[]) => {
      const m: R[] = j.filter((x) => !x.draft && !x.prerelease).flatMap((x) => {
        const a = (x.assets || []).find((a: any) => a.name === APK_NAME); if (!a) return [];
        return [{ tag: x.tag_name, version: String(x.tag_name).replace(/^v/i, ""), date: String(x.published_at).slice(0, 10), size: a.size,
          sha256: typeof a.digest === "string" && a.digest.startsWith("sha256:") ? a.digest.slice(7) : undefined,
          changelog: String(x.body || "").split("\n").map((l: string) => l.replace(/^[-*]\s*/, "").trim()).filter(Boolean) }];
      });
      if (m.length) setList(m);
    }).catch(() => {});
  }, [repo]);
  const rel = list[0];
  return <>
    <div className="glass mt-6 rounded-3xl p-6"><div className="flex flex-wrap items-center justify-between gap-4"><div>
      <p className="text-xl font-bold">POSKU v{rel.version} <span className="ml-1 rounded-full bg-aqua/15 px-2 py-0.5 text-xs text-aqua">Terbaru</span></p>
      <p className="mt-1 text-sm text-slate-400">Dirilis {tgl(rel.date)}. {mb(rel.size)}. Android {minAndroid} atau lebih baru.</p></div>
      <a href={DL} className="btn btn-primary">Download POSKU</a></div>
      <ul className="mt-4 list-disc pl-5 text-sm text-slate-300">{rel.changelog.map((c) => <li key={c}>{c}</li>)}</ul>
      {rel.sha256 && <p className="mt-4 break-all text-xs text-slate-400">SHA-256: <code>{rel.sha256}</code></p>}</div>
    {children}
    <h3 className="mt-10 text-xl font-bold">Riwayat versi</h3>
    <ul className="mt-4 space-y-3 md:hidden">{list.map((r, i) => <li key={r.tag} className="glass rounded-2xl p-4 text-sm"><div className="flex justify-between gap-2"><b>v{r.version}{i === 0 && " (terbaru)"}</b><span className="text-slate-400">{mb(r.size)}</span></div><p className="text-slate-400">{tgl(r.date)}</p><p className="mt-2 text-slate-300">{r.changelog.join("; ")}</p>{i > 0 && <a className="mt-3 inline-flex min-h-11 items-center text-aqua underline" href={`https://github.com/${repo}/releases/download/${r.tag}/${APK_NAME}`}>Unduh versi ini</a>}</li>)}</ul>
    <div className="mt-4 hidden overflow-x-auto md:block"><table className="w-full min-w-[34rem] text-left text-sm"><thead className="text-slate-400"><tr><th className="py-2">Versi</th><th>Tanggal</th><th>Ukuran</th><th>Perubahan</th><th></th></tr></thead>
      <tbody>{list.map((r, i) => <tr key={r.tag} className="border-t border-white/10 align-top"><td className="py-3 font-semibold">v{r.version}{i === 0 && " (terbaru)"}</td><td>{tgl(r.date)}</td><td>{mb(r.size)}</td><td>{r.changelog.join("; ")}</td>
        <td>{i > 0 && <a className="text-aqua underline" href={`https://github.com/${repo}/releases/download/${r.tag}/${APK_NAME}`}>Unduh</a>}</td></tr>)}</tbody></table></div>
  </>;
}
