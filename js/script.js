/* =========================================================
   KEVIN.DEV — portfolio script
   Vanilla JS. Tidak ada framework, tidak ada build step.
   Ubah data di blok CONFIG + DATA di bawah.
   ========================================================= */

// Selalu kembalikan posisi scroll ke paling atas saat halaman di-refresh / reload
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

/* ===== CONFIG (EDIT DI SINI) ===== */
const GH_USER = "kevinqiendra";                 // username GitHub untuk live stats
const MY_EMAIL = "kevin123qiendra@gmail.com";           // email kontak
const WEB3FORMS_KEY = "";                       // isi access key Web3Forms kalau mau form kirim email
const QR_URL = "";                              // kosong = otomatis pakai URL halaman ini
const SITE_URL = "http://localhost/portfolio-Kevin/";

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ===== DATA ===== */
const TECH = [
  ["HTML", "markup"], ["CSS", "styling"], ["JavaScript", "logic"],
  ["PHP", "backend"], ["Laravel", "framework"], ["Flutter", "mobile"],
  ["Dart", "language"], ["MySQL", "database"], ["Git", "tooling"]
];

const TECH_LOGOS = {
  HTML: `<svg viewBox="0 0 24 24" width="46" height="46" fill="none"><path d="M4.14 2L5.8 20.6L12 22.3L18.2 20.6L19.86 2H4.14Z" fill="#E44D26"/><path d="M12 3.8V20.6L16.8 19.3L18.1 4.1H12V3.8Z" fill="#F16529"/><path d="M7.4 7.2H16.6L16.3 9.7H10.1L10.3 12H16L15.4 17.5L12 18.4L8.6 17.5L8.4 15H10.5L10.6 16.2L12 16.6L13.4 16.2L13.6 14.1H8L7.4 7.2Z" fill="#FFF"/></svg>`,
  CSS: `<svg viewBox="0 0 24 24" width="46" height="46" fill="none"><path d="M4.14 2L5.8 20.6L12 22.3L18.2 20.6L19.86 2H4.14Z" fill="#1572B6"/><path d="M12 3.8V20.6L16.8 19.3L18.1 4.1H12V3.8Z" fill="#33A9DC"/><path d="M16.6 7.2H7.4L7.6 9.7H13.9L13.7 12H7.8L8 14.5H13.5L13.3 16.2L12 16.6L10.6 16.2L10.5 15H8.4L8.6 17.5L12 18.4L15.4 17.5L16 12L16.1 9.7L16.6 7.2Z" fill="#FFF"/></svg>`,
  JavaScript: `<svg viewBox="0 0 24 24" width="46" height="46" fill="none"><rect width="24" height="24" rx="4" fill="#F7DF1E"/><path d="M7 16.6C7.6 17 8.3 17.3 9 17.3C10.2 17.3 10.9 16.7 10.9 15.4V10.5H9.2V15.4C9.2 15.8 9 16 8.6 16C8.2 16 7.8 15.8 7.5 15.5L7 16.6ZM13.8 17.4C14.7 17.8 15.7 18 16.6 18C18.9 18 20.2 16.8 20.2 15.1C20.2 13.5 19.2 12.8 17.5 12.1C16.6 11.7 16.1 11.4 16.1 10.8C16.1 10.3 16.5 10 17.4 10C18.2 10 18.8 10.3 19.3 10.7L19.9 9.7C19.3 9.2 18.4 8.9 17.4 8.9C15.3 8.9 14.1 10.1 14.1 11.7C14.1 13.2 15 14 16.6 14.7C17.6 15.1 18.1 15.5 18.1 16.1C18.1 16.7 17.5 17.1 16.6 17.1C15.7 17.1 14.8 16.7 14.3 16.2L13.8 17.4Z" fill="#000"/></svg>`,
  PHP: `<svg viewBox="0 0 24 24" width="46" height="46"><ellipse cx="12" cy="12" rx="11" ry="6.5" fill="#777BB4"/><path d="M5.5 14l.9-4.8h1.8c1.1 0 1.8.6 1.6 1.7-.2 1.1-1 1.7-2.1 1.7h-.8l-.3 1.4H5.5zm1.5-2.5h.7c.6 0 .9-.3 1-.8s-.2-.8-.7-.8h-.7l-.3 1.6zm4.3 2.5l.9-4.8h1.2l-.3 1.6h.1c.4-1.1 1.2-1.7 2.1-1.7.2 0 .4 0 .5.1l-.4 1.7c-.2 0-.4-.1-.6-.1-.9 0-1.4.7-1.6 1.6l-.3 1.6h-1.2zm5.4 0l.9-4.8h1.8c1.1 0 1.8.6 1.6 1.7-.2 1.1-1 1.7-2.1 1.7h-.8l-.3 1.4h-1.1zm1.5-2.5h.7c.6 0 .9-.3 1-.8s-.2-.8-.7-.8h-.7l-.3 1.6z" fill="#FFF"/></svg>`,
  Laravel: `<svg viewBox="0 0 24 24" width="46" height="46" fill="none"><path d="M8.2 2.1L12 4.3v4.4L8.2 6.5V2.1zm7.6 4.4L12 4.3v4.4l3.8 2.2V6.5zm-7.6 8.7L12 13v4.4l-3.8-2.2v-4.4zm7.6 0L12 13v4.4l3.8 2.2v-4.4zM4.4 8.7L8.2 11v4.3L4.4 13V8.7zm15.2 0L15.8 11v4.3l3.8-2.3V8.7zM12 8.7l3.8 2.2-3.8 2.2-3.8-2.2L12 8.7z" fill="#FF2D20"/></svg>`,
  Flutter: `<svg viewBox="0 0 24 24" width="46" height="46" fill="none"><path d="M14.3 2L4 12.3L7.2 15.5L20.7 2H14.3Z" fill="#42A5F5"/><path d="M14.3 12.5L8.7 18.1L11.9 21.3L15.1 18.1L20.7 12.5H14.3Z" fill="#0D47A1"/><path d="M11.9 21.3L15.1 18.1L20.7 23.7H14.3L11.9 21.3Z" fill="#01579B"/><path d="M8.7 18.1L11.9 14.9L15.1 18.1L11.9 21.3L8.7 18.1Z" fill="#29B6F6"/></svg>`,
  Dart: `<svg viewBox="0 0 24 24" width="46" height="46" fill="none"><path d="M4.3 3.5H11.7L20.5 12.3L15.6 20.5L3.5 8.4V3.5H4.3Z" fill="#0081C6"/><path d="M12.3 3.5L20.5 11.7L18.1 16.5L9.9 8.3L12.3 3.5Z" fill="#00B4AB"/><path d="M4.3 9.9L12.5 18.1L7.7 20.5L3.5 16.3V9.9H4.3Z" fill="#01579B"/></svg>`,
  MySQL: `<svg viewBox="0 0 24 24" width="46" height="46"><path fill="#00758F" d="M16.5 3.5c-.8.5-1.5 1.2-2.1 2-1-.2-2-.3-3-.2-3.8.4-6.8 3.5-7.1 7.3-.2 2.1.4 4.1 1.6 5.8 1.1-1.2 2.6-2 4.3-2.1 1.7-.1 3.3.5 4.5 1.7 1.1-1.1 2.6-1.7 4.2-1.7 1.1 0 2.2.3 3.1.9.4-1.5.5-3.1.2-4.7-.6-3.7-3.4-6.7-7-7.3.5-.6 1.1-1 1.8-1.4-.2-.1-.4-.2-.5-.3z"/><path fill="#F29111" d="M12.5 17.5c-1.4 0-2.6.6-3.4 1.5 1 .7 2.1 1.1 3.4 1.1s2.4-.4 3.4-1.1c-.8-.9-2-1.5-3.4-1.5z"/></svg>`,
  Git: `<svg viewBox="0 0 24 24" width="46" height="46"><path fill="#F05032" d="M2.6 10.6L10.6 2.6a2 2 0 0 1 2.8 0l8 8a2 2 0 0 1 0 2.8l-8 8a2 2 0 0 1-2.8 0l-8-8a2 2 0 0 1 0-2.8z"/><circle cx="12" cy="7.5" r="1.6" fill="#FFF"/><circle cx="12" cy="16.5" r="1.6" fill="#FFF"/><circle cx="16" cy="12" r="1.6" fill="#FFF"/><path d="M12 7.5v9M12 12l4 0" stroke="#FFF" stroke-width="1.8" stroke-linecap="round"/></svg>`
};

const SKILL_LOGOS = {
  "JavaScript": TECH_LOGOS["JavaScript"],
  "PHP": TECH_LOGOS["PHP"],
  "Laravel": TECH_LOGOS["Laravel"],
  "Flutter / Dart": TECH_LOGOS["Flutter"],
  "UI / CSS": TECH_LOGOS["CSS"],
  "MySQL": TECH_LOGOS["MySQL"]
};

const SKILLS = [
  ["JavaScript", 78], ["PHP", 70], ["Laravel", 65],
  ["Flutter / Dart", 62], ["UI / CSS", 82], ["MySQL", 68]
];

