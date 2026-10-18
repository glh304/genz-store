import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}hero-1.jpg`,
    label: "Koleksi Malam : Drop 01",
    title: "Didesain untuk\nJalan Malam",
    desc: "Hoodie premium dengan potongan oversized. Nyaman, gelap, kuat.",
    cta: "Belanja Sekarang",
    posisi: "object-[65%_center] sm:object-center",
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}hero-2.jpg`,
    label: "Esensial Harian : Drop 02",
    title: "Minimalis yang\nBerbicara Keras",
    desc: "Koleksi serba putih, bersih, tegas, dan siap dipadukan apapun.",
    cta: "Lihat Koleksi",
    posisi: "object-[68%_center] sm:object-center",
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}hero-3.jpg`,
    label: "Edisi Golden Hour : Drop 03",
    title: "Hangat di Luar,\nTajam di Dalam",
    desc: "Earth-tone jacket untuk kamu yang tahu kapan harus tampil berbeda.",
    cta: "Eksplorasi",
    posisi: "object-center",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX - touchEndX;

    if (distance > 45) {
      goNext(); // Geser kiri -> next
    } else if (distance < -45) {
      goPrev(); // Geser kanan -> prev
    }
    setTouchStartX(null);
  };

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  const current = slides[activeIndex];

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[100dvh] overflow-hidden bg-stone-900 select-none"
    >
      {slides.map((slide, i) => (
        <img
          key={slide.id}
          src={slide.image}
          alt={slide.label}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${slide.posisi}`}
          style={{ opacity: i === activeIndex ? 1 : 0 }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/50 to-stone-950/20" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-20 md:pb-24 text-stone-50">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-none whitespace-pre-line">
          {current.title}
        </h1>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <p className="max-w-md text-sm text-stone-300 leading-relaxed">
            {current.desc}
          </p>
          <a
            href="#katalog"
            className="inline-flex items-center justify-center bg-stone-50 hover:bg-stone-200 text-stone-950 text-xs font-bold uppercase tracking-widest px-6 py-3 transition cursor-pointer self-start sm:self-auto"
          >
            {current.cta}
          </a>
        </div>

        <div className="mt-8 flex gap-2.5 items-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="h-1.5 transition-all duration-300 rounded-full cursor-pointer"
              style={{
                width: i === activeIndex ? "2rem" : "0.5rem",
                background: i === activeIndex ? "#f5f5f4" : "rgba(255,255,255,0.35)",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
