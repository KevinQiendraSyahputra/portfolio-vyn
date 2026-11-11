# portfolio-Kevin

Portfolio pribadi **Kevin Qiendra Syahputra** — HTML + CSS + JavaScript vanilla, tanpa framework, tanpa build step.
Semua animasi (intro boot, code rain canvas, kartu ID fisika, terminal interaktif) ditulis manual.

## Struktur

```
portfolio-Kevin/
├── index.html          # seluruh markup & konten
├── css/style.css       # tema, layout, animasi CSS
├── js/script.js        # config + data + semua interaksi
├── img/profile.svg     # placeholder foto kartu ID
├── img/docs/           # foto dokumentasi pengalaman (placeholder SVG)
├── images/og-image.png # gambar preview link (1200x630)
├── cv-kevin.pdf        # placeholder CV (ganti dengan punyamu)
└── README.md
```

Tidak ada `node_modules`, tidak ada `npm run build`. Simpan file → refresh browser.

## Menjalankan di Laragon

Folder ini sudah ada di `C:\laragon\www\portfolio-Kevin`.

1. Start All di Laragon (Apache).
2. Buka: **http://localhost/portfolio-Kevin/**

Buka langsung lewat file juga bisa (`index.html`), tapi pakai Laragon supaya path `og:image` dan tombol download CV rapi.

## Yang perlu diganti

### 1. Foto kartu ID

Placeholder sekarang: `img/profile.svg` (kotak "KQ").

- Taruh fotomu, misalnya `img/foto.jpg` (disarankan kotak, minimal 400x400).
- Di `index.html`, cari:

```html
<img src="img/profile.svg" alt="Foto Kevin Qiendra Syahputra" id="badgePhoto">
```

ganti `img/profile.svg` menjadi `img/foto.jpg`.

Foto tampil sebagai kotak 92x92 dengan `object-fit: cover`, jadi bagian tengah yang diambil.

### 2. Data pribadi & link

Di `index.html`:

- `mailto:kevin@example.com` — ada di 3 tempat (hero, contact list, JSON-LD)
- `https://github.com/kevinqiendra` — username GitHub
- `https://www.instagram.com/kevinqiendra` — Instagram
- `http://localhost/portfolio-Kevin/` — `canonical`, `og:url`
- Ganti juga isi JSON-LD (`application/ld+json`) kalau email/URL berubah

Di `js/script.js` (blok paling atas):

```js
const GH_USER = "kevinqiendra";        // live stats repo/follower
const MY_EMAIL = "kevin@example.com";  // tujuan form kontak
const WEB3FORMS_KEY = "";              // kosong = form buka aplikasi email
const QR_URL = "";                     // kosong = QR berisi URL halaman ini
const SITE_URL = "http://localhost/portfolio-Kevin/";
```

### 3. Project

Edit objek `PROJECTS` di `js/script.js`. Setiap project punya:

```js
kasir: {
  title: "Aplikasi Kasir Sederhana",
  cat: "web",                    // "web" | "mobile" — untuk filter
  tech: ["Laravel", "MySQL"],    // chip teknologi
  desc_id: "...", desc_en: "...",
  points_id: ["...", "..."], points_en: ["...", "..."],
  links: [["GitHub", "https://..."]]
}
```

Kunci objek (`kasir`, `absensi`, ...) dipakai perintah terminal `open kasir`.

### 4. Sertifikat

Array `CERTS` di `js/script.js`:

```js
{ title: "...", issuer: "...", date: "2025", src: "img/sertifikat-1.jpg" }
```

`src` kosong → modal menampilkan panduan, bukan gambar. Isi `src` dengan path gambar di `img/`.

### 4b. Foto dokumentasi pengalaman

Setiap kartu di section **Experience** punya tombol **Selengkapnya** yang membuka galeri foto (dropdown halus) dan lightbox saat foto diklik.

Semua diatur lewat array `EXP_DOCS` di `js/script.js`:

```js
{
  note_id: "Dokumentasi kegiatan ...",   // teks pembuka galeri (ID)
  note_en: "Documentation of ...",        // versi Inggris
  photos: [
    { src: "img/docs/foto-1.jpg", cap_id: "Rapat koordinasi", cap_en: "Coordination meeting" },
    { src: "img/docs/foto-2.jpg", cap_id: "Persiapan acara",  cap_en: "Event preparation" }
  ]
}
```

- Urutan array = urutan kartu di section Experience (atas ke bawah). Kartu ke-1 pakai objek ke-1, dan seterusnya.
- `photos: []` → tombol **Selengkapnya** tidak muncul di kartu itu.
- Foto sekarang placeholder SVG di `img/docs/` (10 file). Taruh fotomu di folder yang sama, lalu ganti `src` — format `.jpg`, `.png`, atau `.webp` semua bisa.
- Ukuran ideal: landscape, minimal 1200×750. Foto dipotong `object-fit: cover` rasio 16:10 di grid, ukuran penuh di lightbox.
- Lightbox: tombol `‹` `›`, panah keyboard kiri/kanan, `Esc` untuk menutup.

### 5. CV

Ganti `cv-kevin.pdf` dengan CV aslimu (nama file harus sama), atau ubah `href` tombol Download CV di `index.html`.

### 6. Form kontak

- **Default (tanpa key):** tombol Kirim membuka aplikasi email dengan isi pesan sudah terisi.
- **Kirim langsung tanpa buka email:** daftar gratis di [web3forms.com](https://web3forms.com), ambil access key, isi `WEB3FORMS_KEY` di `js/script.js`.

### 7. Gambar preview link (og:image)

`images/og-image.png` sekarang gambar placeholder. Ganti dengan ukuran **1200x630 px**, nama file tetap sama.

### 8. Warna & font

Semua warna ada di `:root` pada `css/style.css`:

```css
--bg:#070310;   /* latar */
--v:#7c5cff;    /* aksen utama (ungu) */
--m:#22e3c0;    /* aksen kedua (mint) */
--p:#ff5fa2;    /* aksen ketiga (pink) */
```

Ganti 3 variabel aksen itu → seluruh situs ikut berubah.

## Fitur

- Intro boot sequence dengan progres build, bisa di-skip
- Code rain canvas + partikel yang menghindar dari kursor
- Kartu ID digantung dengan fisika tali (Verlet), bisa ditarik & dilempar
- QR otomatis di kartu ID
- Typing effect role di hero
- Bilingual ID/EN (tombol kanan atas, tersimpan di localStorage)
- Scroll reveal, counter angka, skill bar animasi
- Filter project + modal detail
- Galeri dokumentasi per pengalaman: dropdown smooth, grid foto ber-stagger, lightbox dengan navigasi
- Modal sertifikat
- Terminal interaktif: `help`, `about`, `whoami`, `skills`, `projects`, `open <key>`, `certs`, `contact`, `github`, `goto <section>`, `lang`, `ls`, `date`, `sudo`, `clear` (riwayat panah atas/bawah, Tab autocomplete, Ctrl+L)
- Live stats GitHub (repo + followers)
- Form kontak (Web3Forms atau mailto)
- Custom cursor, back-to-top, `prefers-reduced-motion` dihormati
- Responsif sampai 360px, menu mobile

## Catatan teknis

- Font: Space Grotesk + JetBrains Mono (Google Fonts).
- QR pakai `qrcodejs` dari CDN. Tanpa internet, kartu ID tetap tampil, QR kosong.
- Live stats GitHub butuh internet dan username yang valid; kalau gagal, tampil tanda `—` tanpa memblokir halaman.
- Semua animasi canvas berhenti bertahap saat `prefers-reduced-motion: reduce` aktif (code rain statis).
