import { useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] animate-slide-up">
      <div className="flex items-center gap-3 bg-stone-950 text-stone-50 px-4 py-3 shadow-2xl min-w-[300px] max-w-sm">
        <img
          src={toast.gambar}
          alt={toast.nama}
          className="w-10 h-10 object-cover bg-stone-800 flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
            Ditambah ke keranjang
          </p>
          <p className="text-xs font-bold text-stone-50 truncate mt-0.5">
            {toast.nama}
          </p>
        </div>
        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
        <button onClick={onClose} className="p-1 text-stone-500 hover:text-stone-50 transition cursor-pointer">
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
