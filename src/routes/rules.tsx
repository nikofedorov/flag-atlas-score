import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: "Правила игры ФЛАГМАН" },
      { name: "description", content: "Полные правила настольной игры ФЛАГМАН: подготовка, очки, победитель, FAQ." },
    ],
  }),
  component: RulesPage,
});

function RulesPage() {
  return (
    <PageShell>
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">Документация</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Правила игры</h1>
          <p className="mt-4 max-w-2xl text-white/75">Простые правила, увлекательный процесс и понятная система очков.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Block title="Описание игры">
          ФЛАГМАН — настольная игра на знание флагов стран мира, географии и истории. Партия состоит из нескольких туров, в каждом из которых игроки получают очки за угаданные или, наоборот, не угаданные флаги.
        </Block>

        <Block title="Подготовка к партии">
          <ul className="list-disc space-y-2 pl-5">
            <li>От 2 до 10 игроков.</li>
            <li>Перемешайте колоду карточек с флагами.</li>
            <li>Подготовьте онлайн-помощник счёта или возьмите бумагу.</li>
          </ul>
        </Block>

        <Block title="Правила начисления очков">
          <p>В каждом туре игроки получают штрафные очки за ошибки. Чем меньше очков — тем лучше. Возможные ситуации:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Не угадал флаг — +1 очко.</li>
            <li>Не угадал страну по описанию — +2 очка.</li>
            <li>Угадал флаг быстрее всех — 0 очков.</li>
          </ul>
        </Block>

        <Block title="Определение победителя">
          Побеждает игрок, набравший <span className="font-semibold text-accent-red">наименьшее</span> количество очков по итогам всей партии. Помощник счёта автоматически выстраивает таблицу так, чтобы первое место занимал игрок с минимальной суммой.
        </Block>

        <Block title="Примеры игровых ситуаций">
          <ul className="list-disc space-y-2 pl-5">
            <li>Игрок видит флаг с тремя цветами — называет страну. Если верно — 0 очков.</li>
            <li>Ведущий описывает: «Островное государство с самой длинной железной дорогой» — игроки называют страну.</li>
            <li>Если никто не угадал — все получают +1 штрафное очко.</li>
          </ul>
        </Block>

        <h2 className="mt-14 text-2xl font-bold">Частые вопросы</h2>
        <Accordion type="single" collapsible className="mt-4">
          {[
            { q: "Сколько длится одна партия?", a: "В среднем 30–60 минут, в зависимости от количества туров." },
            { q: "Можно ли играть онлайн?", a: "ФЛАГМАН — настольная игра, но онлайн-помощник счёта на этом сайте поможет вести партию без бумаги." },
            { q: "С какого возраста подходит?", a: "Рекомендуется с 10 лет, но многие правила доступны и младшим игрокам в режиме команды." },
            { q: "Что нужно для начала?", a: "Только коробка с игрой и компания друзей. Помощник счёта работает прямо в браузере и сохраняет партию автоматически." },
          ].map((f, i) => (
            <AccordionItem key={i} value={`q-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </PageShell>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10 first:mt-0">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-3 leading-relaxed text-foreground/90">{children}</div>
    </div>
  );
}
