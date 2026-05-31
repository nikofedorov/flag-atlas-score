import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { countries, flagUrl } from "@/lib/countries";
import { ArrowRight, Trophy, Globe2, BookOpen, Users, Sparkles, Map, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ФЛАГМАН — настольная игра про флаги мира" },
      { name: "description", content: "Интеллектуальная настольная игра ФЛАГМАН: флаги стран мира, географическая эрудиция, ведение счёта онлайн." },
    ],
  }),
  component: Home,
});

const popular = ["ru", "us", "jp", "fr", "br", "de", "in", "cn"];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-brand-foreground">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-32 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/80">
              <Sparkles className="h-3.5 w-3.5" /> Настольная игра 2026
            </span>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
              Узнайте мир<br />
              <span className="text-accent-red">через флаги</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              ФЛАГМАН — интеллектуальная настольная игра про флаги, географию и историю. Соревнуйтесь, путешествуйте взглядом по миру и проверяйте эрудицию.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/flags" className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-brand transition-transform hover:scale-[1.02]">
                Изучать флаги <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/score" className="inline-flex items-center gap-2 rounded-md bg-accent-red px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02]">
                Вести счёт игры
              </Link>
              <Link to="/buy" className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/0 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
                Купить игру
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 text-white/80">
              {[
                { v: "195+", l: "стран мира" },
                { v: "2–10", l: "игроков" },
                { v: "30+", l: "минут партии" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-3xl font-bold text-white">{s.v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="grid grid-cols-3 gap-3 lg:gap-4">
              {popular.map((code, i) => (
                <div
                  key={code}
                  className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-elevated"
                  style={{ transform: `translateY(${(i % 3) * 12}px)` }}
                >
                  <img src={flagUrl(code, 320)} alt={code} className="h-full w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">Преимущества</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight">Игра, в которой выигрывает каждый</h2>
          <p className="mt-4 text-muted-foreground">Развивает кругозор и логическое мышление, превращает обычный вечер в захватывающее путешествие по карте мира.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Globe2, t: "География мира", d: "Континенты, столицы, валюты и культура — в одной коробке." },
            { i: Trophy, t: "Реальное соревнование", d: "Динамичные туры и понятные правила без затянутого старта." },
            { i: BookOpen, t: "Образовательная сила", d: "Каждая партия — новые факты и история государственных символов." },
            { i: Users, t: "Для компании 2–10", d: "Подходит для семьи, друзей и корпоративных вечеров." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-brand text-brand-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">Для кого игра</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">От школьника до эрудита</h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Семей, которые хотят проводить вечера с пользой",
                  "Учителей географии и истории",
                  "Студентов и путешественников",
                  "Любителей интеллектуальных игр",
                  "Корпоративных мероприятий и тимбилдингов",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-red" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["ru","us","jp","de"].map((c) => (
                <div key={c} className="aspect-[4/3] overflow-hidden rounded-xl bg-card shadow-card">
                  <img src={flagUrl(c, 320)} className="h-full w-full object-cover" alt={c} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT GOES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">Как проходит партия</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight">Три простых шага</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Собираем игроков", d: "От 2 до 10 участников. Вводите имена в онлайн-помощник счёта." },
            { n: "02", t: "Играем туры", d: "Угадывайте флаги, страны и факты. Помощник фиксирует очки автоматически." },
            { n: "03", t: "Подводим итоги", d: "Побеждает игрок с наименьшим количеством очков. Финальная таблица — за секунду." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <span className="font-display text-4xl font-extrabold text-accent-red">{s.n}</span>
              <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY LEARN */}
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">Почему это работает</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">Игра, которая учит мир</h2>
            <p className="mt-5 max-w-xl text-white/75">
              Флаг — это сжатая история нации. За каждым цветом и символом стоят войны, революции, объединения и победы. ФЛАГМАН превращает изучение мира в азартное соревнование.
            </p>
            <Link to="/flags" className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand">
              Открыть каталог флагов <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{i:Map,t:"География"},{i:BookOpen,t:"История"},{i:Star,t:"Эрудиция"},{i:Globe2,t:"Путешествия"}].map(({i:Icon,t})=>(
              <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Icon className="h-6 w-6 text-accent-red" />
                <p className="mt-4 font-semibold">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">Отзывы</p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight">Что говорят игроки</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "Мария К.", r: "Учитель географии", t: "Беру на уроки — дети угадывают флаги наперегонки. Лучший подарок для класса." },
            { n: "Дмитрий А.", r: "Путешественник", t: "Прошёл 40 стран и всё равно узнаю новое каждый вечер. Очень умно сделано." },
            { n: "Семья Орловых", r: "Москва", t: "Стало нашей семейной традицией пятницы. Помощник счёта — гениальная штука." },
          ].map((q) => (
            <div key={q.n} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex gap-0.5 text-accent-red">{[...Array(5)].map((_,i)=>(<Star key={i} className="h-4 w-4 fill-current" />))}</div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">«{q.t}»</p>
              <p className="mt-5 text-sm font-semibold">{q.n}</p>
              <p className="text-xs text-muted-foreground">{q.r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR COUNTRIES */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">Популярные страны</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">С чего начать</h2>
            </div>
            <Link to="/flags" className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-brand">
              Все страны <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {countries.slice(0, 8).map((c) => (
              <Link
                key={c.code}
                to="/flags/$code"
                params={{ code: c.code }}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={flagUrl(c.code, 320)} className="h-full w-full object-cover transition-transform group-hover:scale-105" alt={c.name} loading="lazy" />
                </div>
                <div className="p-4">
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.continent}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-brand p-10 text-brand-foreground shadow-elevated sm:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Готовы устроить вечер открытий?</h2>
              <p className="mt-3 max-w-2xl text-white/75">Заказывайте ФЛАГМАН на маркетплейсах и собирайте друзей за столом.</p>
            </div>
            <Link to="/buy" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-red px-8 py-4 text-base font-semibold">
              Где купить игру <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
