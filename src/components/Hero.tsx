import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4 opacity-80">
          Чистота и безопасность вашего дома — наша работа
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
          ДЕЗИНСЕКЦИЯ.<br />ДЕЗИНФЕКЦИЯ.<br />ДЕРАТИЗАЦИЯ.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Устраняем насекомых, грызунов, неприятные запахи и ртутные загрязнения.<br />
          Срочный выезд в день обращения.
        </p>
        <a
          href="tel:89964123767"
          className="inline-block bg-white text-black px-8 py-3 text-sm uppercase tracking-wide font-semibold hover:bg-neutral-200 transition-colors duration-300"
        >
          Звоните: 8 996 412‑37‑67
        </a>
      </div>
    </div>
  );
}