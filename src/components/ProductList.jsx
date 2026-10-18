import { useState } from "react";
import { Plus, Shirt, Sparkles, ShoppingBag, LayoutGrid, SearchX } from "lucide-react";

export const PRODUK_LIST = [
  {
    id: 1,
    nama: "Oversized Heavyweight Tee",
    kategori: "Pria",
    harga: 249000,
    rating: 4.8,
    gambar:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    tag: "Terlaris",
  },
  {
    id: 2,
    nama: "Relaxed Fit Linen Shirt",
    kategori: "Pria",
    harga: 379000,
    rating: 4.6,
    gambar:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop",
    tag: "Baru",
  },
  {
    id: 3,
    nama: "Pleated Wide Leg Trousers",
    kategori: "Wanita",
    harga: 429000,
    rating: 4.9,
    gambar:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
    tag: "Eksklusif",
  },
  {
    id: 4,
    nama: "Minimalist Leather Tote",
    kategori: "Aksesoris",
    harga: 519000,
    rating: 4.7,
    gambar:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    tag: "Esensial",
  },
  {
    id: 5,
    nama: "Cargo Utility Pants",
    kategori: "Pria",
    harga: 459000,
    rating: 4.7,
    gambar:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop",
    tag: "Baru",
  },
  {
    id: 6,
    nama: "Cropped Knit Cardigan",
    kategori: "Wanita",
    harga: 389000,
    rating: 4.8,
    gambar:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop",
    tag: "Terlaris",
  },
  {
    id: 7,
    nama: "Canvas Slip-On Sneakers",
    kategori: "Aksesoris",
    harga: 329000,
    rating: 4.5,
    gambar:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop",
    tag: "Esensial",
  },
  {
    id: 8,
    nama: "Bomber Jacket Varsity",
    kategori: "Pria",
    harga: 699000,
    rating: 4.9,
    gambar:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
    tag: "Eksklusif",
  },
  {
    id: 9,
    nama: "Ribbed Knit Beanie",
    kategori: "Aksesoris",
    harga: 129000,
    rating: 4.6,
    gambar:
      "https://images.unsplash.com/photo-1510598969022-c4c6c5d05769?q=80&w=800&auto=format&fit=crop",
    tag: "Esensial",
  },
  {
    id: 10,
    nama: "Washed Denim Overshirt",
    kategori: "Pria",
    harga: 489000,
    rating: 4.7,
    gambar:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop",
    tag: "Baru",
  },
];

const KATEGORI = [
  { label: "Semua", value: "Semua", icon: LayoutGrid },
  { label: "Pria", value: "Pria", icon: Shirt },
  { label: "Wanita", value: "Wanita", icon: Sparkles },
  { label: "Aksesoris", value: "Aksesoris", icon: ShoppingBag },
];

export default function ProductList({
  onTambahKeranjang,
  kataKunci = "",
  onResetCari,
  kategori = "Semua",
  onPilihKategori,
}) {
  const produkTampil = PRODUK_LIST.filter((p) => {
    const cocokKategori =
      kategori === "Semua" || p.kategori === kategori;
    const cocokNama = p.nama.toLowerCase().includes(kataKunci.toLowerCase());
    return cocokKategori && cocokNama;
  });
  return (
    <section
      id="katalog"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200 pb-6 mb-10 gap-4">
        <div>
          <span className="text-xs font-bold tracking-widest text-stone-500 uppercase">
            Katalog 2026
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-stone-950 mt-1">
            Koleksi Pilihan
          </h2>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {KATEGORI.map(({ label, value, icon: Icon }) => (
            <button
              key={value}
              onClick={() => onPilihKategori && onPilihKategori(value)}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-widest border transition cursor-pointer ${
                kategori === value
                  ? "bg-stone-950 text-stone-50 border-stone-950"
                  : "bg-transparent text-stone-500 border-stone-300 hover:border-stone-600 hover:text-stone-800"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>
      </div>
      {produkTampil.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-stone-300 bg-stone-50/50 p-8 my-6">
          <SearchX className="w-10 h-10 text-stone-400 mb-3" />
          <h3 className="text-base font-bold uppercase tracking-wider text-stone-900">
            Produk Tidak Ditemukan
          </h3>
          <p className="text-xs text-stone-500 mt-1 max-w-sm">
            Tidak ada koleksi yang cocok dengan pencarian "{kataKunci}". Coba gunakan kata kunci lain.
          </p>
          <button
            onClick={onResetCari}
            className="mt-6 px-6 py-2.5 bg-stone-950 text-stone-50 text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition cursor-pointer active:scale-95"
          >
            Tampilkan Semua Produk
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-6">
          {produkTampil.map((produk) => (
            <div key={produk.id} className="group flex flex-col h-full">
              <div className="relative aspect-square w-full overflow-hidden bg-stone-100 mb-2">
                <img
                  src={produk.gambar}
                  alt={produk.nama}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-stone-950/90 text-stone-50 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1">
                  {produk.tag}
                </span>
              </div>
              <div className="mb-1">
                <h3 className="text-sm font-bold text-stone-900 group-hover:text-stone-600 transition">
                  {produk.nama}
                </h3>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-sm font-semibold text-stone-950">
                  Rp {produk.harga.toLocaleString("id-ID")}
                </span>
                <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
                  {produk.kategori}
                </span>
              </div>
              <button
                onClick={() => onTambahKeranjang(produk)}
                className="mt-auto pt-4 w-full flex items-center justify-center gap-1.5 border border-stone-900 bg-transparent hover:bg-stone-950 text-stone-950 hover:text-stone-50 py-2.5 text-[11px] font-bold uppercase tracking-wider transition cursor-pointer active:scale-95"
              >
                <Plus className="w-3 h-3 flex-shrink-0" />
                <span className="sm:hidden">Keranjang</span>
                <span className="hidden sm:inline">Tambah Keranjang</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
