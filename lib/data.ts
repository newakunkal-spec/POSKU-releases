import siteJson from "@/data/site.json";
import rel from "@/data/releases.json";
export const site = siteJson as any;
export const REPO = process.env.NEXT_PUBLIC_GITHUB_REPO || "newakunkal-spec/posku";
// Nama file APK yang dilampirkan di GitHub Release (harus sama persis)
export const APK_NAME = process.env.NEXT_PUBLIC_APK_NAME || "app-release.apk";
// Selalu mengunduh APK dari rilis terbaru
export const DL = `https://github.com/${REPO}/releases/latest/download/${APK_NAME}`;
// Data awal (dari APK v0.7.0) dipakai sampai data GitHub berhasil dimuat
export const seedReleases = (rel as any[]).map((r) => ({ tag: "v" + r.version, version: r.version, date: r.date, size: r.size, sha256: r.sha256, changelog: r.changelog }));