const PROJECTS = {
  kasir: {
    title: "Aplikasi Kasir Sederhana",
    cat: "web",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    desc_id: "Aplikasi kasir untuk warung kecil: kelola produk, transaksi, cetak struk, dan laporan harian.",
    desc_en: "Point-of-sale app for small shops: product management, transactions, receipts, and daily reports.",
    points_id: ["Login multi-role (admin, kasir)", "CRUD produk + stok otomatis", "Struk dan rekap penjualan harian"],
    points_en: ["Multi-role login (admin, cashier)", "Product CRUD with stock deduction", "Receipt and daily sales recap"],
    links: [["GitHub", "https://github.com/kevinqiendra"]]
  },
  absensi: {
    title: "Absensi QR Code",
    cat: "web",
    tech: ["PHP", "MySQL", "JavaScript"],
    desc_id: "Sistem absensi berbasis QR: siswa scan QR, kehadiran tercatat langsung ke database dan dashboard.",
    desc_en: "QR-based attendance: students scan a code, presence is recorded straight into the database and dashboard.",
    points_id: ["QR dinamis per sesi", "Rekap kehadiran per kelas", "Export data ke CSV"],
    points_en: ["Dynamic QR per session", "Per-class attendance recap", "CSV export"],
    links: [["Demo", "https://github.com/kevinqiendra"]]
  },
  cuaca: {
    title: "Dashboard Cuaca",
    cat: "web",
    tech: ["JavaScript", "REST API", "CSS"],
    desc_id: "Dashboard cuaca memakai API publik: prakiraan 3 hari, pencarian kota, dan grafik suhu.",
    desc_en: "Weather dashboard using a public API: 3-day forecast, city search, and temperature chart.",
    points_id: ["Fetch API + cache localStorage", "Grafik suhu buatan sendiri di canvas", "Responsif sampai 320px"],
    points_en: ["Fetch API with localStorage cache", "Hand-rolled canvas temperature chart", "Responsive down to 320px"],
    links: [["GitHub", "https://github.com/kevinqiendra"]]
  },
  catatan: {
    title: "Catatan Keuangan",
    cat: "mobile",
    tech: ["Flutter", "Dart", "SQLite"],
    desc_id: "Aplikasi mobile pencatat pemasukan dan pengeluaran dengan grafik bulanan dan mode offline.",
    desc_en: "Mobile app for income and expense tracking with monthly charts and full offline mode.",
    points_id: ["Offline-first dengan SQLite", "Grafik bulanan per kategori", "Backup data ke file JSON"],
    points_en: ["Offline-first using SQLite", "Monthly chart per category", "JSON file backup"],
    links: [["GitHub", "https://github.com/kevinqiendra"]]
  },
  todo: {
    title: "Task Board",
    cat: "web",
    tech: ["JavaScript", "CSS Grid", "localStorage"],
    desc_id: "Papan tugas drag-and-drop dengan mode gelap, filter label, dan penyimpanan lokal.",
    desc_en: "Drag-and-drop task board with dark mode, label filters, and local persistence.",
    points_id: ["Drag and drop tanpa librari", "Filter label + pencarian", "State tersimpan di localStorage"],
    points_en: ["Drag and drop without libraries", "Label filters plus search", "State persisted in localStorage"],
    links: [["GitHub", "https://github.com/kevinqiendra"]]
  },
  portofolio: {
    title: "Website Portfolio",
    cat: "web",
    tech: ["HTML", "CSS", "JavaScript"],
    desc_id: "Situs yang sedang kamu baca: intro boot, code rain canvas, kartu ID fisika, dan terminal interaktif.",
    desc_en: "The site you are reading: boot intro, canvas code rain, physics ID card, and an interactive terminal.",
    points_id: ["Semua animasi ditulis manual", "0 dependency runtime", "Bilingual ID / EN"],
    points_en: ["Every animation hand-written", "Zero runtime dependencies", "Bilingual ID / EN"],
    links: [["GitHub", "https://github.com/kevinqiendra"]]
  }
};

