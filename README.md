# 🎒 MISI ALAT SEKOLAH AJAIB — APLIKASI TELEFON (PWA)

**Tajuk:** أُحَافِظُ عَلَى الْأَدَوَاتِ الدِّرَاسِيَّةِ  
**Sasaran:** Bahasa Arab Tahun 2 • SK Taman Sri Muda, Shah Alam.

Ini ialah versi **Progressive Web App (PWA)** daripada permainan RPG sedia ada. Semua ciri dikekalkan: jelajah dunia comel, berbual dengan watak, muzik, nota, kad imbas, kuiz, latihan, lencana, sijil serta video asal YouTube **hHPembDkFd0**.

## PENTING — aplikasi tidak dipasang dari fail HTML sahaja

Aplikasi hanya boleh dipasang seperti app apabila disiarkan melalui laman **HTTPS** (contohnya GitHub Pages). Muat naik semua fail pakej ini dengan struktur folder asal; jangan muat naik `index.html` sahaja. Game boleh dimainkan melalui fail HTML yang dibuka terus, tetapi fungsi Pasang App dan offline PWA tidak tersedia melalui `file://`.

## CARA TERBIT DI GITHUB PAGES (CARA MUDAH)

1. Log masuk akaun GitHub yang mempunyai akses untuk menulis. Buka **New repository**. Namakan misalnya `misi-alat-sekolah-ajaib`. Pilih **Public** dan Create repository.
2. Buka halaman repositori. Klik **Add file → Upload files**. *Unzip* pakej ini terlebih dahulu dan muat naik semua kandungan dari folder `misi-alat-sekolah-ajaib-pwa` ke **root** repositori, termasuk folder `icons`, fail `index.html`, `manifest.webmanifest`, `sw.js` (dan README.md jika mahu). Pastikan folder `icons` kekal sebagai `icons`.
3. Klik **Commit changes**.
4. **Settings → Pages → Build and deployment → Deploy from a branch → Branch: main → Folder: /(root) → Save**.
5. Selepas GitHub Pages diterbitkan, buka pautan yang diberi di Settings → Pages. Alamat biasanya `https://NAMA-PENGGUNA.github.io/misi-alat-sekolah-ajaib/`.

## CARA PASANG PADA TELEFON

**Android (Google Chrome):** Buka URL HTTPS → klik butang **📲 Pasang App** dalam game → sahkan **Install**. Jika tiada tetingkap pemasangan, cuba menu Chrome `⋮` → **Pasang aplikasi** atau **Tambah pada skrin utama**.

**iPhone (Safari):** Buka URL HTTPS → tekan **Kongsi** (ikon segi empat dan anak panah ke atas) → **Tambah ke Skrin Utama** → **Tambah**.

Aplikasi akan kelihatan pada skrin utama dengan ikon beg comel, boleh dibuka tanpa tab browser, dan menyimpan kemajuan pada telefon yang sama.

## OFFLINE, PRIVASI & VIDEO

- **Boleh dimainkan luar talian selepas akses pertama melalui HTTPS dan cache sudah siap:** Jelajah, nota, kad imbas, kuiz, latihan, ganjaran dan cetakan sijil.
- **Perlukan internet:** YouTube, termasuk pilihan `▶ Mainkan Dalam Permainan` / `🔴 Buka Terus di YouTube`. Pemain YouTube yang tidak membenarkan embed akan memerlukan pautan YouTube terus.
- **Muzik dan audio:** Muzik sintesis disediakan secara setempat. Sebutan Arab memerlukan sokongan suara (`speechSynthesis`) pada telefon; jika suara Arab belum dimuatkan pada peranti, kualiti/sebutan mungkin terhad.
- Kemajuan disimpan melalui localStorage **di peranti itu sahaja**. Jangan padam data laman/browser jika mahu mengekalkan kemajuan. Kemajuan tidak dihantar kepada guru secara automatik.
- Game ini ialah **PWA**, bukan fail APK/IPA untuk dimuat turun melalui gedung aplikasi.

## STRUKTUR FAIL

```
index.html
manifest.webmanifest
sw.js
.nojekyll
icons/
  icon-192.png
  icon-512.png
  icon-maskable-512.png
  apple-touch-icon.png
  source-icon.svg
  source-icon-maskable.svg
README.md
```

## SEMAK SEBELUM EDARKAN KEPADA MURID

1. Pastikan URL GitHub Pages berfungsi pada Chrome Android dan Safari iPhone.
2. Pasang aplikasi pada skrin utama dan mulakan jelajah.
3. Cuba mod kapal terbang selepas sekali membuka permainan dalam talian. Video YouTube tidak dapat dimainkan tanpa internet, tetapi aktiviti lain sepatutnya boleh berfungsi.
4. Semak pautan video asal dalam tab Video, cuba butang buka terus jika embed disekat.
5. Semak butang cetak/Save as PDF di peranti yang digunakan.
