import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const steps = [
  "Звоните или оставляете заявку на сайте",
  "Специалист консультирует и уточняет детали",
  "Согласовываем дату и время выезда",
  "Осмотр объекта и подбор метода обработки",
  "Выполняем работы — 30–60 минут",
  "Рекомендации по профилактике и гарантия",
];

const reviews = [
  {
    text: "В квартире появились клопы — ужас! Позвонили в компанию, приехали через 3 часа, обработали за 40 минут. Уже 4 месяца никаких следов насекомых. Очень благодарны!",
    author: "Марина, Москва",
  },
  {
    text: "Разбили градусник в детской. Перепугались, но оператор успокоил и объяснил, что делать до приезда. Ребята приехали быстро, всё убрали, сделали замеры — ртути нет. Спасибо за профессионализм!",
    author: "Алексей, Казань",
  },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <>
      {/* Как мы работаем */}
      <div className="bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-14 text-center">Как мы работаем</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-5xl font-bold text-neutral-200 leading-none shrink-0">{i + 1}</span>
                <p className="text-neutral-700 text-sm leading-relaxed pt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Параллакс-баннер с отзывами */}
      <div
        ref={container}
        className="relative flex items-center justify-center h-screen overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <img
              src="/images/spiral-circles.jpg"
              alt="Профессиональная обработка"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </div>

        <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
          Отзывы клиентов
        </h3>

        <div className="absolute bottom-12 left-0 right-0 px-6 z-10 flex flex-col sm:flex-row gap-6 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 flex-1">
              <p className="text-white text-sm sm:text-base leading-relaxed mb-4">«{r.text}»</p>
              <p className="text-white/60 text-xs uppercase tracking-wide">— {r.author}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