const CERTS = [
  { title: "Red Hat System Administration I (RH124)", issuer: "Red Hat", date: "2026", src: "img/Redhat.jpeg" },
  { title: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy", date: "2025", src: "img/CiscoAcademy.jpeg" },
  { title: "Introduction to Data Science with R", issuer: "DQLab", date: "2026", src: "img/Data-analyst.png" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", date: "2024", src: "img/Cybersecurity.jpeg" }
];

/* ===== DOKUMENTASI PENGALAMAN =====
   Urutan array = urutan kartu di section #experience (atas ke bawah).
   Taruh fotomu di img/docs/ lalu ganti src di bawah.
   photos kosong ([]) = tombol "Selengkapnya" tidak muncul di kartu itu. */
const EXP_DOCS = [
  {
    note_id: "Dokumentasi kegiatan Praktek Kerja Lapangan di PT PLN ICONPLUS Riau — lingkungan kerja, perangkat yang dipakai, dan hasil pekerjaan.",
    note_en: "Documentation from the internship at PT PLN ICONPLUS Riau — the workspace, the tools, and the delivered work.",
    photos: [
      { src: "img/docs/exp1-1.svg", cap_id: "Ruang kerja tim", cap_en: "Team workspace" },
      { src: "img/docs/exp1-2.svg", cap_id: "Pendampingan mentor", cap_en: "Mentor session" },
      { src: "img/docs/exp1-3.svg", cap_id: "Penutupan PKL", cap_en: "Internship closing" }
    ]
  },
  {
    note_id: "Dokumentasi kepanitiaan Koor Publikasi, Dekorasi, & Dokumentasi — proses desain, panggung acara, dan tim di lapangan.",
    note_en: "Documentation from the Publication, Decoration & Documentation division — design process, stage setup, and the field team.",
    photos: [
      { src: "img/docs/exp2-1.svg", cap_id: "Rapat koordinasi", cap_en: "Coordination meeting" },
      { src: "img/docs/exp2-2.svg", cap_id: "Persiapan dekorasi", cap_en: "Decoration setup" },
      { src: "img/docs/exp2-3.svg", cap_id: "Dokumentasi acara", cap_en: "Event documentation" }
    ]
  },
  {
    note_id: "Dokumentasi latihan dan penugasan Paskibra — formasi, latihan baris-berbaris, dan upacara bendera.",
    note_en: "Training and duty documentation with Paskibra — formation drills and the flag ceremony.",
    photos: [
      { src: "img/docs/exp3-1.svg", cap_id: "Latihan formasi", cap_en: "Formation drill" },
      { src: "img/docs/exp3-2.svg", cap_id: "Upacara bendera", cap_en: "Flag ceremony" }
    ]
  },
  {
    note_id: "Dokumentasi kegiatan OSIS SMP — dokumentasi kabid keagamaan, kegiatan sekolah, kunjungan ke kantor DPRD.",
    note_en: "Student council documentation — board meetings, religious programs, and school publications.",
    photos: [
      { src: "img/docs/exp4-1.png", cap_id: "Dokumentasi Kabid Keagamaan", cap_en: "Board meeting" },
      { src: "img/docs/exp4-2.jpeg", cap_id: "Kegiatan sekolah", cap_en: "School program" }
    ]
  }
];

/* ===== I18N ===== */
const I18N = {
  en: {
    nav_home: "Home", nav_about: "About", nav_edu: "Education", nav_exp: "Experience",
    nav_skills: "Skills", nav_projects: "Projects", nav_certs: "Certificates",
    nav_terminal: "Terminal", nav_contact: "Contact",

    hero_desc: "I'm Kevin Qiendra Syahputra — building web interfaces and mobile apps that are clean, fast, and pleasant to use.",
    btn_projects: "View Projects", btn_cv: "Download CV",

    kicker_about: "about", t_about: "About Me", about_h3: "Get To Know Me",
    about_p1: "Hi, I'm Kevin Qiendra Syahputra. I'm interested in web development, mobile apps, and information systems.",
    about_p2: "I enjoy building interfaces that feel interactive and learning how a product can feel fast, clear, and fun to use.",
    lbl_name: "Name", lbl_job: "Profession", lbl_loc: "Location", lbl_focus: "Focus",
    job_val: "Student / Developer",
    st_projects: "Projects", st_certs: "Certificates", st_years: "Years Learning", st_tech: "Technologies",

    kicker_edu: "education", t_edu: "Education",
    edu_uni: "Active student. Studying web programming, mobile development, databases, and information systems.",
    edu_sma: "Senior high school. Where the interest in technology and programming started.",
    edu_smp: "Junior high school.",
    edu_sd: "The beginning of the journey.",

    kicker_exp: "experience", t_exp: "Experience & Organization",
    exp_sub: "Internships, committees, and organizations I have been part of.",
    exp1: "Handled the organization's digital needs: event websites, publication design, and documentation.",
    exp2: "Built business profile sites, landing pages, and UI fixes for small clients.",
    exp3: "Publication and documentation division, including social media content.",

    kicker_skills: "skills", t_skills: "Skills", t_learning: "Currently Learning",

    kicker_projects: "work", t_projects: "Projects",
    kicker_certs: "certificates", t_certs: "Certificates",
    kicker_terminal: "interactive", t_terminal: "Terminal",
    kicker_contact: "contact", t_contact: "Contact Me",
    contact_sub: "Open for collaboration, freelance work, or just a chat.",

    f_name: "Name", f_email: "Email", f_msg: "Message", f_send: "Send",
    footer_build: "hand-built with HTML, CSS, JS",

    tm_welcome: "type 'help' to list commands.",
    tm_help: "commands: about · whoami · skills · projects · open <key> · certs · contact · github · lang · ls · date · sudo · clear",
    tm_unknown: "command not found",
    tm_lang: "language switched to English",
    tm_sent: "message sent. thank you!",
    tm_sending: "sending…",
    tm_fill: "fill all fields first",
    tm_noformat: "message prepared in your mail client",
    gh_fail: "GitHub stats unavailable — check GH_USER in js/script.js"
  },
  id: {
    tm_welcome: "ketik 'help' untuk melihat daftar perintah.",
    tm_help: "perintah: about · whoami · skills · projects · open <key> · certs · contact · github · lang · ls · date · sudo · clear",
    tm_unknown: "perintah tidak dikenal",
    tm_lang: "bahasa diganti ke Indonesia",
    tm_sent: "pesan terkirim. terima kasih!",
    tm_sending: "mengirim…",
    tm_fill: "isi semua kolom dulu",
    tm_noformat: "pesan disiapkan di aplikasi email kamu",
    gh_fail: "statistik GitHub tidak tersedia — cek GH_USER di js/script.js"
  }
};

let lang = "id";
try {
  const saved = localStorage.getItem("lang");
  if (saved === "en" || saved === "id") lang = saved;
} catch (_) {}

const ID_CACHE = new WeakMap();

function applyLang() {
  $$("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (!ID_CACHE.has(el)) ID_CACHE.set(el, el.innerHTML);
    el.innerHTML = lang === "id" ? ID_CACHE.get(el) : (I18N[lang][key] ?? ID_CACHE.get(el));
  });
  const btn = $("#langBtn");
  if (btn) btn.textContent = lang === "id" ? "EN" : "ID";
  document.documentElement.lang = lang;

  renderTech();
  renderBars();
  renderProjects();
  renderCerts();
  if (typeof syncExpDocs === "function") syncExpDocs();
}

function setLang(l) {
  lang = l;
  try { localStorage.setItem("lang", l); } catch (_) {}
  applyLang();
}

/* ===== TEXT HELPER (untuk konten dinamis) ===== */
const L = (idText, enText) => (lang === "en" ? enText : idText);

/* =========================================================
   1. INTRO / LOADING — code editor boot
   ========================================================= */
(function intro() {
  const introEl = $("#intro");
  if (!introEl) {
    document.body.classList.remove("locked");
    document.body.classList.add("hero-ready");
    return;
  }

  const logEl = $("#introLog");
  const fill = $("#introFill");
  const pctEl = $("#introPct");
  const tabsEl = $("#edTabs");
  const codeEl = $("#edCode");
  const langsEl = $("#introLangs");
  const clock = $("#introClock");
  const skip = $("#introSkip");

  /* markup token: ⟦kelas|teks⟧
     k = keyword · s = string · f = function · n = number · t = tag · a = attribute */
  const STEPS = [
    { file: "index.html", name: "HTML", icon: "html5", code: [
      "⟦t|<section⟧ ⟦a|id⟧=⟦s|\"kevin\"⟧⟦t|>⟧",
      "  ⟦t|<h1>⟧Hello, World!⟦t|</h1>⟧",
      "  ⟦t|<p>⟧Web & Mobile Developer⟦t|</p>⟧",
      "⟦t|</section>⟧"] },
    { file: "style.css", name: "CSS", icon: "css3", code: [
      "⟦k|.hero⟧ {",
      "  ⟦a|color⟧: ⟦n|#7c5cff⟧;",
      "  ⟦a|display⟧: ⟦s|grid⟧;",
      "  ⟦a|animation⟧: ⟦f|glow⟧ 2s infinite;",
      "}"] },
    { file: "script.js", name: "JavaScript", icon: "javascript", code: [
      "⟦k|const⟧ dev = { name: ⟦s|\"Kevin\"⟧, role: ⟦s|\"Developer\"⟧ };",
      "⟦f|console⟧.⟦f|log⟧(⟦s|`Hi, ${dev.name}!`⟧);",
      "⟦k|export default⟧ dev;"] },
    { file: "web.php", name: "Laravel", icon: "laravel", code: [
      "⟦k|Route⟧::⟦f|get⟧(⟦s|'/kevin'⟧, ⟦k|function⟧ () {",
      "    ⟦k|return⟧ ⟦f|view⟧(⟦s|'portfolio'⟧);",
      "});"] },
    { file: "main.dart", name: "Flutter", icon: "flutter", code: [
      "⟦k|void⟧ ⟦f|main⟧() {",
      "  ⟦f|runApp⟧(⟦k|const⟧ KevinApp());",
      "}"] },
    { file: "skills.py", name: "Python", icon: "python", code: [
      "⟦k|import⟧ pandas ⟦k|as⟧ pd",
      "df = pd.⟦f|read_csv⟧(⟦s|\"skills.csv\"⟧)",
      "⟦f|print⟧(df.⟦f|head⟧())"] }
  ];

  const parse = line => {
    const out = [];
    line.replace(/⟦(\w)\|(.*?)⟧|([^⟦]+)/g, (m, cls, txt, plain) => {
      out.push(cls ? [cls, txt] : ["", plain]);
      return m;
    });
    return out;
  };
  STEPS.forEach(s => {
    s.lines = s.code.map(parse);
    s.total = s.lines.reduce((n, l) => n + l.reduce((m, t) => m + t[1].length, 0) + 1, 0);
  });

  const tabEls = STEPS.map(s => {
    const d = document.createElement("div");
    d.className = "ed-tab";
    d.textContent = s.file;
    tabsEl.appendChild(d);
    return d;
  });

  const langEls = STEPS.map(s => {
    const d = document.createElement("div");
    d.className = "lg";
    const im = new Image();
    im.src = "img/logos/" + s.icon + ".svg";
    im.alt = s.name;
    im.decoding = "async";
    im.onerror = () => { im.style.display = "none"; };
    const sp = document.createElement("span");
    sp.textContent = s.name;
    d.append(im, sp);
    langsEl.appendChild(d);
    return d;
  });

  function paint(step, n) {
    codeEl.textContent = "";
    let left = n, last = null;
    for (const line of step.lines) {
      if (left <= 0) break;
      const row = document.createElement("div");
      row.className = "cl";
      last = row;
      for (const [cls, txt] of line) {
        if (left <= 0) break;
        const part = txt.slice(0, left);
        left -= part.length;
        const sp = document.createElement("span");
        if (cls) sp.className = cls;
        sp.textContent = part;
        row.appendChild(sp);
      }
      left -= 1;
      codeEl.appendChild(row);
    }
    const caret = document.createElement("span");
    caret.className = "caret";
    (last || codeEl.appendChild(Object.assign(document.createElement("div"), { className: "cl" }))).appendChild(caret);
  }

  let activeLine = null;
  const pushLog = (txt, cls = "") => {
    activeLine = document.createElement("div");
    activeLine.textContent = txt;
    if (cls) activeLine.className = cls;
    logEl.appendChild(activeLine);
    while (logEl.children.length > 4) logEl.removeChild(logEl.firstChild);
  };
  const enter = i => {
    tabEls[i].classList.add("on");
    langEls[i].classList.add("cur");
    pushLog("> compiling " + STEPS[i].file + " ...");
  };
  const leave = i => {
    tabEls[i].classList.replace("on", "done");
    langEls[i].classList.replace("cur", "on");
    activeLine.textContent = "✔ " + STEPS[i].file + " — " + STEPS[i].name + " ready";
    activeLine.className = "ok";
  };

  const STEP = 720, TYPE = .78, N = STEPS.length, TOTAL = N * STEP;
  let cur = -1, done = false;
  const started = performance.now();

  const clockTick = () => { clock.textContent = new Date().toTimeString().slice(0, 8); };
  clockTick();
  const clockTimer = setInterval(clockTick, 1000);

  function finish() {
    if (done) return;
    done = true;
    clearInterval(clockTimer);
    fill.style.width = "100%";
    pctEl.textContent = "build 100%";
    introEl.classList.add("done");

    // panel membuka, halaman di belakangnya siap
    setTimeout(() => {
      document.body.classList.remove("locked");
      document.body.classList.add("hero-ready");
      window.scrollTo(0, 0);
      window.dispatchEvent(new Event("resize"));
    }, 900);

    setTimeout(() => {
      if (introEl.parentNode) introEl.remove();
    }, 2600);
  }

  function success() {
    langEls.forEach(l => l.classList.add("on"));
    tabEls.forEach(t => t.classList.add("done"));
    pushLog("✔ BUILD SUCCESS — access granted", "big");
    setTimeout(finish, 700);
  }

  function tick(now) {
    if (done) return;
    // rAF bisa memberi timestamp sebelum performance.now() dipanggil — clamp ke 0
    const el = Math.max(0, now - started);
    const i = Math.min(Math.max(0, Math.floor(el / STEP)), N);
    while (cur < i) {
      if (cur >= 0) leave(cur);
      cur++;
      if (cur < N) enter(cur);
    }
    if (i < N) {
      const s = STEPS[i];
      paint(s, Math.round(Math.min((el - i * STEP) / (STEP * TYPE), 1) * s.total));
    }
    const p = Math.min(100, Math.round(el / TOTAL * 100));
    fill.style.width = p + "%";
    pctEl.textContent = "build " + p + "%";
    if (el < TOTAL) requestAnimationFrame(tick);
    else success();
  }

  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    const last = STEPS[N - 1];
    paint(last, last.total);
    langEls.forEach(l => l.classList.add("on"));
    tabEls.forEach(t => t.classList.add("done"));
    fill.style.width = "100%";
    pctEl.textContent = "build 100%";
    setTimeout(finish, 900);
  } else {
    requestAnimationFrame(tick);
    setTimeout(finish, 8000);
  }

  skip.addEventListener("click", finish);
  addEventListener("keydown", e => {
    if (e.key === "Escape" && !done) finish();
  });
})();

