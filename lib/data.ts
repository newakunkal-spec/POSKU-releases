import siteJson from "@/data/site.json";
import rel from "@/data/releases.json";
export const site = siteJson as any;
export const REPO = process.env.NEXT_PUBLIC_GITHUB_REPO || "newakunkal-spec/posku";
// Selalu mengunduh APK dari rilis terbaru, dengan nama POSKU.apk
export const DL = `https://github.com/${REPO}/releases/latest/download/POSKU.apk`;
// Data awal (dari APK v0.7.0) dipakai sampai data GitHub berhasil dimuat
export const seedReleases = (rel as any[]).map((r) => ({ tag: "v" + r.version, version: r.version, date: r.date, size: r.size, sha256: r.sha256, changelog: r.changelog }));
