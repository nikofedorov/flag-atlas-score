import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { getCountry, similarCountries, flagUrl } from "@/lib/countries";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/flags/$code")({
  loader: ({ params }) => {
    const country = getCountry(params.code);
    if (!country) throw notFound();
    return { country };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.country.name} — флаг и факты | ФЛАГМАН` },
      { name: "description", content: loaderData?.country.shortDescription ?? "Информация о стране и её флаге." },
      { property: "og:image", content: loaderData ? flagUrl(loaderData.country.code, 640) : undefined },
    ],
  }),
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Страна не найдена</h1>
        <Link to="/flags" className="mt-6 inline-flex items-center gap-2 text-brand font-semibold">
          <ArrowLeft className="h-4 w-4" /> Назад к каталогу
        </Link>
      </div>
    </PageShell>
  ),
  component: CountryPage,
});

function CountryPage() {
  const { country } = Route.useLoaderData();
  const similar = similarCountries(country);

  const facts = [
    { l: "Столица", v: country.capital },
    { l: "Население", v: country.population },
    { l: "Язык", v: country.language },
    { l: "Валюта", v: country.currency },
    { l: "Континент", v: country.continent },
    { l: "Площадь", v: country.area },
  ];

  return (
    <PageShell>
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Link to="/flags" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Все страны
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">{country.continent}</p>
              <h1 className="mt-3 font-display text-5xl font-extrabold sm:text-6xl">{country.name}</h1>
              <p className="mt-4 max-w-xl text-white/75">{country.shortDescription}</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-elevated">
              <img src={flagUrl(country.code, 640)} alt={`Флаг ${country.name}`} className="aspect-[3/2] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facts.map((f) => (
            <div key={f.l} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{f.l}</p>
              <p className="mt-2 text-lg font-semibold">{f.v}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold">Значение флага</h2>
              <div className="mt-4 space-y-4 text-foreground/90">
                <p><span className="font-semibold text-brand">Цвета:</span> {country.colors}</p>
                <p><span className="font-semibold text-brand">Символы:</span> {country.symbols}</p>
                <p><span className="font-semibold text-brand">Год принятия:</span> {country.adoptedYear}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold">История флага</h2>
              <p className="mt-4 leading-relaxed text-foreground/90">{country.history}</p>
            </div>

            {country.previousFlags.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold">Предыдущие флаги</h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {country.previousFlags.map((p, i) => (
                    <div key={i} className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
                      <div className="aspect-[3/2] overflow-hidden bg-secondary">
                        <img src={p.image} alt={p.years} className="h-full w-full object-cover" loading="lazy" />
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-semibold">{p.years}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
                      <Link to="/flags/$code" params={{ code: c.code }} className="flex items-center gap-3 rounded-lg p-2 hover:bg-secondary">
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