/* =========================================================
   2. CODE RAIN + PARTIKEL YANG MENGHINDAR DARI KURSOR
   ========================================================= */
(function rain() {
  const cv = $("#code-bg");
  if (!cv) return;
  const ctx = cv.getContext("2d");
  const glyphs = "01{}<>/;=()[]$#&+*".split("");
  const words = ["</>", "{ }", "01", "=>", "();", "&&", "[]", "fn", "<?>", "::"];
  const FS = 15;
  const mouse = { x: -999, y: -999 };
  let w, h, cols, drops, parts;

  function resize() {
    w = cv.width = innerWidth;
    h = cv.height = innerHeight;
    cols = Math.floor(w / FS);
    drops = Array.from({ length: cols }, () => Math.random() * -60);
    parts = Array.from({ length: Math.min(46, Math.floor(w / 32)) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.5 - 0.1,
      t: words[Math.floor(Math.random() * words.length)],
      s: 11 + Math.random() * 13,
      a: 0.12 + Math.random() * 0.3
    }));
  }

  addEventListener("resize", resize);
  resize();
  addEventListener("pointermove", e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  addEventListener("pointerleave", () => { mouse.x = mouse.y = -999; });

  /* Latar ini cuma hiasan → 30fps sudah lebih dari cukup, dan tiap langkah
     diskalakan dengan delta waktu supaya kecepatannya sama di layar 60Hz/120Hz. */
  const STEP_MS = 1000 / 30;
  let raf = null, lastT = 0;

  function draw(k, fade) {
    /* fill semi-transparan, bukan clearRect → menghasilkan ekor pudar */
    ctx.fillStyle = "rgba(7,3,16," + fade + ")";
    ctx.fillRect(0, 0, w, h);
    ctx.font = FS + "px JetBrains Mono, monospace";
    ctx.fillStyle = "rgba(124,92,255,.30)";

    for (let i = 0; i < cols; i++) {
      const prev = Math.floor(drops[i]);
      drops[i] += 0.33 * k;
      if (Math.floor(drops[i]) !== prev && drops[i] > 0) {
        ctx.fillText(glyphs[Math.floor(Math.random() * glyphs.length)], i * FS, drops[i] * FS);
      }
      if (drops[i] * FS > h && Math.random() > 0.976) drops[i] = 0;
    }

    for (const p of parts) {
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const d = Math.hypot(dx, dy) || 1;
      if (d < 150) {
        const push = (150 - d) * 0.06 * k;
        p.x += (dx / d) * push;
        p.y += (dy / d) * push;
      }
      p.x += p.vx * k;
      p.y += p.vy * k;
      if (p.y < -24) { p.y = h + 24; p.x = Math.random() * w; }
      if (p.x < -40) p.x = w + 20;
      if (p.x > w + 40) p.x = -20;
      ctx.font = p.s + "px JetBrains Mono, monospace";
      ctx.fillStyle = "rgba(34,227,192," + p.a + ")";
      ctx.fillText(p.t, p.x, p.y);
    }
  }

  function loop(t) {
    raf = requestAnimationFrame(loop);
    if (t - lastT < STEP_MS - 5) return;
    const dt = lastT ? t - lastT : 16.7;
    lastT = t;
    const k = Math.min(2.5, dt / 16.7);
    draw(k.toFixed(2), (1 - Math.pow(0.85, k)).toFixed(3));
  }

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    ctx.fillStyle = "#070310";
    ctx.fillRect(0, 0, w, h);
  } else {
    lastT = performance.now();
    raf = requestAnimationFrame(loop);
  }
})();

/* =========================================================
   3. LANYARD — kartu ID dengan fisika tali + drag realistis
   Verlet integration + pendulum inertia & 3D tilt.
   ========================================================= */
