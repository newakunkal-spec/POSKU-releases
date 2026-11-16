# Website POSKU (GitHub Releases)

Next.js 14 (static export) + TypeScript + Tailwind. APK disimpan di **GitHub Releases**, tanpa server.

## 1. Repo dan rilis pertama
1. Buat repo publik di akun `newakunkal-spec` (nama bebas, default `POSKU-releases`; ubah lewat `NEXT_PUBLIC_GITHUB_REPO`).
2. Releases > Draft a new release > tag `v0.7.0`, tulis changelog (satu perubahan per baris, diawali `-`), lampirkan APK dengan nama file **tepat `app-release.apk`** (tanpa tanda kurung atau spasi; ubah lewat `NEXT_PUBLIC_APK_NAME` jika memakai nama lain), lalu Publish.
   Sebelum rilis pertama ada, tombol Download akan error 404.

## 2. Pasang website (gratis, boleh komersial: Cloudflare Pages)
Upload isi folder ini ke repo (jangan taruh APK di repo), lalu di Cloudflare Pages: Build command `npm run build`, output directory `out`, variabel `NEXT_PUBLIC_GITHUB_REPO` dan `SITE_URL`. Uji lokal: `npm install && npm run build`.

## 3. Update APK
Naikkan versionCode dan versionName, build dengan **keystore yang sama**, buat release baru (`v0.7.1`) dengan `app-release.apk` dan changelog. Website membaca rilis terbaru dari GitHub langsung tanpa deploy ulang. Tombol Download memakai `/releases/latest/download/app-release.apk`.

## Konten
Teks, harga, fitur, FAQ, dan nomor WhatsApp ada di `data/site.json`. Ubah, commit, website terbangun ulang.
