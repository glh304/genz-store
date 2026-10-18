export default function Footer({ onPilihKategori }) {
  return (
    <footer className="bg-stone-950 text-stone-400 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <span className="text-2xl font-black tracking-tighter text-stone-50 uppercase">
              GENZ-Store
            </span>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Pakaian kurasi untuk generasi yang tahu apa yang mereka mau.
              Potongan modern, bahan premium, harga masuk akal.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-4">
              Koleksi
            </p>
            <ul className="space-y-2 text-sm">
              {["Semua Produk", "Pria", "Wanita", "Aksesoris"].map((item) => {
                const targetKat = item === "Semua Produk" ? "Semua" : item;
                return (
                  <li key={item}>
                    <button
                      onClick={() => {
                        if (onPilihKategori) onPilihKategori(targetKat);
                        const el = document.getElementById("katalog");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="hover:text-stone-50 transition cursor-pointer text-left"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-4">
              Bantuan
            </p>
            <ul className="space-y-2 text-sm">
              {["Cara Pemesanan", "Pengiriman", "Pengembalian", "Ukuran & Panduan", "Hubungi Kami"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-stone-50 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-600">
            © 2026 GENZ-Store. Semua hak dilindungi.
          </p>
          <div className="flex items-center gap-6 text-xs">
            {["Instagram", "TikTok", "WhatsApp"].map((s) => (
              <a key={s} href="#" className="hover:text-stone-50 transition font-semibold tracking-wider uppercase">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
