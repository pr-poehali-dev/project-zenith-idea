export default function Footer() {
  return (
    <div
      id="contact"
      className="relative h-[500px] sm:h-[650px] lg:h-[850px] max-h-[850px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] sm:h-[calc(100vh+650px)] lg:h-[calc(100vh+850px)] -top-[100vh]">
        <div className="h-[500px] sm:h-[650px] lg:h-[850px] sticky top-[calc(100vh-500px)] sm:top-[calc(100vh-650px)] lg:top-[calc(100vh-850px)]">
          <div className="bg-neutral-900 py-8 px-6 h-full w-full flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-wide">Услуги</h3>
                <a href="#services" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm">Дезинсекция</a>
                <a href="#services" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm">Дератизация</a>
                <a href="#services" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm">Дезинфекция</a>
                <a href="#services" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm">Демеркуризация</a>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-wide">Контакты</h3>
                <a href="tel:89964123767" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm">
                  8 996 412‑37‑67
                </a>
                <p className="text-neutral-400 text-sm">Круглосуточно, без выходных</p>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm uppercase tracking-wide">TG</a>
                  <a href="#" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm uppercase tracking-wide">VK</a>
                  <a href="#" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm uppercase tracking-wide">WA</a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-wide">Документы</h3>
                <a href="#" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm">Политика конфиденциальности</a>
                <a href="#" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm">Договор-оферта</a>
                <a href="#" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm">Лицензии и сертификаты</a>
              </div>
            </div>

            {/* Форма обратной связи */}
            <div className="bg-white/5 border border-white/10 p-6 max-w-lg">
              <h4 className="text-white font-semibold mb-2 uppercase text-sm tracking-wide">Связаться с нами</h4>
              <p className="text-neutral-400 text-xs mb-5">Нажмите кнопку — мы сразу перезвоним</p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:89964123767"
                  className="bg-white text-black px-6 py-3 text-sm uppercase tracking-wide font-semibold hover:bg-neutral-200 transition-colors duration-300 w-fit flex items-center gap-2"
                >
                  <span>📞</span>
                  <span>Позвонить: 8 996 412‑37‑67</span>
                </a>
                <a
                  href="https://wa.me/79964123767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/30 text-white px-6 py-3 text-sm uppercase tracking-wide font-semibold hover:border-white transition-colors duration-300 w-fit"
                >
                  Написать в WhatsApp
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-[0.8] text-white font-bold tracking-tight">
                ДЕЗСЕРВИС
              </h1>
              <p className="text-neutral-500 text-xs sm:text-sm text-right">
                © {new Date().getFullYear()} ДезСервис. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}