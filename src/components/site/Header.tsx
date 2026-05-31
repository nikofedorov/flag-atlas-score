import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Flag } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Главная" },
  { to: "/flags", label: "Флаги" },
  { to: "/score", label: "Счёт игры" },
  { to: "/rules", label: "Правила" },
  { to: "/buy", label: "Где купить" },
  { to: "/about", label: "О проекте" },
  { to: "/contacts", label: "Контакты" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (r) => r.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-brand-foreground shadow-card transition-transform group-hover:scale-105">
            <Flag className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-extrabold tracking-tight text-brand">ФЛАГМАН</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">flagman.games</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-brand bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/buy"
            className="inline-flex items-center rounded-md bg-accent-red px-4 py-2 text-sm font-semibold transition-transform hover:scale-[1.03]"
          >
            Купить игру
          </Link>
        </div>

        <button
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/buy"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-accent-red px-4 py-3 text-sm font-semibold"
            >
              Купить игру
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