(function lanyard() {
  const wrap = $("#lanyard");
  if (!wrap) return;
  const cv = wrap.querySelector(".cord");
  const card = wrap.querySelector(".badge");
  const ctx = cv.getContext("2d");

  const N = 12;                // segmen tali halus & lentur
  const GRAV = 0.42;           // gravitasi natural agar tali melengkung lembut
  const DAMP = 0.985;          // redaman velocity halus
  const ITER = 6;              // iterasi constraint rileks
  const topY = 16;             // titik jangkar atas tali
  const restY = 125;           // posisi ujung tali saat diam (di atas klip kartu)

  /* Drop-in: kartu turun dari atas layar saat loading screen selesai */
  const DROP_MS = 1050;
  const DROP_FROM = -430;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let anchorY = topY;          // posisi jangkar (dianimasikan saat drop)
  let dropping = false;
  let hasDropped = false;
  let dropStart = 0;

  let W = 0, H = 0, seg = 0, pts = null, raf = null;
  let dragging = false, grab = { x: 0, y: 0 }, dragTarget = { x: 0, y: 0 }, vel = { x: 0, y: 0 };
  let cardAngle = 0, cardAngleVel = 0;
  let tiltX = 0, tiltY = 0;

  function build() {
    W = wrap.offsetWidth || 380;
    H = wrap.offsetHeight || 540;
    const d = devicePixelRatio || 1;
    cv.style.top = "0px";
    cv.style.left = "0px";
    cv.style.width = W + "px";
    cv.style.height = H + "px";
    cv.width = W * d;
    cv.height = H * d;
    ctx.setTransform(d, 0, 0, d, 0, 0);

    // Panjang segmen sedikit longgar agar jatuh natural tanpa membengkok ekstrem
    seg = ((restY - topY) * 1.03) / N;

    pts = [];
    for (let i = 0; i <= N; i++) {
      const p = i / N;
      const x = W / 2;
      const y = anchorY + p * (restY - topY);
      pts.push({ x, y, px: x, py: y });
    }
    dragTarget.x = pts[N].x;
    dragTarget.y = pts[N].y;

    card.style.bottom = "auto";
    // Posisi kartu digerakkan lewat transform (composited) — left/top dibiarkan 0
    // supaya tiap frame tidak memicu layout ulang.
    card.style.left = "0px";
    card.style.top = "0px";
    card.style.transformOrigin = "50% 0px";
    card.style.transform = "translate3d(" + pts[N].x + "px," + pts[N].y + "px,0) translate(-50%,0px)";
  }

  function startDrop() {
    if (dropping || hasDropped || !pts) return;
    hasDropped = true;
    if (reduced) { anchorY = topY; return; }
    anchorY = DROP_FROM;
    for (let i = 0; i <= N; i++) {
      const p = pts[i];
      p.x = p.px = W / 2;
      p.y = p.py = anchorY + (i / N) * (restY - topY);
    }
    cardAngle = 0; cardAngleVel = 0; tiltX = 0; tiltY = 0;
    dropStart = performance.now();
    dropping = true;
  }

  function solve() {
    const sway = dragging || dropping ? 0 : Math.sin(performance.now() * 0.0008) * 3.2;
    for (let k = 0; k < ITER; k++) {
      pts[0].x = W / 2 + sway;
      pts[0].y = anchorY;
      for (let i = 1; i <= N; i++) {
        const a = pts[i - 1], b = pts[i];
        const dx = b.x - a.x, dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 0.0001;
        // Gunakan elastisitas lembut (0.86) agar tali terasa lentur tapi tidak karet
        const diff = ((dist - seg) / dist) * 0.86;
        if (i === 1) {
          b.x -= dx * diff;
          b.y -= dy * diff;
        } else if (i === N && dragging) {
          a.x += dx * diff;
          a.y += dy * diff;
        } else {
          a.x += dx * diff * 0.5;
          a.y += dy * diff * 0.5;
          b.x -= dx * diff * 0.5;
          b.y -= dy * diff * 0.5;
        }
      }
    }
  }

  function physics(dt) {
    const lastIdx = dragging ? N - 1 : N;
    for (let i = 1; i <= lastIdx; i++) {
      const p = pts[i];
      const vx = (p.x - p.px) * DAMP;
      const vy = (p.y - p.py) * DAMP;
      p.px = p.x;
      p.py = p.y;
      p.x += vx;
      p.y += vy + GRAV;
    }

    const end = pts[N];
    if (dragging) {
      // Mengikuti kursor dengan delay inersia yang sangat halus, empuk, dan smooth.
      // Nilai 0.38 dihitung per frame 60fps, jadi dinormalisasi ke waktu nyata
      // agar kartu tetap menempel di kursor pada layar 60Hz maupun 120Hz.
      const kd = 1 - Math.pow(0.62, dt / 16.7);
      end.px = end.x;
      end.py = end.y;
      end.x += (dragTarget.x - end.x) * kd;
      end.y += (dragTarget.y - end.y) * kd;
      vel.x = vel.x * 0.65 + (end.x - end.px) * 0.35;
      vel.y = vel.y * 0.65 + (end.y - end.py) * 0.35;
    }

    solve();

    if (!dragging && !dropping) {
      end.x = Math.min(W - 25, Math.max(25, end.x));
      end.y = Math.min(H - 220, Math.max(35, end.y));
    }
  }

  function updateCardTransform() {
    const end = pts[N];

    // Kecepatan perpindahan kartu per frame
    const vx = end.x - end.px;
    const vy = end.y - end.py;

    // Saat di-drag (dipegang): kartu tetap tegak natural dengan delay inersia lembut
    // Saat dilepas (bebas): berayun seperti pendulum nyata yang sangat halus
    let targetAngle = 0;
    if (dragging) {
      // Hanya sedikit inersia gerakan (-vx), diam = tegak lurus
      targetAngle = Math.max(-12, Math.min(12, -vx * 1.15));
    } else {
      const swingDx = end.x - W / 2;
      const swingDy = Math.max(60, end.y - topY);
      const pendulumAngle = Math.atan2(swingDx, swingDy) * (180 / Math.PI) * 0.4;
      // Angin tipis: kartu tidak pernah benar-benar diam/kaku
      const idle = Math.sin(performance.now() * 0.00072) * 2.4
                 + Math.sin(performance.now() * 0.00131) * 1.0;
      targetAngle = Math.max(-18, Math.min(18, pendulumAngle - vx * 0.9 + idle));
    }

    // Ayunan pegas pendulum dengan delay dan redaman super smooth
    cardAngleVel += (targetAngle - cardAngle) * 0.085;
    cardAngleVel *= 0.9;
    cardAngle += cardAngleVel;

    // Efek 3D tilt halus dengan delay elegan
    const targetTiltY = Math.max(-14, Math.min(14, -vx * 2.2));
    tiltY += (targetTiltY - tiltY) * 0.1;

    const targetTiltX = Math.max(-10, Math.min(10, vy * 1.6));
    tiltX += (targetTiltX - tiltX) * 0.1;

    // Kunci posisi titik putar kartu tepat pada ujung tali pts[N]
    card.style.transformOrigin = "50% 0px";
    card.style.transform = `translate3d(${end.x.toFixed(2)}px,${end.y.toFixed(2)}px,0) translate(-50%,0px) rotateZ(${cardAngle.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) rotateX(${tiltX.toFixed(2)}deg)`;

    // Efek kilau holografik dinamis mengikuti sudut kartu
    card.style.setProperty("--sheen-x", `${(50 + cardAngle * 2.2).toFixed(1)}%`);
    card.style.setProperty("--sheen-y", `${(45 - tiltX * 2.2).toFixed(1)}%`);
  }

  /* ---- rantai ---- */
  const LINK_GAP = 7.4;   // jarak antar mata rantai (overlap biar kelihatan menyambung)
  const LINK_RX = 5.6;    // setengah panjang link
  const LINK_RY = 3.4;    // setengah lebar link

  function mixColor(t) {
    const r = Math.round(124 + (34 - 124) * t);
    const g = Math.round(92 + (227 - 92) * t);
    const b = Math.round(255 + (192 - 255) * t);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  function drawLink(x, y, ang, i, prog) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(ang + (i % 2 ? Math.PI / 2 : 0));
    ctx.beginPath();
    ctx.ellipse(0, 0, LINK_RX, LINK_RY, 0, 0, Math.PI * 2);
    ctx.strokeStyle = mixColor(prog);
    ctx.lineWidth = 1.9;
    ctx.stroke();
    // kilau metal di sisi atas link
    ctx.beginPath();
    ctx.ellipse(0, -0.35, LINK_RX - 1.3, LINK_RY - 0.8, 0, Math.PI * 1.06, Math.PI * 1.94);
    ctx.strokeStyle = "rgba(255,255,255,0.26)";
    ctx.lineWidth = 0.85;
    ctx.stroke();
    ctx.restore();
  }

  function drawCord() {
    ctx.clearRect(0, 0, W, H);

    const top = pts[0];
    const end = pts[N];

    /* Rantai mengikuti kurva halus */
    const poly = [{ x: top.x, y: top.y }];
    for (let i = 1; i < N; i++) {
      const c = pts[i];
      const s = poly[poly.length - 1];
      const ex = (pts[i].x + pts[i + 1].x) / 2;
      const ey = (pts[i].y + pts[i + 1].y) / 2;
      for (let k = 1; k <= 6; k++) {
        const t = k / 6, mt = 1 - t;
        poly.push({
          x: mt * mt * s.x + 2 * mt * t * c.x + t * t * ex,
          y: mt * mt * s.y + 2 * mt * t * c.y + t * t * ey
        });
      }
    }
    poly.push({ x: end.x, y: end.y });

    // Bayangan lembut di bawah rantai
    ctx.save();
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(poly[0].x, poly[0].y);
    for (let i = 1; i < poly.length; i++) ctx.lineTo(poly[i].x, poly[i].y);
    ctx.strokeStyle = "rgba(70,45,160,0.20)";
    ctx.lineWidth = 9;
    ctx.stroke();
    ctx.restore();

    // Mata rantai bergantian sepanjang jalur
    let carry = 0, idx = 0;
    for (let i = 1; i < poly.length; i++) {
      const a = poly[i - 1], b = poly[i];
      const dx = b.x - a.x, dy = b.y - a.y;
      const len = Math.hypot(dx, dy) || 0.0001;
      const ang = Math.atan2(dy, dx);
      let t = carry;
      while (t <= len) {
        const f = t / len;
        drawLink(a.x + dx * f, a.y + dy * f, ang, idx, (i - 1 + f) / (poly.length - 1));
        idx++;
        t += LINK_GAP;
      }
      carry = t - len;
    }

    /* Mount jangkar atas */
    const gTop = ctx.createRadialGradient(top.x, top.y, 1, top.x, top.y, 22);
    gTop.addColorStop(0, "rgba(34,227,192,0.34)");
    gTop.addColorStop(1, "rgba(34,227,192,0)");
    ctx.fillStyle = gTop;
    ctx.beginPath();
    ctx.arc(top.x, top.y, 22, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.translate(top.x, top.y);
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(-14, -6, 28, 12, 5);
    else ctx.rect(-14, -6, 28, 12);
    ctx.fillStyle = "#0b0620";
    ctx.fill();
    ctx.strokeStyle = "rgba(124,92,255,0.7)";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, 3.4, 0, Math.PI * 2);
    ctx.strokeStyle = "#22e3c0";
    ctx.lineWidth = 1.6;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 1.3, 0, Math.PI * 2);
    ctx.fillStyle = "#22e3c0";
    ctx.fill();
    ctx.restore();

    /* Ring konektor di ujung tali */
    ctx.save();
    ctx.translate(end.x, end.y);
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#0b0620";
    ctx.fill();
    ctx.strokeStyle = "rgba(34,227,192,0.9)";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#22e3c0";
    ctx.shadowColor = "#22e3c0";
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.restore();
  }

  /* Fisika tali cuma dihitung saat kartu kelihatan — hemat frame buat halaman */
  let visible = true;
  let lastFrameT = 0;

  function frame() {
    raf = null;
    if (!visible) return;
    const now = performance.now();
    const dt = lastFrameT ? Math.min(64, now - lastFrameT) : 16.7;
    lastFrameT = now;
    if (dropping) {
      const t = Math.min(1, (now - dropStart) / DROP_MS);
      // ease-out: turun cepat lalu melambat halus sebelum ayunan tali
      const e = 1 - Math.pow(1 - t, 3);
      anchorY = DROP_FROM + (topY - DROP_FROM) * e;
      if (t >= 1) { anchorY = topY; dropping = false; }
    }
    physics(dt);
    updateCardTransform();
    drawCord();
    raf = requestAnimationFrame(frame);
  }

  function localPoint(e) {
    const r = wrap.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  card.addEventListener("pointerdown", e => {
    dragging = true;
    card.classList.add("drag");
    card.setPointerCapture(e.pointerId);
    const p = localPoint(e);
    const end = pts[N];
    grab = { x: end.x - p.x, y: end.y - p.y };
    dragTarget.x = end.x;
    dragTarget.y = end.y;
    vel = { x: 0, y: 0 };
  });

  card.addEventListener("pointermove", e => {
    if (!dragging) return;
    const p = localPoint(e);
    dragTarget.x = Math.min(W - 30, Math.max(30, p.x + grab.x));
    dragTarget.y = Math.min(H - 210, Math.max(35, p.y + grab.y));
  });

  function release() {
    if (!dragging) return;
    dragging = false;
    card.classList.remove("drag");
    const end = pts[N];
    const clamp = (v, max) => Math.max(-max, Math.min(max, v * 1.35));
    end.px = end.x - clamp(vel.x, 22);
    end.py = end.y - clamp(vel.y, 18);
  }
  card.addEventListener("pointerup", release);
  card.addEventListener("pointercancel", release);

  addEventListener("resize", build);

  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    if (visible && raf == null) frame();
  }, { rootMargin: "150px" }).observe(wrap);

  build();
  cancelAnimationFrame(raf);
  frame();

  /* Drop-in dipicu saat loading screen selesai (body.hero-ready) */
  const onReady = () => {
    if (document.body.classList.contains("hero-ready")) startDrop();
  };
  new MutationObserver(onReady).observe(document.body, {
    attributes: true,
    attributeFilter: ["class"]
  });
  onReady();
})();

