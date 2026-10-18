import { useState, useCallback, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import CartDrawer from "./components/CartDrawer";
import Toast from "./components/Toast";
import Footer from "./components/Footer";

export default function App() {
  const [keranjang, setKeranjang] = useState(() => {
    try {
      const dataTersimpan = localStorage.getItem("genz_keranjang");
      return dataTersimpan ? JSON.parse(dataTersimpan) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [kataKunci, setKataKunci] = useState("");
  const [kategori, setKategori] = useState("Semua");
  useEffect(() => {
    localStorage.setItem("genz_keranjang", JSON.stringify(keranjang));
  }, [keranjang]);

  const handleTambahKeranjang = useCallback((produk) => {
    setKeranjang((prev) => {
      const idx = prev.findIndex((item) => item.id === produk.id);
      if (idx !== -1) {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], qty: updated[idx].qty + 1 };
        return updated;
      }
      return [...prev, { ...produk, qty: 1 }];
    });
    setToast(produk);
  }, []);

  const handleHapusKeranjang = useCallback((id) => {
    setKeranjang((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleUbahQty = useCallback((id, delta) => {
    setKeranjang((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item,
        )
        .filter((item) => item.qty > 0),
    );
  }, []);

  const totalItem = keranjang.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900">
      <Navbar
        totalItem={totalItem}
        onBukaKeranjang={() => setIsCartOpen(true)}
        kataKunci={kataKunci}
        onCari={setKataKunci}
        kategori={kategori}
        onPilihKategori={setKategori}
      />
      <Hero />
      <ProductList
        onTambahKeranjang={handleTambahKeranjang}
        kataKunci={kataKunci}
        onResetCari={() => {
          setKataKunci("");
          setKategori("Semua");
        }}
        kategori={kategori}
        onPilihKategori={setKategori}
      />
      <Footer onPilihKategori={setKategori} />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={keranjang}
        onHapusItem={handleHapusKeranjang}
        onUbahQty={handleUbahQty}
      />
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
