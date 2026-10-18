import { useState, useEffect } from "react";
import { ShoppingBag, Search, Menu, X } from "lucide-react";

export default function Navbar({
  totalItem = 0,
  onBukaKeranjang,
  kataKunci,
  onCari,
  kategori = "Semua",
  onPilihKategori,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handlePilihKategori = (kat) => {
    if (onPilihKategori) onPilihKategori(kat);
    const katalogEl = document.getElementById("katalog");
    if (katalogEl) {
      katalogEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navText = scrolled ? "text-stone-600" : "text-stone-300";
  const navTextActive = scrolled
    ? "text-stone-950 border-b border-stone-950 font-bold"
    : "text-stone-50 border-b border-stone-50 font-bold";
  const logoColor = scrolled ? "text-stone-950" : "text-stone-50";
  const iconColor = scrolled ? "text-stone-700" : "text-stone-50";
  const searchBg = scrolled
    ? "bg-stone-100 border-stone-300 text-stone-900 placeholder-stone-400"
    : "bg-white/10 border-white/20 text-stone-100 placeholder-stone-400";
  const cartStyle = scrolled
    ? "border-stone-900 bg-stone-900 hover:bg-stone-800 text-stone-50"
    : "border-white/30 bg-white/10 hover:bg-white/20 text-stone-50 backdrop-blur-sm";

  const NAV_LINKS = ["Semua", "Pria", "Wanita", "Aksesoris"];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          background:
            scrolled || menuOpen ? "rgba(250,248,245,0.97)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #e7e5e4" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <div
            onClick={() => handlePilihKategori("Semua")}
            className="flex items-center select-none cursor-pointer"
          >
            <span
              className={`text-2xl font-black tracking-tighter uppercase transition-colors duration-500 ${menuOpen ? "text-stone-950" : logoColor}`}
            >
              GENZ-Store
            </span>
          </div>

          <nav
            className={`hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase transition-colors duration-500 ${navText}`}
          >
            {NAV_LINKS.map((link) => {
              const isActive = kategori === link;
              return (
                <button
                  key={link}
                  onClick={() => handlePilihKategori(link)}
                  className={`pb-0.5 cursor-pointer transition-colors duration-300 ${
                    isActive
                      ? navTextActive
                      : scrolled
                        ? "hover:text-stone-950"
                        : "hover:text-stone-50"
                  }`}
                >
                  {link}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative hidden sm:flex items-center">
              <Search
                className={`w-4 h-4 absolute left-3 pointer-events-none transition-colors duration-500 ${scrolled ? "text-stone-400" : "text-stone-300"}`}
              />
              <input
                type="text"
                placeholder="Cari Produk..."
                value={kataKunci}
                onChange={(e) => onCari(e.target.value)}
                className={`pl-9 pr-3 border text-xs focus:outline-none transition-all duration-500 w-36 focus:w-56 py-1.5 ${searchBg}`}
              />
            </div>
            <button
              onClick={onBukaKeranjang}
              className={`flex items-center gap-2 border px-4 py-2 rounded-none text-xs font-bold tracking-wider transition-all duration-500 cursor-pointer active:scale-95 ${cartStyle}`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Keranjang</span>
              <span
                className={`text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-500 ${scrolled ? "bg-stone-100 text-stone-900" : "bg-white/20 text-stone-50"}`}
              >
                {totalItem}
              </span>
            </button>

            <button
              className={`md:hidden p-2 transition-colors duration-300 cursor-pointer ${menuOpen ? "text-stone-950" : iconColor}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-[#faf8f5] px-4 py-4 flex flex-col gap-3">
            {/* Input Search Mobile */}
            <div className="relative flex items-center">
              <Search className="w-4 h-4 absolute left-3 text-stone-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Cari produk..."
                value={kataKunci}
                onChange={(e) => onCari(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-stone-100 border border-stone-300 text-stone-900 text-xs placeholder-stone-400 focus:outline-none focus:border-stone-900"
              />
            </div>

            {/* List Kategori Mobile */}
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => {
                const isActive = kategori === link;
                return (
                  <button
                    key={link}
                    onClick={() => {
                      handlePilihKategori(link);
                      setMenuOpen(false);
                    }}
                    className={`text-left text-sm font-bold uppercase tracking-widest py-2.5 border-b border-stone-100 last:border-0 transition cursor-pointer flex items-center justify-between ${
                      isActive ? "text-stone-950 font-black" : "text-stone-500 hover:text-stone-800"
                    }`}
                  >
                    <span>{link}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-stone-950" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