/* =========================================================
   4. QR DI KARTU ID
   ========================================================= */
(function qr() {
  const el = $("#qrCanvas");
  if (!el || typeof QRCode === "undefined") return;
  const url = QR_URL || location.href;
  new QRCode(el, {
    text: url,
    width: 200,
    height: 200,
    colorDark: "#070310",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.M
  });
})();

/* =========================================================
   5. TYPING EFFECT — role di hero
   ========================================================= */
(function typing() {
  const el = $("#typedRole");
  if (!el) return;
  const roles = [
    "Web Developer",
    "Mobile Developer",
    "UI Crafter",
    "Laravel Enthusiast"
  ];
  let ri = 0, ci = 0, dir = 1;

  (function tick() {
    const word = roles[ri];
    el.textContent = word.slice(0, ci);
    if (dir === 1) {
      if (ci < word.length) ci++;
      else { dir = -1; setTimeout(tick, 1500); return; }
    } else {
      if (ci > 0) ci--;
      else { dir = 1; ri = (ri + 1) % roles.length; }
    }
    setTimeout(tick, dir === 1 ? 70 : 38);
  })();
})();

/* =========================================================
   6. RENDER — tech, skill bars, projects, certificates
   ========================================================= */
function renderTech() {
  const box = $("#techGrid");
  if (!box) return;
  box.innerHTML = TECH.map(([name, kind], i) => `
    <div class="tech" style="--i:${i}">
      <div class="tech-icon">${TECH_LOGOS[name] || ""}</div>
      <b>${name}</b>
      <span>${kind}</span>
    </div>
  `).join("");
}

function renderBars() {
  const box = $("#skillBars");
  if (!box) return;
  box.innerHTML = SKILLS.map(([name, val], j) => `
    <div class="bar-row" style="--j:${j}">
      <div class="bar-head">
        <span class="bar-title">
          <i class="bar-ico">${SKILL_LOGOS[name] || ""}</i>
          ${name}
        </span>
        <b>${val}%</b>
      </div>
      <div class="bar-track"><i class="bar-fill" data-val="${val}"></i></div>
    </div>
  `).join("");
  observeBars();
}

function renderProjects() {
  const grid = $("#projectGrid");
  const filters = $("#filters");
  if (!grid || !filters) return;

  const cats = [
    ["all", L("Semua", "All")],
    ["web", "Web"],
    ["mobile", "Mobile"]
  ];

  if (!filters.children.length) {
    filters.innerHTML = cats.map(([k, label], i) =>
      `<button type="button" class="filter${i === 0 ? " active" : ""}" data-cat="${k}">${label}</button>`
    ).join("");
    filters.addEventListener("click", e => {
      const btn = e.target.closest(".filter");
      if (!btn) return;
      $$(".filter", filters).forEach(b => b.classList.toggle("active", b === btn));
      filterProjects(btn.dataset.cat);
    });
  } else {
    const all = filters.querySelector('[data-cat="all"]');
    if (all) all.textContent = L("Semua", "All");
  }

  grid.innerHTML = Object.entries(PROJECTS).map(([key, p]) => {
    const desc = lang === "en" ? p.desc_en : p.desc_id;
    const initials = p.title.split(" ").filter(w => /[A-Za-z]/.test(w[0])).map(w => w[0].toUpperCase()).slice(0, 2).join("");
    return `
      <article class="pcard" data-cat="${p.cat}">
        <div class="pcover"><b>${initials}</b><span class="ptag">${p.cat}</span></div>
        <div class="pbody">
          <h3>${p.title}</h3>
          <p>${desc}</p>
          <ul class="chips">${p.tech.map(x => `<li>${x}</li>`).join("")}</ul>
          <button type="button" class="popen" data-open="${key}">${L("Lihat detail", "View detail")} →</button>
        </div>
      </article>`;
  }).join("");

  const active = filters.querySelector(".filter.active");
  filterProjects(active ? active.dataset.cat : "all");
}

function filterProjects(cat) {
  $$(".pcard").forEach(card => {
    const show = cat === "all" || card.dataset.cat === cat;
    card.style.display = show ? "flex" : "none";
  });
}

function renderCerts() {
  const grid = $("#certGrid");
  if (!grid) return;
  grid.innerHTML = CERTS.map((c, i) => `
    <article class="cert" data-cert="${i}" tabindex="0" role="button" aria-label="${c.title}">
      <div class="cert-thumb">
        ${c.src
          ? `<img src="${c.src}" alt="Sertifikat ${c.title}" loading="lazy" decoding="async">`
          : `<span class="cert-empty">${c.title}</span>`}
        <span class="cert-zoom">PREVIEW</span>
      </div>
      <div class="cert-body">
        <span class="badge-ico">CERT-${String(i + 1).padStart(2, "0")}</span>
        <h3>${c.title}</h3>
        <p>${c.issuer}</p>
        <time>${c.date}</time>
      </div>
    </article>
  `).join("");
}

/* =========================================================
   7. REVEAL, COUNTER, SKILL BAR
   ========================================================= */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add("in");
      revealObserver.unobserve(en.target);
    }
  });
}, { threshold: 0.08, rootMargin: "0px 0px -18% 0px" });

$$(".reveal").forEach(el => revealObserver.observe(el));

function countTo(el, to, suffix = "") {
  const dur = 1200;
  const start = performance.now();
  function frame(now) {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(to * eased) + suffix;
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const countObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target;
    countTo(el, Number(el.dataset.to) || 0, el.dataset.suffix || "");
    countObserver.unobserve(el);
  });
}, { threshold: 0.5 });

$$(".count").forEach(el => countObserver.observe(el));

function observeBars() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      // Delay halus agar bar mulai terisi setelah bar-row selesai fade in
      setTimeout(() => {
        el.style.width = (el.dataset.val || 0) + "%";
      }, 350);
      obs.unobserve(el);
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -30px 0px" });
  $$(".bar-fill").forEach(el => { el.style.width = "0%"; obs.observe(el); });
}

/* =========================================================
   8. MOBILE MENU + BACK TO TOP + CURSOR
   ========================================================= */
