import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Heart, Target, Sparkles, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О проекте ФЛАГМАН" },
      { name: "description", content: "История, миссия и команда бренда настольных игр ФЛАГМАН." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">О проекте</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Бренд интеллектуальных игр</h1>
          <p className="mt-4 max-w-2xl text-white/75">
            ФЛАГМАН создан командой увлечённых путешественников и игровых дизайнеров. Мы верим, что настольные игры — лучший способ открывать мир вместе.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold">История создания</h2>
          <p className="mt-4 text-foreground/90 leading-relaxed">
            Идея игры родилась в долгом путешествии: вечером у костра обсуждали флаги стран, в которых побывали, и поняли, что за каждым символом скрывается удивительная история. Так появился ФЛАГМАН — игра, которая объединяет географию, историю и азарт.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Миссия</h2>
          <p className="mt-4 text-foreground/90 leading-relaxed">
            Сделать изучение мира увлекательным — для семьи, школы, друзей и коллег. Мы хотим, чтобы каждый игрок после партии чувствовал себя на шаг ближе к большому миру.
          </p>
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Ценности бренда</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { i: Sparkles, t: "Качество", d: "Только проверенные данные, отличные материалы, продуманный дизайн." },
              { i: Heart, t: "Уважение", d: "К культуре каждой страны и каждому игроку за нашим столом." },
              { i: Target, t: "Простота", d: "Понятные правила и удобный цифровой помощник партии." },
              { i: Users, t: "Сообщество", d: "Слушаем игроков и вместе развиваем игру." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <Icon className="h-6 w-6 text-accent-red" />
                <p className="mt-4 font-semibold">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Команда</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { n: "Алексей Морозов", r: "Геймдизайн" },
            { n: "Ольга Петрова", r: "Контент и история" },
            { n: "Сергей Иванов", r: "Продукт и развитие" },
          ].map((p) => (
            <div key={p.n} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="aspect-square w-full rounded-xl bg-gradient-brand" />
              <p className="mt-5 text-lg font-semibold">{p.n}</p>
              <p className="text-sm text-muted-foreground">{p.r}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-brand p-10 text-brand-foreground sm:p-14">
          <h2 className="font-display text-3xl font-bold">Развитие проекта</h2>
          <p className="mt-3 max-w-2xl text-white/80">
            Впереди — расширение каталога стран, мобильное приложение, новые форматы партий, рейтинги игроков и облачное хранение партий. Мы только начинаем.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
