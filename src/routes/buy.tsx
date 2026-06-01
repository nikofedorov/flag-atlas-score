import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ExternalLink, Package, Truck, ShieldCheck, BadgeCheck } from "lucide-react";
import { marketplaces } from "@/lib/marketplaces";

const SITE = "https://www.flagman.games";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: "Где купить настольную игру ФЛАГМАН" },
      { name: "description", content: "Купите официальную настольную игру ФЛАГМАН на Ozon, Wildberries или Avito. Доставка по России и СНГ." },
      { property: "og:title", content: "Где купить настольную игру ФЛАГМАН" },
      { property: "og:description", content: "Официальные магазины и маркетплейсы для покупки игры ФЛАГМАН." },
      { property: "og:url", content: `${SITE}/buy` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/buy` }],
  }),
  component: BuyPage,
});

function BuyPage() {
  return (
    <PageShell>
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">Покупка</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Где купить игру ФЛАГМАН</h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Официальная настольная игра ФЛАГМАН доступна на крупнейших маркетплейсах. Доставка по
            всей России — обычно от 1 до 3 дней.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {marketplaces.map((s) => (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br ${s.gradient} p-8 text-white shadow-elevated transition hover:-translate-y-1`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Маркетплейс</p>
              <h2 className="mt-2 font-display text-3xl font-bold">{s.name}</h2>
              <p className="mt-4 flex-1 text-white/80">{s.description}</p>
              <div className="mt-8 inline-flex items-center gap-2 self-start rounded-md bg-white/15 px-5 py-3 text-sm font-semibold backdrop-blur transition group-hover:bg-white group-hover:text-brand">
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
            { i: BadgeCheck, t: "Оригинальное качество", d: "Плотный картон, точная цветопередача, лицензионный дизайн." },
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
              "Колода из 222 карт",
              "Карты флагов 196 государств мира",
              "Специальные карты: пиратские, белые, континентов и другие",
              "Подробная инструкция на русском языке",
              "QR-код с расширенными правилами",
              "Упаковка-органайзер",
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
            { q: "Есть ли доставка за границу?", a: "Wildberries и Ozon доставляют в страны СНГ. Условия уточняйте в карточке товара." },
            { q: "Можно ли вернуть игру?", a: "Возврат осуществляется по правилам выбранного маркетплейса." },
          ].map((q) => (
            <div key={q.q} className="rounded-xl border border-border bg-card p-5">
              <p className="font-semibold">{q.q}</p>
              <p className="mt-2 text-sm text-muted-foreground">{q.a}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
