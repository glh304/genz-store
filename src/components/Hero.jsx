import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}hero-1.jpg`,
    label: "Koleksi Malam : Drop 01",
    title: "Didesain untuk\nJalan Malam",
    desc: "Hoodie premium dengan potongan oversized. Nyaman, gelap, kuat.",
    cta: "Belanja Sekarang",
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}hero-2.jpg`,
    label: "Esensial Harian : Drop 02",
    title: "Minimalis yang\nBerbicara Keras",
    desc: "Koleksi serba putih, bersih, tegas, dan siap dipadukan apapun.",
    cta: "Lihat Koleksi",
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}hero-3.jpg`,
    label: "Edisi Golden Hour : Drop 03",
    title: "Hangat di Luar,\nTajam di Dalam",
    desc: "Earth-tone jacket untuk kamu yang tahu kapan harus tampil berbeda.",
    cta: "Eksplorasi",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  const current = slides[activeIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-stone-900">
      {slides.map((slide, i) => (
        <img
          key={slide.id}
          src={slide.image}
          alt={slide.label}
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700"
          style={{ opacity: i === activeIndex ? 1 : 0 }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-stone-950/10" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 md:pb-20 text-stone-50">
        <p className="text-xs font-bold tracking-widest text-stone-300 uppercase mb-3">
          {current.label}
        </p>
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

        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={goPrev}
            className="w-10 h-10 border border-stone-500 hover:border-stone-100 text-stone-300 hover:text-stone-50 flex items-center justify-center transition text-xl"
            aria-label="Slide sebelumnya"
          >
            ‹
          </button>
          <div className="flex gap-2 items-center">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? "0.75rem" : "0.5rem",
                  height: i === activeIndex ? "0.75rem" : "0.5rem",
                  background: i === activeIndex ? "#f5f5f4" : "#78716c",
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={goNext}
            className="w-10 h-10 border border-stone-500 hover:border-stone-100 text-stone-300 hover:text-stone-50 flex items-center justify-center transition text-xl"
            aria-label="Slide berikutnya"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
