import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { ExternalLink, Package, Truck, ShieldCheck, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: "Где купить игру ФЛАГМАН" },
      { name: "description", content: "Купите настольную игру ФЛАГМАН на Ozon, Wildberries или Avito." },
    ],
  }),
  component: BuyPage,
});

const shops = [
  { name: "Ozon", url: "https://ozon.ru", color: "from-[#005bff] to-[#2476ff]", cta: "Купить на Ozon" },
  { name: "Wildberries", url: "https://wildberries.ru", color: "from-[#cb11ab] to-[#7d1de8]", cta: "Купить на Wildberries" },
  { name: "Avito", url: "https://avito.ru", color: "from-[#04e061] to-[#00a046]", cta: "Найти на Avito" },
];

function BuyPage() {
  return (
    <PageShell>
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">Покупка</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Где купить игру ФЛАГМАН</h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Официальная настольная игра ФЛАГМАН доступна на крупнейших маркетплейсах. Доставка по всей России — обычно от 1 до 3 дней.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {shops.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block overflow-hidden rounded-2xl bg-gradient-to-br ${s.color} p-8 text-white shadow-elevated transition hover:-translate-y-1`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Маркетплейс</p>
              <h2 className="mt-2 font-display text-3xl font-bold">{s.name}</h2>
              <p className="mt-4 text-white/80">Официальная страница игры ФЛАГМАН.</p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-md bg-white/15 px-5 py-3 text-sm font-semibold backdrop-blur transition group-hover:bg-white group-hover:text-brand">
                {s.cta} <ExternalLink className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Преимущества официальной версии</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: BadgeCheck, t: "Оригинальное качество", d: "Плотный картон, цветопередача, лицензионный дизайн." },
            { i: ShieldCheck, t: "Гарантия от бренда", d: "Поддержка покупателя и замена компонентов." },
            { i: Truck, t: "Быстрая доставка", d: "Маркетплейсы доставляют по всей России и СНГ." },
            { i: Package, t: "Полный комплект", d: "Карточки, инструкция, упаковка для хранения." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <Icon className="h-6 w-6 text-accent-red" />
              <p className="mt-4 font-semibold">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-12">
          <h2 className="text-3xl font-bold">Что в коробке</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Колода карточек со флагами 195+ стран",
              "Карточки с фактами и подсказками",
              "Подробная инструкция на русском",
              "Подсчётные жетоны",
              "Упаковка-органайзер",
              "Гид путешественника",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-lg bg-secondary/50 p-4">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-red" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Вопросы покупателей</h2>
        <div className="mt-6 space-y-3">
          {[
            { q: "Сколько стоит игра?", a: "Стоимость зависит от маркетплейса. Актуальная цена указана на странице товара." },
            { q: "Есть ли доставка за границу?", a: "Wildberries и Ozon доставляют в страны СНГ. Проверяйте условия в карточке товара." },
            { q: "Можно ли вернуть игру?", a: "Возврат осуществляется по правилам выбранного маркетплейса." },
          ].map((q) => (
            <div key={q.q} className="rounded-xl border border-border bg-card p-5">
              <p className="font-semibold">{q.q}</p>
              <p className="mt-2 text-sm text-muted-foreground">{q.a}</p>
            </div>
          ))}
        </div>
        <Button asChild className="mt-10 bg-accent-red text-white hover:opacity-90">
          <a href="https://ozon.ru" target="_blank" rel="noopener noreferrer">Перейти в Ozon</a>
        </Button>
      </section>
    </PageShell>
  );
}
