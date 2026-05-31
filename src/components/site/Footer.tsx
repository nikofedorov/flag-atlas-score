import { Link } from "@tanstack/react-router";
import { Flag, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-brand text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent-red">
              <Flag className="h-5 w-5" />
            </div>
            <span className="font-display text-lg font-extrabold tracking-tight">ФЛАГМАН</span>
          </div>
          <p className="mt-4 text-sm text-brand-foreground/70 max-w-xs">
            Интеллектуальная настольная игра про флаги стран мира, географию и эрудицию.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-foreground/60">Навигация</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white text-brand-foreground/80">Главная</Link></li>
            <li><Link to="/flags" className="hover:text-white text-brand-foreground/80">Флаги</Link></li>
            <li><Link to="/score" className="hover:text-white text-brand-foreground/80">Счёт игры</Link></li>
            <li><Link to="/rules" className="hover:text-white text-brand-foreground/80">Правила</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-foreground/60">Компания</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white text-brand-foreground/80">О проекте</Link></li>
            <li><Link to="/buy" className="hover:text-white text-brand-foreground/80">Где купить</Link></li>
            <li><Link to="/contacts" className="hover:text-white text-brand-foreground/80">Контакты</Link></li>
            <li><Link to="/terms" className="hover:text-white text-brand-foreground/80">Пользовательское соглашение</Link></li>
            <li><Link to="/privacy" className="hover:text-white text-brand-foreground/80">Политика конфиденциальности</Link></li>
            <li><Link to="/data-policy" className="hover:text-white text-brand-foreground/80">Обработка персональных данных</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-foreground/60">Контакты</h4>
          <a href="mailto:hello@flagman.games" className="mt-4 inline-flex items-center gap-2 text-sm text-brand-foreground/80 hover:text-white">
            <Mail className="h-4 w-4" /> hello@flagman.games
          </a>
          <Link
            to="/buy"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-accent-red px-5 py-3 text-sm font-semibold"
          >
            Купить игру ФЛАГМАН
          </Link>
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