(function chrome() {
  const menu = $("#navMenu");
  const toggle = $("#menuToggle");
  toggle.addEventListener("click", () => menu.classList.toggle("open"));
  $$("a", menu).forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));

  const toTop = $("#toTop");
  const scrollBar = $("#scrollBar");
  let targetScroll = 0, currentScroll = 0, scrollTicking = false;

  function updateScrollBar() {
    currentScroll += (targetScroll - currentScroll) * 0.14;
    if (scrollBar) {
      scrollBar.style.transform = `scaleX(${currentScroll.toFixed(4)})`;
    }
    if (Math.abs(targetScroll - currentScroll) > 0.0005) {
      requestAnimationFrame(updateScrollBar);
    } else {
      currentScroll = targetScroll;
      if (scrollBar) scrollBar.style.transform = `scaleX(${currentScroll.toFixed(4)})`;
      scrollTicking = false;
    }
  }

  // Smooth wheel scrolling untuk halaman
  let pageTargetY = window.scrollY;
  let pageCurrentY = window.scrollY;
  let isPageScrolling = false;
  let pageScrollRaf = null;

  function stepPageScroll() {
    const diff = pageTargetY - pageCurrentY;
    if (Math.abs(diff) > 0.5) {
      pageCurrentY += diff * 0.11;
      window.scrollTo(0, pageCurrentY);
      pageScrollRaf = requestAnimationFrame(stepPageScroll);
    } else {
      pageCurrentY = pageTargetY;
      window.scrollTo(0, pageCurrentY);
      isPageScrolling = false;
    }
  }

  addEventListener("wheel", e => {
    // Jangan ganggu scroll di dalam modal, terminal, atau editor
    if (e.ctrlKey || e.target.closest(".modal, .term-body, .ed-code, pre")) return;
    if (Math.abs(e.deltaY) < 1) return;

    e.preventDefault();
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - innerHeight);
    if (!isPageScrolling) {
      pageCurrentY = window.scrollY;
      pageTargetY = window.scrollY;
    }
    pageTargetY = Math.max(0, Math.min(maxScroll, pageTargetY + e.deltaY));
    if (!isPageScrolling) {
      isPageScrolling = true;
      cancelAnimationFrame(pageScrollRaf);
      pageScrollRaf = requestAnimationFrame(stepPageScroll);
    }
  }, { passive: false });

  function onScroll() {
    if (!isPageScrolling) {
      pageCurrentY = window.scrollY;
      pageTargetY = window.scrollY;
    }
    toTop.classList.toggle("show", scrollY > 420);
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    targetScroll = Math.min(1, Math.max(0, scrollY / maxScroll));
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(updateScrollBar);
    }
  }
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => {
    pageTargetY = 0;
    scrollTo({ top: 0, behavior: "smooth" });
  });

  // Custom Cursor: titik dan frame cincin selalu 100% konsentris dan sinkron.
  // Transform translate3d diaplikasikan pada kontainer fixed, sedangkan efek
  // scale (hot / active klik) di-handle oleh pseudo-element ::after sehingga
  // koordinat translate TIDAK PERNAH terdistorsi atau bergeser saat klik ditahan.
  const cur = $("#cursor");
  const dot = $("#cursorDot");
  if (cur && dot && matchMedia("(hover:hover)").matches) {
    let seen = false, down = false;

    // Titik tengah mengikuti pointer apa adanya. Cincin di-lerp menuju posisi
    // pointer tiap frame, jadi selalu tertinggal sedikit lalu menyusul halus.
    const follow = 0.18;                       // 0 = tidak bergerak, 1 = nempel instan
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let rx = 0, ry = 0;                        // posisi cincin saat ini
    let tx = 0, ty = 0;                        // target posisi pointer
    let rafId = 0, lastT = 0;

    const place = (el, x, y) => {
      el.style.transform = "translate3d(" + x + "px," + y + "px,0)";
    };

    const step = t => {
      rafId = 0;
      const dt = lastT ? Math.min(t - lastT, 50) : 16.7;
      lastT = t;
      // easing dinormalisasi ke 60fps supaya lag-nya sama di layar 60/120/144Hz
      const k = still ? 1 : 1 - Math.pow(1 - follow, dt / 16.7);
      rx += (tx - rx) * k;
      ry += (ty - ry) * k;
      if (Math.abs(tx - rx) < 0.1 && Math.abs(ty - ry) < 0.1) {
        rx = tx; ry = ty;
        place(cur, rx, ry);
        lastT = 0;
      } else {
        place(cur, rx, ry);
        rafId = requestAnimationFrame(step);
      }
    };

    const queueRing = () => {
      if (!rafId) rafId = requestAnimationFrame(step);
    };

    addEventListener("pointermove", e => {
      const x = e.clientX, y = e.clientY;
      if (!seen) {
        seen = true;
        cur.style.opacity = "1";
        dot.style.opacity = "1";
        rx = x; ry = y;                        // cincin mulai di posisi pointer, bukan terbang dari 0,0
        place(cur, rx, ry);
      }
      place(dot, x, y);
      tx = x; ty = y;
      queueRing();
    }, { passive: true });

    addEventListener("pointerdown", e => {
      down = true;
      cur.classList.add("active");
      if (e && e.clientX !== undefined) {
        if (!seen) {
          seen = true;
          cur.style.opacity = "1";
          dot.style.opacity = "1";
          rx = e.clientX; ry = e.clientY;
          place(cur, rx, ry);
        }
        place(dot, e.clientX, e.clientY);
        tx = e.clientX; ty = e.clientY;
        queueRing();
      }
    }, { passive: true });

    const release = e => {
      down = false;
      cur.classList.remove("active");
      if (e && e.clientX !== undefined) {
        const topEl = document.elementFromPoint(e.clientX, e.clientY);
        if (!topEl || !topEl.closest("a,button,.cert,.badge,input,textarea,.lang-btn,[role='button']")) {
          cur.classList.remove("hot");
          dot.classList.remove("hot");
        }
      }
    };
    addEventListener("pointerup", release, { passive: true });
    addEventListener("pointercancel", release, { passive: true });

    // Saat tombol masih ditekan (drag kartu), jangan sembunyikan kursor
    // walau pointer sempat keluar dari jendela.
    document.addEventListener("pointerleave", () => {
      if (down) return;
      cur.style.opacity = "0";
      dot.style.opacity = "0";
    });
    document.addEventListener("pointerenter", () => {
      if (seen) {
        cur.style.opacity = "1";
        dot.style.opacity = "1";
      }
    });

    // Mencegah browser drag bawaan (text/image drag) yang membekukan pointermove saat klik kiri ditahan
    addEventListener("dragstart", e => {
      e.preventDefault();
    });

    $$("a,button,.cert,.badge,input,textarea,.lang-btn,[role='button']").forEach(el => {
      el.addEventListener("pointerenter", () => {
        cur.classList.add("hot");
        dot.classList.add("hot");
      });
      el.addEventListener("pointerleave", () => {
        if (down) return;
        cur.classList.remove("hot");
        dot.classList.remove("hot");
      });
    });
  }

  $("#year").textContent = new Date().getFullYear();
})();

/* =========================================================
   9. PROJECT MODAL
   ========================================================= */
(function projectModal() {
  const modal = $("#projectModal");
  let lastFocus = null;

  function open(key) {
    const p = PROJECTS[key];
    if (!p) return;
    const desc = lang === "en" ? p.desc_en : p.desc_id;
    const points = lang === "en" ? p.points_en : p.points_id;
    $("#pmCover").textContent = p.title.split(" ").map(w => w[0]).join("").slice(0, 3).toUpperCase();
    $("#pmTitle").textContent = p.title;
    $("#pmMeta").textContent = p.tech.join(" · ");
    $("#pmDesc").textContent = desc;
    $("#pmPoints").innerHTML = points.map(x => `<li>${x}</li>`).join("");
    $("#pmLinks").innerHTML = (p.links || []).map(([label, url]) =>
      `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`
    ).join("");
    lastFocus = document.activeElement;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    $("#pmClose").focus();
  }

  function close() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-open]");
    if (btn) open(btn.dataset.open);
  });
  $("#pmClose").addEventListener("click", close);
  modal.addEventListener("click", e => { if (e.target === modal) close(); });
  addEventListener("keydown", e => { if (e.key === "Escape") close(); });
})();

/* =========================================================
   10. CERTIFICATE MODAL
   ========================================================= */
(function certModal() {
  const modal = $("#certModal");

  function open(i) {
    const c = CERTS[i];
    if (!c) return;
    $("#cmTitle").textContent = c.title;
    $("#cmMeta").textContent = `${c.issuer} · ${c.date}`;
    $("#cmPreview").innerHTML = c.src
      ? `<img src="${c.src}" alt="${c.title}" style="max-height:340px;border-radius:8px">`
      : L(
          "Preview sertifikat belum diisi.<br>Taruh gambar di <code>img/</code> lalu isi field <code>src</code> di array CERTS (js/script.js).",
          "No certificate preview yet.<br>Put an image in <code>img/</code> and fill the <code>src</code> field in the CERTS array (js/script.js)."
        );
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function close() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", e => {
    const card = e.target.closest("[data-cert]");
    if (card) open(Number(card.dataset.cert));
  });
  document.addEventListener("keydown", e => {
    const card = document.activeElement;
    if (e.key === "Enter" && card && card.dataset && card.dataset.cert) open(Number(card.dataset.cert));
  });
  $("#cmClose").addEventListener("click", close);
  modal.addEventListener("click", e => { if (e.target === modal) close(); });
  addEventListener("keydown", e => { if (e.key === "Escape") close(); });
})();

/* =========================================================
   11. GITHUB LIVE STATS
   ========================================================= */
(function github() {
  const repos = $("#ghRepos");
  const follow = $("#ghFollow");
  const note = $("#ghNote");
  if (!GH_USER) {
    note.textContent = "atur GH_USER di js/script.js";
    return;
  }

  fetch(`https://api.github.com/users/${encodeURIComponent(GH_USER)}`)
    .then(r => { if (!r.ok) throw new Error("http " + r.status); return r.json(); })
    .then(d => {
      repos.textContent = d.public_repos ?? "—";
      follow.textContent = d.followers ?? "—";
      note.textContent = "@" + d.login;
    })
    .catch(() => {
      repos.textContent = "—";
      follow.textContent = "—";
      note.textContent = I18N[lang].gh_fail;
    });
})();

/* =========================================================
   12. INTERACTIVE TERMINAL
   ========================================================= */
