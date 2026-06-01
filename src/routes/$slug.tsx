import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { getCountryBySlug, similarCountries, flagUrl, type Country } from "@/lib/countries";
import { ArrowLeft, ShoppingBag } from "lucide-react";

const SITE = "https://www.flagman.games";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const country = getCountryBySlug(params.slug);
    if (!country) throw notFound();
    return { country };
  },
  head: ({ loaderData, params }) => {
    const c = loaderData?.country;
    if (!c) return { meta: [{ title: "Страна не найдена | ФЛАГМАН" }] };
    const title = `${c.name} — флаг, история, факты | ФЛАГМАН`;
    const description = c.shortDescription;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: flagUrl(c.code, 640) },
        { property: "og:url", content: `${SITE}/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `${SITE}/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Страница не найдена</h1>
        <p className="mt-3 text-muted-foreground">Возможно, такой страны пока нет в каталоге.</p>
        <Link to="/flags" className="mt-6 inline-flex items-center gap-2 text-brand font-semibold">
          <ArrowLeft className="h-4 w-4" /> К каталогу флагов
        </Link>
      </div>
    </PageShell>
  ),
  component: CountryPage,
});

function CountryPage() {
  const { country } = Route.useLoaderData() as { country: Country };
  const similar = similarCountries(country);

  const facts: Array<[string, string | undefined]> = [
    ["Столица", country.capital],
    ["Континент", country.continent],
    ["Население", country.population],
    ["Площадь", country.area],
    ["Язык", country.language],
    ["Валюта", country.currency],
    ["Телефонный код", country.phoneCode],
    ["Форма правления", country.government],
    ["Религии", country.religions],
    ["Дата образования", country.foundedDate],
  ];

  return (
    <PageShell>
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Link to="/flags" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Все страны
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">{country.continent}</p>
              <h1 className="mt-3 font-display text-5xl font-extrabold sm:text-6xl">{country.name}</h1>
              <p className="mt-5 max-w-xl text-lg text-white/75">{country.shortDescription}</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-elevated">
              <img src={flagUrl(country.code, 640)} alt={`Флаг страны ${country.name}`} className="aspect-[3/2] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Основные сведения</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facts.filter(([, v]) => !!v).map(([l, v]) => (
            <div key={l} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{l}</p>
              <p className="mt-2 text-base font-semibold">{v}</p>
            </div>
          ))}
        </div>

        {country.historyShort && (
          <div className="mt-12 rounded-2xl border border-border bg-card p-8 shadow-card">
            <h2 className="text-2xl font-bold">Краткая история страны</h2>
            <p className="mt-3 leading-relaxed text-foreground/90">{country.historyShort}</p>
          </div>
        )}

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold">Информация о флаге</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Дата принятия</p>
                  <p className="mt-2 font-semibold">{country.adoptedYear}</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">ISO код</p>
                  <p className="mt-2 font-semibold uppercase">{country.code}</p>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-foreground/90">
                <p><span className="font-semibold text-brand">Цвета. </span>{country.colors}</p>
                <p><span className="font-semibold text-brand">Символы. </span>{country.symbols}</p>
                <p><span className="font-semibold text-brand">История появления. </span>{country.history}</p>
              </div>
            </div>

            {country.previousFlags.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold">История флага</h2>
                <p className="mt-2 text-muted-foreground">Хронология исторических версий национального флага.</p>
                <ol className="mt-6 space-y-6 border-l border-border pl-6">
                  {country.previousFlags.map((p, i) => (
                    <li key={i} className="relative">
                      <span className="absolute -left-[33px] top-1 grid h-4 w-4 place-items-center rounded-full bg-accent-red ring-4 ring-background" />
                      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
                        <div className="aspect-[3/2] overflow-hidden bg-secondary">
                          <img src={p.image} alt={`Флаг ${country.name}, ${p.years}`} className="h-full w-full object-cover" loading="lazy" />
                        </div>
                        <div className="space-y-2 p-5">
                          <p className="text-sm font-semibold text-accent-red">{p.years}</p>
                          {p.adoptedDate && <p className="text-xs text-muted-foreground">Принят: {p.adoptedDate}</p>}
                          <p className="text-foreground/90">{p.description}</p>
                          {p.differences && (
                            <p className="text-sm text-muted-foreground"><span className="font-semibold">Отличия от следующей версии: </span>{p.differences}</p>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-bold">Интересные факты</h2>
              <ul className="mt-4 space-y-3">
                {country.facts.map((f) => (
                  <li key={f} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-red" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-gradient-brand p-7 text-brand-foreground shadow-elevated">
              <h3 className="font-display text-xl font-bold">Игра ФЛАГМАН</h3>
              <p className="mt-2 text-sm text-white/80">Соберите друзей и проверьте, кто лучше знает мир.</p>
              <Link to="/buy" className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent-red px-5 py-3 text-sm font-semibold">
                <ShoppingBag className="h-4 w-4" /> Где купить игру
              </Link>
            </div>

            {similar.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Похожие страны</h3>
                <ul className="mt-4 space-y-3">
                  {similar.map((c) => (
                    <li key={c.code}>
                      <Link to="/$slug" params={{ slug: c.slug ?? c.code }} className="flex items-center gap-3 rounded-lg p-2 hover:bg-secondary">
                        <img src={flagUrl(c.code, 80)} alt={c.name} className="h-8 w-12 rounded object-cover" loading="lazy" />
                        <div>
                          <p className="text-sm font-semibold">{c.name}</p>
                          <p className="text-xs text-muted-foreground">{c.continent}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
