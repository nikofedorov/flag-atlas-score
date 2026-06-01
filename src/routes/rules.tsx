import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Calculator, Trophy, Users, Zap } from "lucide-react";

const SITE = "https://www.flagman.games";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: "Правила игры ФЛАГМАН — простая и сложная версии" },
      { name: "description", content: "Короткие правила настольной игры ФЛАГМАН: суть, простая и сложная версии, кто становится Флагманом. Онлайн-подсчёт очков." },
      { property: "og:title", content: "Правила игры ФЛАГМАН" },
      { property: "og:description", content: "Короткие правила настольной игры ФЛАГМАН и онлайн-подсчёт очков." },
      { property: "og:url", content: `${SITE}/rules` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/rules` }],
  }),
  component: RulesPage,
});

export function RulesContent() {
  return (
    <>
      <Section title="Суть игры" icon={Zap}>
        <p>
          ФЛАГМАН — карточная игра, в которой флаги разных стран становятся частью игрового
          процесса. Игроки поочерёдно выкладывают карты флагов, ориентируясь на общий цвет с
          предыдущими картами на столе. Специальные карты могут изменить ход игры и добавить
          мирового хаоса.
        </p>
      </Section>

      <Section title="Простая версия игры" icon={Users}>
        <ul className="space-y-3">
          <Li>В колоде <b>222 карты</b>. В игре участвуют <b>2–10 игроков</b>.</Li>
          <Li>Каждый игрок на старте получает <b>7 карт</b>.</Li>
          <Li>Игроки по очереди выкладывают карты флагов, если на карте есть хотя бы один общий цвет с последним флагом или картой на столе.</Li>
          <Li>Специальные карты могут пропустить ход противника, сменить очерёдность хода или заставить игрока взять карты из колоды.</Li>
          <Li>По умолчанию игроки ходят <b>по часовой стрелке</b>.</Li>
          <Li>Если игрок не может положить карту, он берёт одну карту из колоды. Если у взятой карты есть общий цвет с последней картой на столе — он может сразу её сыграть. Если общего цвета нет — карта остаётся на руке, ход пропускается.</Li>
          <Li>Когда заканчивается колода, перемешайте все сыгранные карты и сформируйте новую.</Li>
          <Li><b>Последняя карта</b> может быть только картой флага.</Li>
          <Li>Если у игрока остаётся только одна <b>дополнительная</b> карта (не карта флага государства), он обязан взять две дополнительные карты.</Li>
        </ul>
      </Section>

      <Section title="Сложная версия игры" icon={Zap}>
        <p>В колоде 222 карты. В игре участвуют 2–10 игроков.</p>
        <p className="mt-3">
          <b>Главное отличие:</b> красный цвет не действует. Все остальные правила полностью
          совпадают с простой версией.
        </p>
      </Section>

      <Section title="Кто станет Флагманом?" icon={Trophy}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-red">Победа в партии</p>
            <p className="mt-2 font-semibold">Игрок, первым избавившийся от всех карт на руках.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-red">Победа в игре</p>
            <p className="mt-2 font-semibold">Игрок, набравший наименьшее количество очков.</p>
          </div>
        </div>
      </Section>
    </>
  );
}

function RulesPage() {
  return (
    <PageShell>
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">Правила</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Как играть в ФЛАГМАН</h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Короткая версия правил. Простая и сложная версии игры, цель партии и условия победы.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <RulesContent />

        {/* CTA: онлайн-подсчёт очков */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-brand p-8 text-brand-foreground shadow-elevated sm:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">
                <Calculator className="h-3.5 w-3.5" /> Ключевое преимущество
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Считайте очки онлайн — без бумаги, ошибок и споров
              </h2>
              <p className="mt-3 max-w-xl text-white/75">
                Цифровой помощник ведёт счёт автоматически, сохраняет партию между сессиями и
                сразу показывает, кто Флагман.
              </p>
            </div>
            <Link
              to="/score"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-accent-red px-6 py-4 text-sm font-semibold transition hover:opacity-90"
            >
              <Calculator className="h-4 w-4" />
              Перейти к подсчёту очков
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Section({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="mt-12 first:mt-0">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-brand-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="mt-4 leading-relaxed text-foreground/90">{children}</div>
    </div>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-red" />
      <span>{children}</span>
    </li>
  );
}
