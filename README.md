# 🛍️ GENZ-Store — Modern E-Commerce Web Application

Aplikasi web katalog dan toko fashion modern yang dibangun menggunakan **React 19**, **Tailwind CSS v4**, dan **Vite**. Menampilkan antarmuka editorial responsif dengan sistem pencarian real-time, filter kategori, manajemen keranjang persisten, dan integrasi checkout langsung ke WhatsApp.

---

## ✨ Fitur Utama

- **Pencarian Real-Time & Filter Ganda:** Saring produk berdasarkan kategori (Pria, Wanita, Aksesoris) dan kata kunci pencarian secara bersamaan.
- **Empty State Interaktif:** Memberikan tampilan ramah dan tombol reset jika produk yang dicari tidak ditemukan.
- **Keranjang Belanja (Slide-over Cart Drawer):** Penambahan produk, penyesuaian jumlah pesanan (+/-), dan penghapusan item dengan kalkulasi subtotal otomatis.
- **Persistensi Data (`localStorage`):** Keranjang belanja tetap tersimpan rapi meskipun halaman di-refresh atau browser ditutup.
- **Checkout Otomatis ke WhatsApp:** Mengonversi daftar belanjaan menjadi pesan terformat lengkap dengan rincian item, kuantitas, dan total bayar ke nomor WhatsApp admin.
- **Toast Feedback Notification:** Konfirmasi visual instan setiap kali produk berhasil dimasukkan ke keranjang.
- **Desain Editorial & Mobile-First:** Tampilan bersih, tipografi tegas, dan transisi halus pada seluruh ukuran layar.

---

## 🛠️ Tech Stack

- **Framework:** React 19
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Storage:** Web Storage API (`localStorage`)

---

## 📂 Struktur Proyek

```text
Genz-store/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigasi sticky, search bar, & badge keranjang
│   │   ├── Hero.jsx          # Carousel editorial hero banner
│   │   ├── ProductList.jsx   # Filter kategori, grid katalog, & empty state
│   │   ├── CartDrawer.jsx    # Slide-over cart & WhatsApp checkout logic
│   │   ├── Toast.jsx         # Notifikasi pop-up penambahan item
│   │   └── Footer.jsx        # Footer informasi dan navigasi bawah
│   ├── App.jsx               # State management (keranjang, pencarian, modal)
│   ├── main.jsx              # Entry point aplikasi React
│   └── index.css             # Konfigurasi Tailwind CSS v4
├── public/                   # Asset gambar banner dan produk
├── index.html                # HTML5 root template
└── package.json              # Dependensi dan scripts
```

---

## 🚀 Cara Menjalankan

1. **Clone repositori:**
   ```bash
   git clone https://github.com/glh304/genz-store.git
   cd genz-store
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:5173` di browser Anda.

4. **Build untuk produksi:**
   ```bash
   npm run build
   ```

---

## 👨‍💻 Pengembang

**Galuh Wibowo**  
Frontend Developer | S1 Sistem Informasi — Universitas Bina Sarana Informatika (UBSI)  
- LinkedIn: [linkedin.com/in/galuh-wibowo](https://www.linkedin.com/in/galuh-wibowo)  
- GitHub: [github.com/glh304](https://github.com/glh304)  
- Portofolio: [glh304.github.io/portofolio-galuh](https://glh304.github.io/portofolio-galuh/)
