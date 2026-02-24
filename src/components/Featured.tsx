import Icon from "@/components/ui/icon";

const advantages = [
  { icon: "Zap", title: "Срочный выезд", desc: "В день обращения, без задержек" },
  { icon: "ShieldCheck", title: "Гарантия", desc: "На все виды работ. 100% результат или повторная обработка бесплатно" },
  { icon: "Leaf", title: "Безопасные препараты", desc: "3–4 класс опасности — безопасны для людей и животных" },
  { icon: "Lock", title: "Конфиденциальность", desc: "Аккуратно, без лишнего шума и огласки" },
  { icon: "BadgePercent", title: "Скидки", desc: "Пенсионерам и многодетным семьям" },
  { icon: "FileCheck", title: "Документы", desc: "Акт выполненных работ, сертификаты на препараты" },
];

const services = [
  {
    title: "Дезинсекция",
    desc: "Уничтожение тараканов, клопов, муравьёв, блох, комаров, моли, короеда и других насекомых",
    icon: "Bug",
  },
  {
    title: "Дератизация",
    desc: "Истребление крыс и мышей, профилактические барьеры, комплексные меры для жилых помещений",
    icon: "Rat",
  },
  {
    title: "Дезинфекция",
    desc: "Уничтожение бактерий, вирусов, грибков, плесени. Обработка вентиляции и кондиционеров",
    icon: "Droplets",
  },
  {
    title: "Устранение запахов",
    desc: "Гарь, табак, животные, канализация, трупные и застарелые запахи. Озонирование",
    icon: "Wind",
  },
  {
    title: "Демеркуризация",
    desc: "Срочный выезд при разбитом градуснике. Замеры паров ртути, безопасная утилизация",
    icon: "AlertTriangle",
  },
];

export default function Featured() {
  return (
    <div id="services" className="bg-white">
      {/* Преимущества */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-16 lg:py-0">
        <div className="flex-1 h-[400px] lg:h-[800px] mb-12 lg:mb-0 lg:order-2">
          <img
            src="/images/mountain-landscape.jpg"
            alt="Профессиональная обработка помещений"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
          <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">
            Почему выбирают нас
          </h3>
          <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight">
            Более 10 лет на рынке санитарных услуг. Выезжаем в день обращения, работаем круглосуточно.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {advantages.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="mt-1 shrink-0">
                  <Icon name={item.icon} size={20} className="text-neutral-800" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">{item.title}</p>
                  <p className="text-neutral-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="tel:89964123767"
            className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
          >
            Бесплатная консультация
          </a>
        </div>
      </div>

      {/* Услуги */}
      <div id="prices" className="bg-neutral-50 px-6 py-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4 text-center">Наши услуги</h2>
        <p className="text-neutral-500 text-center mb-14 max-w-xl mx-auto">
          Работаем с жилыми и коммерческими помещениями. Применяем холодный и горячий туман, гели, ловушки, озонирование.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {services.map((s) => (
            <div key={s.title} className="bg-white p-6 border border-neutral-200">
              <Icon name={s.icon} size={28} className="text-neutral-800 mb-4" fallback="Shield" />
              <h4 className="font-bold text-lg mb-2 text-neutral-900">{s.title}</h4>
              <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Цены */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Стоимость обработки квартир</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="text-left px-4 py-3 font-semibold">Тип квартиры</th>
                  <th className="text-center px-4 py-3 font-semibold">Дезинсекция / Дератизация</th>
                  <th className="text-center px-4 py-3 font-semibold">Дезинфекция</th>
                  <th className="text-center px-4 py-3 font-semibold">Комплексная</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1-комнатная", "2 500–3 500 ₽", "2 000–3 000 ₽", "4 000–5 000 ₽"],
                  ["2-комнатная", "3 500–4 500 ₽", "3 000–4 000 ₽", "5 500–6 500 ₽"],
                  ["3-комнатная", "4 500–5 500 ₽", "4 000–5 000 ₽", "6 500–8 000 ₽"],
                ].map(([type, dez, inf, complex], i) => (
                  <tr key={type} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                    <td className="px-4 py-3 font-medium text-neutral-900 border-b border-neutral-100">{type}</td>
                    <td className="px-4 py-3 text-center text-neutral-700 border-b border-neutral-100">{dez}</td>
                    <td className="px-4 py-3 text-center text-neutral-700 border-b border-neutral-100">{inf}</td>
                    <td className="px-4 py-3 text-center font-semibold text-neutral-900 border-b border-neutral-100">{complex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              ["Обработка от короеда", "от 3 000 ₽"],
              ["Устранение сильных запахов", "от 2 500 ₽"],
              ["Демеркуризация (комната)", "от 4 000 ₽"],
            ].map(([name, price]) => (
              <div key={name} className="bg-white border border-neutral-200 px-5 py-4 flex justify-between items-center">
                <span className="text-neutral-700 text-sm">{name}</span>
                <span className="font-bold text-neutral-900 text-sm">{price}</span>
              </div>
            ))}
          </div>
          <p className="text-neutral-400 text-xs mt-4 text-center">
            * Скидка 10% при заказе комплексной обработки. Бесплатный выезд для оценки при заказе услуги.
          </p>
        </div>
      </div>
    </div>
  );
}