(function terminal() {
  const out = $("#termOut");
  const input = $("#termIn");
  const body = $("#termBody");
  const chips = $("#termChips");
  if (!out || !input) return;
  const history = [];
  let hi = 0;

  const print = (text, cls = "") => {
    const d = document.createElement("div");
    d.className = "tl " + cls;
    d.textContent = text;
    out.appendChild(d);
    body.scrollTop = body.scrollHeight;
    return d;
  };

  const link = (label, url) => {
    const d = print(label + " ");
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = url;
    d.appendChild(a);
  };

  const scrollToId = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const cmds = {
    help: () => print(I18N[lang].tm_help, "hd"),
    about: () => {
      print(L("Kevin Qiendra Syahputra — mahasiswa & developer.", "Kevin Qiendra Syahputra — student & developer."), "ok");
      print(L("Fokus: web, mobile, dan sistem informasi.", "Focus: web, mobile, and information systems."));
    },
    whoami: () => print("kevin — " + L("Web & Mobile Developer", "Web & Mobile Developer"), "ok"),
    skills: () => {
      TECH.forEach(([n, k]) => print(`  [✔] ${n}  (${k})`));
      print("→ " + L("sedang dipelajari", "currently learning") + ": " + SKILLS.map(s => s[0]).join(", "), "hd");
    },
    projects: () => {
      Object.entries(PROJECTS).forEach(([k, p], i) =>
        print(`${i + 1}. ${p.title}  [${p.tech.join(", ")}]  → open ${k}`)
      );
    },
    open: a => {
      const k = (a[0] || "").toLowerCase();
      if (!PROJECTS[k]) {
        print("usage: open <" + Object.keys(PROJECTS).join("|") + ">", "err");
        return;
      }
      print("opening " + PROJECTS[k].title + " ...", "ok");
      scrollToId("projects");
      setTimeout(() => document.querySelector(`[data-open="${k}"]`)?.click(), 420);
    },
    certs: () => CERTS.forEach(c => print(`  ★ ${c.title} — ${c.issuer} (${c.date})`)),
    contact: () => {
      print("email: " + MY_EMAIL, "ok");
      link("github:", "https://github.com/" + (GH_USER || "kevinqiendra"));
      link("instagram:", "https://www.instagram.com/kepink4hh/");
    },
    github: () => {
      print("user: " + GH_USER, "hd");
      print("repo: " + $("#ghRepos").textContent + "  |  followers: " + $("#ghFollow").textContent);
      link("open:", "https://github.com/" + (GH_USER || "kevinqiendra"));
    },
    lang: () => {
      setLang(lang === "id" ? "en" : "id");
      print(I18N[lang].tm_lang, "ok");
      print(L("Bahasa: Indonesia", "Language: English"), "hd");
    },
    goto: a => {
      const id = (a[0] || "").toLowerCase();
      if (!document.getElementById(id)) return print(L("section tidak ada: ", "no such section: ") + id, "err");
      scrollToId(id);
      print("→ " + id, "ok");
    },
    ls: () => print("about  skills  education  projects  certs  contact  terminal", "hd"),
    date: () => print(new Date().toString()),
    clear: () => out.replaceChildren(),
    sudo: () => print("kevin is not in the sudoers file. This incident will be reported 😄", "err")
  };

  function run(raw) {
    const line = raw.trim();
    if (!line) return;
    print("kevin@portfolio:~$ " + line, "cmd");
    history.push(line);
    hi = history.length;
    const [c, ...args] = line.split(/\s+/);
    const key = c.toLowerCase();
    if (key === "clear") { cmds.clear(); return; }
    if (Object.hasOwn(cmds, key)) cmds[key](args);
    else print(c + ": " + I18N[lang].tm_unknown, "err");
  }

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") { run(input.value); input.value = ""; }
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (hi > 0) input.value = history[--hi];
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (hi < history.length - 1) input.value = history[++hi];
      else { hi = history.length; input.value = ""; }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const matches = Object.keys(cmds).filter(k => k.startsWith(input.value.toLowerCase()));
      if (matches.length === 1) input.value = matches[0];
      else if (matches.length > 1) print(matches.join("  "), "hd");
    } else if (e.key.toLowerCase() === "l" && e.ctrlKey) {
      e.preventDefault();
      cmds.clear();
    }
  });

  body.addEventListener("click", () => {
    if (!getSelection().toString()) input.focus({ preventScroll: true });
  });

  ["help", "about", "skills", "projects", "certs", "contact", "github", "clear"].forEach(name => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = name;
    b.addEventListener("click", () => run(name));
    chips.appendChild(b);
  });

  print("KEVIN-OS v1.0 — " + I18N[lang].tm_welcome, "ok");
})();

/* =========================================================
   13. CONTACT FORM
   ========================================================= */
(function contact() {
  const form = $("#contactForm");
  if (!form) return;
  const note = $("#formNote");
  const btn = $("#sendBtn");

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || !email || !message) {
      note.textContent = I18N[lang].tm_fill;
      return;
    }

    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(`Portfolio contact — ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
      location.href = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;
      note.textContent = I18N[lang].tm_noformat;
      return;
    }

    btn.disabled = true;
    const original = btn.textContent;
    btn.textContent = I18N[lang].tm_sending;
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name, email, message,
          subject: `Portfolio contact — ${name}`
        })
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "failed");
      note.textContent = I18N[lang].tm_sent;
      form.reset();
    } catch (err) {
      note.textContent = "gagal mengirim: " + err.message;
    } finally {
      btn.disabled = false;
      btn.textContent = original;
    }
  });
})();

/* =========================================================
   14. DOKUMENTASI PENGALAMAN — dropdown foto + lightbox
   ========================================================= */
const EXP_VIEW = { g: 0, i: 0 };

function renderExpDocs() {
  const items = $$("#experience .tl-item");
  if (!items.length) return;

  items.forEach((item, gi) => {
    const data = EXP_DOCS[gi];
    if (!data || !Array.isArray(data.photos) || !data.photos.length) return;

    const body = item.querySelector(".tl-body");
    if (!body || body.querySelector(".tl-doc")) return;

    const panelId = "expDoc" + (gi + 1);
    const wrap = document.createElement("div");
    wrap.className = "tl-doc";
    wrap.innerHTML = `
      <button type="button" class="tl-more" aria-expanded="false" aria-controls="${panelId}">
        <span class="tl-more-txt">${L("Selengkapnya", "View details")}</span>
        <i class="tl-more-ico" aria-hidden="true"></i>
      </button>
      <div class="tl-doc-panel" id="${panelId}" role="region">
        <div class="tl-doc-inner">
          <p class="tl-doc-note">${lang === "en" ? data.note_en : data.note_id}</p>
          <div class="tl-doc-grid">
            ${data.photos.map((p, pi) => {
              const cap = lang === "en" ? p.cap_en : p.cap_id;
              return `<figure class="doc-tile" data-g="${gi}" data-i="${pi}" style="--i:${pi}" tabindex="0" role="button" aria-label="${cap}">
                <img src="${p.src}" alt="${cap}" loading="lazy" decoding="async">
                <figcaption>${cap}</figcaption>
              </figure>`;
            }).join("")}
          </div>
        </div>
      </div>`;
    body.appendChild(wrap);
  });
}

function syncExpDocs() {
  if (!$("#experience .tl-doc")) { renderExpDocs(); return; }
  $$("#experience .tl-item").forEach((item, gi) => {
    const data = EXP_DOCS[gi];
    if (!data) return;
    const note = item.querySelector(".tl-doc-note");
    if (note) note.textContent = lang === "en" ? data.note_en : data.note_id;
    $$(".doc-tile", item).forEach(tile => {
      const p = data.photos[Number(tile.dataset.i)];
      if (!p) return;
      const cap = lang === "en" ? p.cap_en : p.cap_id;
      tile.setAttribute("aria-label", cap);
      const fig = tile.querySelector("figcaption");
      if (fig) fig.textContent = cap;
      const img = tile.querySelector("img");
      if (img) img.alt = cap;
    });
    const btn = item.querySelector(".tl-more");
    if (btn) {
      const open = item.classList.contains("doc-open");
      btn.querySelector(".tl-more-txt").textContent = open ? L("Tutup", "Close") : L("Selengkapnya", "View details");
    }
  });
}

function toggleExpDoc(item, open) {
  item.classList.toggle("doc-open", open);
  const btn = item.querySelector(".tl-more");
  if (!btn) return;
  btn.setAttribute("aria-expanded", open ? "true" : "false");
  btn.querySelector(".tl-more-txt").textContent = open ? L("Tutup", "Close") : L("Selengkapnya", "View details");
}

(function expDocs() {
  if (!$("#experience")) return;

  document.addEventListener("click", e => {
    const btn = e.target.closest("#experience .tl-more");
    if (btn) {
      const item = btn.closest(".tl-item");
      toggleExpDoc(item, !item.classList.contains("doc-open"));
      return;
    }
    const tile = e.target.closest("#experience .doc-tile");
    if (tile) {
      openDoc(Number(tile.dataset.g), Number(tile.dataset.i));
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const tile = document.activeElement;
    if (!tile || !tile.classList || !tile.classList.contains("doc-tile")) return;
    e.preventDefault();
    openDoc(Number(tile.dataset.g), Number(tile.dataset.i));
  });

  const modal = $("#docModal");
  if (!modal) return;
  const img = $("#docImg");
  const cap = $("#docCap");
  const count = $("#docCount");
  const prev = $("#docPrev");
  const next = $("#docNext");
  let lastFocus = null;

  function paint() {
    const data = EXP_DOCS[EXP_VIEW.g];
    if (!data) return;
    const photo = data.photos[EXP_VIEW.i];
    if (!photo) return;
    img.src = photo.src;
    const label = lang === "en" ? photo.cap_en : photo.cap_id;
    img.alt = label;
    cap.textContent = label;
    count.textContent = `${String(EXP_VIEW.i + 1).padStart(2, "0")} / ${String(data.photos.length).padStart(2, "0")}`;
    const multi = data.photos.length > 1;
    prev.hidden = !multi;
    next.hidden = !multi;
  }

  function step(dir) {
    const data = EXP_DOCS[EXP_VIEW.g];
    if (!data) return;
    const n = data.photos.length;
    EXP_VIEW.i = (EXP_VIEW.i + dir + n) % n;
    paint();
  }

  window.openDoc = function (g, i) {
    EXP_VIEW.g = g;
    EXP_VIEW.i = i;
    paint();
    lastFocus = document.activeElement;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    $("#docClose").focus();
  };

  function closeDoc() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  $("#docClose").addEventListener("click", closeDoc);
  prev.addEventListener("click", () => step(-1));
  next.addEventListener("click", () => step(1));
  modal.addEventListener("click", e => { if (e.target === modal) closeDoc(); });
  addEventListener("keydown", e => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeDoc();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });
})();

/* =========================================================
   15. INIT
   ========================================================= */
(function boot() {
  const langBtn = $("#langBtn");
  if (langBtn) langBtn.addEventListener("click", () => setLang(lang === "id" ? "en" : "id"));
  applyLang();
})();
