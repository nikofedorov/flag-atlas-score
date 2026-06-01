import { Link } from "@tanstack/react-router";
import { Flag, Mail, ShoppingBag } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-brand text-brand-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand + CTA */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent-red">
                <Flag className="h-5 w-5" />
              </div>
              <span className="font-display text-lg font-extrabold tracking-tight">ФЛАГМАН</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-brand-foreground/70">
              Интеллектуальная настольная игра про флаги стран мира, географию и эрудицию.
            </p>

            <Link
              to="/buy"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent-red px-5 py-3 text-sm font-semibold transition hover:opacity-90 sm:w-auto"
            >
              <ShoppingBag className="h-4 w-4" />
              Купить игру ФЛАГМАН
            </Link>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-foreground/60">Навигация</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-brand-foreground/80 hover:text-white">Главная</Link></li>
              <li><Link to="/flags" className="text-brand-foreground/80 hover:text-white">Флаги</Link></li>
              <li><Link to="/score" className="text-brand-foreground/80 hover:text-white">Счёт игры</Link></li>
              <li><Link to="/rules" className="text-brand-foreground/80 hover:text-white">Правила</Link></li>
              <li><Link to="/buy" className="text-brand-foreground/80 hover:text-white">Где купить</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-foreground/60">Компания</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="text-brand-foreground/80 hover:text-white">О проекте</Link></li>
              <li><Link to="/contacts" className="text-brand-foreground/80 hover:text-white">Контакты</Link></li>
              <li><Link to="/terms" className="text-brand-foreground/80 hover:text-white">Пользовательское соглашение</Link></li>
              <li><Link to="/privacy" className="text-brand-foreground/80 hover:text-white">Политика конфиденциальности</Link></li>
              <li><Link to="/data-policy" className="text-brand-foreground/80 hover:text-white">Обработка персональных данных</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-foreground/60">Контакты</h4>
            <a
              href="mailto:hello@flagman.games"
              className="mt-4 inline-flex items-center gap-2 break-all text-sm text-brand-foreground/80 hover:text-white"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span>hello@flagman.games</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-brand-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} ФЛАГМАН. Все права защищены.</p>
          <p>www.flagman.games</p>
        </div>
      </div>
    </footer>
  );
}
