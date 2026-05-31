import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Input } from "@/components/ui/input";
import { countries, continents, flagUrl, type Continent } from "@/lib/countries";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/flags")({
  head: () => ({
    meta: [
      { title: "Флаги стран мира — каталог ФЛАГМАН" },
      { name: "description", content: "Каталог государств мира с флагами, поиском и фильтром по континентам." },
    ],
  }),
  component: FlagsPage,
});

function FlagsPage() {
  const [query, setQuery] = useState("");
  const [continent, setContinent] = useState<Continent | "all">("all");
  const [letter, setLetter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return countries
      .filter((c) => (continent === "all" ? true : c.continent === continent))
      .filter((c) => (letter ? c.name.toUpperCase().startsWith(letter) : true))
      .filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name, "ru"));
  }, [query, continent, letter]);

  const alphabet = useMemo(() => {
    const set = new Set(countries.map((c) => c.name[0].toUpperCase()));
    return Array.from(set).sort((a, b) => a.localeCompare(b, "ru"));
  }, []);

  return (
    <PageShell>
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">Каталог</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Флаги стран мира</h1>
          <p className="mt-4 max-w-2xl text-white/75">Открывайте государства, изучайте их флаги, символику и историю.</p>

          <div className="mt-8 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Найти страну…"
                className="h-12 rounded-md border-white/15 bg-white/10 pl-11 text-white placeholder:text-white/50 focus-visible:ring-white/30"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {(["all", ...continents] as const).map((c) => (
            <button
              key={c}
              onClick={() => setContinent(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                continent === c
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-border bg-card hover:bg-secondary"
              )}
            >
              {c === "all" ? "Все континенты" : c}
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          <button
            onClick={() => setLetter(null)}
            className={cn(
              "rounded-md border px-3 py-1.5 text-xs font-semibold",
              !letter ? "border-brand bg-brand text-brand-foreground" : "border-border bg-card hover:bg-secondary"
            )}
          >
            Все
          </button>
          {alphabet.map((l) => (
            <button
              key={l}
              onClick={() => setLetter(l === letter ? null : l)}
              className={cn(
                "rounded-md border px-3 py-1.5 text-xs font-semibold uppercase",
                letter === l ? "border-brand bg-brand text-brand-foreground" : "border-border bg-card hover:bg-secondary"
              )}
            >
              {l}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-foreground">Найдено: {filtered.length}</p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((c) => (
            <Link
              key={c.code}
              to="/flags/$code"
              params={{ code: c.code }}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img src={flagUrl(c.code, 320)} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold">{c.name}</h3>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{c.continent}</span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{c.shortDescription}</p>
              </div>
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
              Ничего не найдено. Попробуйте изменить запрос.
            </p>
          )}
        </div>
      </section>
    </PageShell>
  );
}
