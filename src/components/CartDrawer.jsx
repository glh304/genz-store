import { X, Trash2, ShoppingBag, Minus, Plus } from "lucide-react";

export default function CartDrawer({ isOpen, onClose, items, onHapusItem, onUbahQty }) {
  if (!isOpen) return null;

  const totalHarga = items.reduce((total, item) => total + item.harga * item.qty, 0);

  function handleCheckoutWA() {
    const nomorAdmin = "6281234567890";
    const listPesanan = items
      .map((item) => `${item.nama} x${item.qty} - Rp ${(item.harga * item.qty).toLocaleString("id-ID")}`)
      .join("\n");
    const formatPesan = `Halo Kak! Saya mau order dari web GENZ:\n\n${listPesanan}\n\n*Total Bayar: Rp ${totalHarga.toLocaleString("id-ID")}*\n\nMohon info nomor rekening dan pengirimannya ya kak!`;
    window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(formatPesan)}`, "_blank");
  }

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/40 backdrop-blur-sm flex justify-end">
      <div
        className="absolute inset-0"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md bg-[#faf8f5] h-full flex flex-col border-l border-stone-200 shadow-2xl">
        <div className="p-6 border-b border-stone-200 flex items-center justify-between">
          <h2 className="text-lg font-black uppercase tracking-tight text-stone-950">
            Keranjang ({items.reduce((s, i) => s + i.qty, 0)})
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-stone-200 text-stone-700 hover:text-stone-950 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center">
                <ShoppingBag className="w-7 h-7 text-stone-400" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-stone-800">
                  Keranjang Kosong
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  Belum ada produk yang dipilih.
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 bg-stone-950 text-stone-50 text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition cursor-pointer"
              >
                Mulai Belanja
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    className="w-16 h-16 object-cover bg-stone-100 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-stone-900 uppercase truncate">
                      {item.nama}
                    </h4>
                    <p className="text-xs font-semibold text-stone-950 mt-0.5">
                      Rp {(item.harga * item.qty).toLocaleString("id-ID")}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUbahQty(item.id, -1)}
                        className="w-6 h-6 border border-stone-300 flex items-center justify-center hover:bg-stone-200 transition cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() => onUbahQty(item.id, 1)}
                        className="w-6 h-6 border border-stone-300 flex items-center justify-center hover:bg-stone-200 transition cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onHapusItem(item.id)}
                    className="p-2 text-stone-400 hover:text-red-600 transition cursor-pointer flex-shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-stone-200 bg-[#faf8f5]">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold tracking-widest uppercase text-stone-500">
                Subtotal
              </span>
              <span className="text-base font-black text-stone-950">
                Rp {totalHarga.toLocaleString("id-ID")}
              </span>
            </div>
            <p className="text-[10px] text-stone-400 mb-4">Belum termasuk ongkir</p>
            <button
              onClick={handleCheckoutWA}
              className="w-full bg-stone-950 hover:bg-stone-800 text-stone-50 py-3.5 text-xs font-bold uppercase tracking-widest transition cursor-pointer active:scale-95"
            >
              Lanjut ke Pembayaran →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
