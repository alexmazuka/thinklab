import type { Method } from '@/components/MethodCard';

export const methods: Method[] = [
  { slug: 'first-principles', name: 'First Principles', nameEn: 'First Principles Thinking', category: 'critical', tldr: 'Розкладай проблему на неподільні істини і будуй рішення з нуля, ігноруючи аналогії.', time: '30 хв' },
  { slug: 'inversion', name: 'Інверсія', nameEn: 'Inversion', category: 'critical', tldr: 'Замість "як досягти успіху?" запитай "як точно провалитись?" і уникай цих шляхів.', time: '15 хв' },
  { slug: 'second-order', name: 'Другий порядок', nameEn: 'Second-Order Thinking', category: 'critical', tldr: 'Думай не про наслідок, а про наслідок наслідку. Три ходи вперед.', time: '20 хв' },
  { slug: 'occams-razor', name: 'Бритва Оккама', nameEn: "Occam's Razor", category: 'critical', tldr: 'Найпростіше пояснення, яке покриває факти, — найімовірніше вірне.', time: '5 хв' },
  { slug: 'hanlons-razor', name: 'Бритва Хенлона', nameEn: "Hanlon's Razor", category: 'critical', tldr: 'Не приписуй злому умислу те, що можна пояснити некомпетентністю.', time: '2 хв' },
  { slug: 'steelmanning', name: 'Стілменінг', nameEn: 'Steelmanning', category: 'critical', tldr: 'Перед суперечкою — побудуй найсильнішу версію опонента. Тоді сперечайся.', time: '15 хв' },
  { slug: 'socratic-method', name: 'Сократ', nameEn: 'Socratic Method', category: 'critical', tldr: '6 типів запитань, які розкривають приховані припущення.', time: '20 хв' },
  { slug: 'chestertons-fence', name: 'Паркан Честертона', nameEn: "Chesterton's Fence", category: 'critical', tldr: 'Не прибирай те, чого не розумієш. Спочатку — дізнайся, навіщо воно там.', time: '10 хв' },

  { slug: 'decide', name: 'DECIDE', nameEn: 'DECIDE Framework', category: 'decision', tldr: '6-крокова процедура: Define, Explore, Consider, Identify, Do, Evaluate.', time: '30 хв' },
  { slug: 'ooda-loop', name: 'OODA Loop', nameEn: 'OODA Loop', category: 'decision', tldr: 'Observe → Orient → Decide → Act. Швидкі рішення у динаміці.', time: '5 хв' },
  { slug: '10-10-10', name: '10-10-10', nameEn: '10-10-10 Rule', category: 'decision', tldr: 'Як це рішення виглядатиме через 10 хв, 10 місяців, 10 років?', time: '2 хв' },
  { slug: 'eisenhower', name: 'Матриця Ейзенхауера', nameEn: 'Eisenhower Matrix', category: 'decision', tldr: 'Терміново × Важливо. 4 квадранти = 4 типи дій.', time: '5 хв' },
  { slug: 'pre-mortem', name: 'Pre-Mortem', nameEn: 'Pre-Mortem', category: 'decision', tldr: 'Уяви, що план провалився. Чому? Список запобігає помилкам до старту.', time: '30 хв' },
  { slug: 'expected-value', name: 'Expected Value', nameEn: 'Expected Value', category: 'decision', tldr: 'Ймовірність × Виграш. Математика за ризиком.', time: '15 хв' },
  { slug: 'regret-minimization', name: 'Regret Minimization', nameEn: 'Regret Minimization', category: 'decision', tldr: 'Фреймворк Безоса: який вибір я менше пожалкую через 20 років?', time: '15 хв' },
  { slug: 'bayesian-updating', name: 'Bayesian Updating', nameEn: 'Bayesian Updating', category: 'decision', tldr: 'Систематично оновлюй переконання за новими доказами.', time: '20 хв' },

  { slug: '5-whys', name: '5 Чому', nameEn: '5 Whys', category: 'problem', tldr: 'Копай до кореня, задаючи "чому?" п\'ять разів підряд.', time: '15 хв' },
  { slug: 'fishbone', name: 'Фішбоун', nameEn: 'Fishbone / Ishikawa', category: 'problem', tldr: 'Діаграма причин: 6 категорій, кожна з підкатегоріями.', time: '30 хв' },
  { slug: 'mece', name: 'MECE', nameEn: 'MECE', category: 'problem', tldr: 'Розбивай задачу на взаємно виключні, спільно вичерпні частини.', time: '20 хв' },
  { slug: 'iceberg', name: 'Айсберг', nameEn: 'Iceberg Model', category: 'problem', tldr: 'Події → патерни → структури → ментальні моделі. Копай донизу.', time: '15 хв' },
  { slug: 'design-thinking', name: 'Design Thinking', nameEn: 'Design Thinking', category: 'problem', tldr: 'Empathize → Define → Ideate → Prototype → Test.', time: 'проєкт' },
  { slug: 'pdca', name: 'PDCA', nameEn: 'Plan-Do-Check-Act', category: 'problem', tldr: 'Цикл Демінга для безперервного покращення.', time: 'постійно' },
  { slug: 'scamper', name: 'SCAMPER', nameEn: 'SCAMPER', category: 'problem', tldr: '7 трансформацій: Substitute, Combine, Adapt, Modify, Put, Eliminate, Reverse.', time: '30 хв' },

  { slug: 'systems-thinking', name: 'Системне мислення', nameEn: 'Systems Thinking', category: 'strategy', tldr: 'Feedback loops, stocks & flows, leverage points. Meadows.', time: '45 хв' },
  { slug: 'cynefin', name: 'Cynefin', nameEn: 'Cynefin Framework', category: 'strategy', tldr: '5 доменів складності — clear, complicated, complex, chaotic, confused.', time: '20 хв' },
  { slug: 'swot', name: 'SWOT', nameEn: 'SWOT Analysis', category: 'strategy', tldr: 'Strengths, Weaknesses, Opportunities, Threats — 2×2 стратегічне позиціонування.', time: '30 хв' },
  { slug: 'porters-5', name: "Porter's Five Forces", nameEn: "Porter's Five Forces", category: 'strategy', tldr: '5 сил, які визначають прибутковість галузі.', time: '45 хв' },
  { slug: 'force-field', name: 'Force Field', nameEn: 'Force Field Analysis', category: 'strategy', tldr: 'Lewin: сили "за" vs "проти" зміну. Збалансуй — отримай рух.', time: '30 хв' },
  { slug: 'scenario-planning', name: 'Сценарне планування', nameEn: 'Scenario Planning', category: 'strategy', tldr: '3-4 детальні "а що, якщо" майбутнього. Shell-метод.', time: '2 год' },
  { slug: 'antifragility', name: 'Антикрихкість', nameEn: 'Antifragility', category: 'strategy', tldr: 'Системи, які міцніють від хаосу (Taleb).', time: 'концепт' },
  { slug: 'theory-of-constraints', name: 'Теорія обмежень', nameEn: 'Theory of Constraints', category: 'strategy', tldr: 'Система така продуктивна, як і її найслабше місце. Знайди пляшкову горловину (Goldratt).', time: '45 хв' },

  { slug: 'circle-of-competence', name: 'Коло компетенцій', nameEn: 'Circle of Competence', category: 'mental', tldr: 'Знай, що ти знаєш. Знай, де межа. Не виходь за межу без потреби.', time: '5 хв' },
  { slug: 'map-vs-territory', name: 'Мапа ≠ територія', nameEn: 'Map is not the Territory', category: 'mental', tldr: 'Модель — спрощення. Реальність складніша. Korzybski.', time: '2 хв' },
  { slug: 'survivorship-bias', name: 'Упередження виживання', nameEn: 'Survivorship Bias', category: 'mental', tldr: 'Не вчися лише на переможцях. Програвші — важливіший датасет.', time: '5 хв' },
  { slug: 'confirmation-bias', name: 'Упередження підтвердження', nameEn: 'Confirmation Bias', category: 'mental', tldr: 'Ми шукаємо докази своїм переконанням. Протиотрута — steelmanning.', time: '10 хв' },
  { slug: 'dunning-kruger', name: 'Ефект Даннінга-Крюгера', nameEn: 'Dunning-Kruger Effect', category: 'mental', tldr: 'Менш компетентні переоцінюють свої навички. І як цього уникнути.', time: '5 хв' },
  { slug: 'pareto', name: 'Парето 80/20', nameEn: 'Pareto Principle', category: 'mental', tldr: '20% зусиль → 80% результату. Знайди ті 20%.', time: '10 хв' },
  { slug: 'lindy-effect', name: 'Ефект Лінді', nameEn: 'Lindy Effect', category: 'mental', tldr: 'Чим довше щось існує, тим довше ще проживе. Обернений розпад.', time: '5 хв' },
  { slug: 'network-effects', name: 'Мережеві ефекти', nameEn: 'Network Effects', category: 'mental', tldr: 'Цінність = функція квадрата учасників (Metcalfe).', time: '10 хв' },
  { slug: 'feynman-technique', name: 'Метод Фейнмана', nameEn: 'Feynman Technique', category: 'mental', tldr: 'Поясни тему 10-річній дитині. Знайди прогалини. Повтори.', time: '20 хв' },
];

export function getMethodBySlug(slug: string) {
  return methods.find((m) => m.slug === slug);
}
