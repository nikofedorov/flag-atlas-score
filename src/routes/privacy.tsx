import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Политика конфиденциальности — ФЛАГМАН" }] }),
  component: () => (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Политика конфиденциальности</h1>
        <p className="mt-4 text-muted-foreground">Дата обновления: {new Date().toLocaleDateString("ru-RU")}</p>
        <p className="mt-6 text-foreground/90">Мы уважаем вашу конфиденциальность. Сайт www.flagman.games не передаёт ваши персональные данные третьим лицам без вашего согласия.</p>
        <h2 className="mt-6 text-xl font-bold">Какие данные мы собираем</h2>
        <ul className="mt-2 list-disc pl-5 text-foreground/90 space-y-1">
          <li>Имена игроков, введённые в помощник счёта — хранятся локально в браузере.</li>
          <li>Контактные данные из формы обратной связи — только для ответа на ваше обращение.</li>
        </ul>
        <h2 className="mt-6 text-xl font-bold">Cookies</h2>
        <p className="mt-2 text-foreground/90">Мы используем технические cookies для корректной работы сайта.</p>
      </article>
    </PageShell>
  ),
});
