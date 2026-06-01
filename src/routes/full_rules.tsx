import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { RulesContent } from "./rules";
import { Flag, Skull, ShieldCheck, RefreshCw, Globe, Award, Flame, Star, Rocket } from "lucide-react";

export const Route = createFileRoute("/full_rules")({
  head: () => ({
    meta: [
      { title: "Полные правила игры ФЛАГМАН" },
      { name: "description", content: "Расширенные правила игры ФЛАГМАН и подробное описание карточек." },
      { name: "robots", content: "noindex, nofollow" },
      { name: "googlebot", content: "noindex, nofollow" },
    ],
  }),
  component: FullRulesPage,
});

interface CardSpec {
  id: string;
  icon: React.ElementType;
  title: string;
  count: string;
  action: React.ReactNode;
  features?: React.ReactNode;
  firstCard?: React.ReactNode;
  example?: React.ReactNode;
  note?: React.ReactNode;
}

const cards: CardSpec[] = [
  {
    id: "flags",
    icon: Flag,
    title: "Карты флагов",
    count: "196",
    action: "Основные игровые карты.",
    example: "Если на столе лежит карта Италии (зелёный, белый, красный), можно сыграть карту Германии (чёрный, красный, жёлтый), поскольку есть общий цвет — красный.",
    features: (
      <>
        <li>базовые карты игры;</li>
        <li>используются для совершения ходов;</li>
        <li>представлены все официальные государства мира.</li>
      </>
    ),
    note: "В будущем планируются дополнительные наборы: исторические государства, старые версии флагов, неофициальные страны, исчезнувшие государства.",
  },
  {
    id: "pirate-skip",
    icon: Skull,
    title: "Пиратский флаг — Пропусти ход",
    count: "4",
    action: "Следующий игрок пропускает ход.",
    features: (
      <>
        <li>можно сыграть только на карту с чёрным или белым цветом;</li>
        <li>отменяется Белым флагом перемирия;</li>
        <li>может быть отражена такой же картой.</li>
      </>
    ),
    firstCard: "Перетасовать колоду и открыть новую карту.",
  },
  {
    id: "pirate-plus3",
    icon: Skull,
    title: "Пиратский флаг — Пропусти ход +3",
    count: "4",
    action: (
      <>
        Следующий игрок:
        <ul className="mt-2 list-disc pl-5">
          <li>пропускает ход;</li>
          <li>берёт 3 карты.</li>
        </ul>
      </>
    ),
    features: (
      <>
        <li>можно сыграть только на красный или жёлтый цвет;</li>
        <li>отменяется Белым флагом перемирия;</li>
        <li>может быть переадресована следующему игроку такой же картой.</li>
      </>
    ),
    firstCard: "Перетасовать колоду и открыть новую карту.",
  },
  {
    id: "white",
    icon: ShieldCheck,
    title: "Белый флаг перемирия",
    count: "6",
    action: (
      <>
        Отменяет:
        <ul className="mt-2 list-disc pl-5">
          <li>Пиратский флаг — Пропусти ход;</li>
          <li>Пиратский флаг — Пропусти ход +3.</li>
        </ul>
      </>
    ),
    features: (
      <>
        <li>работает только против пиратских карт;</li>
        <li>может использоваться как обычная белая карта.</li>
      </>
    ),
    firstCard: "Первым ходит победитель предыдущей партии.",
  },
  {
    id: "change",
    icon: RefreshCw,
    title: "Смена курса",
    count: "5 (жёлтый, зелёный, синий/голубой, чёрный, оранжевый/коричневый — по 1)",
    action: "Меняет направление игры: по часовой ↔ против часовой.",
    features: (
      <>
        <li>играется по цвету;</li>
        <li>можно класть на другую карту «Смена курса».</li>
      </>
    ),
  },
  {
    id: "continents",
    icon: Globe,
    title: "Карты континентов",
    count: "3 (Европа и Африка — 1, Америка — 1, Азия и Океания — 1)",
    action: "Следующий круг можно играть только картами соответствующего континента. Правило совпадения цветов сохраняется.",
    features: <li>нельзя разыгрывать другую карту континента до завершения круга.</li>,
  },
  {
    id: "olympic",
    icon: Award,
    title: "Олимпийский флаг",
    count: "1",
    action: "Считается обычным флагом.",
    features: (
      <>
        <li>подходит для любого континента;</li>
        <li>действует во время континентальных кругов.</li>
      </>
    ),
  },
  {
    id: "revolution",
    icon: Flame,
    title: "Флаг революции",
    count: "1",
    action: (
      <>
        Следующий игрок:
        <ul className="mt-2 list-disc pl-5">
          <li>сбрасывает все карты;</li>
          <li>берёт из колоды столько же новых карт.</li>
        </ul>
      </>
    ),
    features: <li>действие невозможно отменить.</li>,
  },
  {
    id: "flagman",
    icon: Star,
    title: "Флагман",
    count: "1",
    action: "Универсальная карта. Игрок выбирает цвет следующего хода.",
    features: (
      <>
        <li>можно сыграть на любую карту;</li>
        <li>нельзя сыграть на пиратские карты.</li>
      </>
    ),
  },
  {
    id: "mars",
    icon: Rocket,
    title: "Все на Марс",
    count: "1",
    action: "Все остальные игроки берут по 2 дополнительные карты.",
    features: <li>действие невозможно отменить.</li>,
  },
];

function FullRulesPage() {
  return (
    <PageShell>
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">Полные правила</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">ФЛАГМАН — расширенные правила</h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Эта страница доступна по QR-коду из коробки. Здесь — короткие правила и подробное
            описание каждой карты.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <RulesContent />
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
          <h2 className="font-display text-3xl font-bold">Подробное описание карточек</h2>
          <p className="mt-2 text-muted-foreground">Быстрый переход к нужной карте.</p>
          <nav className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {cards.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium transition hover:border-brand hover:text-brand"
              >
                <c.icon className="h-4 w-4 text-accent-red" />
                <span className="truncate">{c.title}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 space-y-8">
          {cards.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card shadow-card"
            >
              <header className="flex flex-wrap items-center gap-4 border-b border-border bg-gradient-to-r from-brand to-brand/90 p-6 text-brand-foreground">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-red">
                  <c.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl font-bold sm:text-2xl">{c.title}</h3>
                  <p className="mt-1 text-sm text-white/70">Количество: {c.count}</p>
                </div>
              </header>

              <div className="space-y-5 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Действие</p>
                  <div className="mt-2 text-foreground/90">{c.action}</div>
                </div>

                {c.features && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Особенности</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-foreground/90">{c.features}</ul>
                  </div>
                )}

                {c.example && (
                  <div className="rounded-lg border border-border bg-secondary/40 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Пример</p>
                    <p className="mt-2 text-foreground/90">{c.example}</p>
                  </div>
                )}

                {c.firstCard && (
                  <div className="rounded-lg border border-accent-red/30 bg-accent-red/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-red">Если выпала первой</p>
                    <p className="mt-2 text-foreground/90">{c.firstCard}</p>
                  </div>
                )}

                {c.note && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Примечание</p>
                    <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground">
          Страница для владельцев коробки. Не индексируется и не размещается в меню сайта.
        </p>
      </section>
    </PageShell>
  );
}
