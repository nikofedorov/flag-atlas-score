import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Пользовательское соглашение — ФЛАГМАН" }] }),
  component: () => (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 prose prose-neutral">
        <h1 className="text-3xl font-bold">Пользовательское соглашение</h1>
        <p className="mt-4 text-muted-foreground">Дата обновления: {new Date().toLocaleDateString("ru-RU")}</p>
        <h2 className="mt-8 text-xl font-bold">1. Общие положения</h2>
        <p className="mt-2 text-foreground/90">Настоящее Пользовательское соглашение регулирует отношения между администрацией сайта www.flagman.games и пользователями сайта.</p>
        <h2 className="mt-6 text-xl font-bold">2. Использование сервиса</h2>
        <p className="mt-2 text-foreground/90">Пользователь обязуется использовать сайт в соответствии с действующим законодательством Российской Федерации.</p>
        <h2 className="mt-6 text-xl font-bold">3. Интеллектуальная собственность</h2>
        <p className="mt-2 text-foreground/90">Все материалы сайта, включая дизайн, логотип ФЛАГМАН, тексты и иллюстрации, охраняются авторским правом.</p>
        <h2 className="mt-6 text-xl font-bold">4. Ответственность</h2>
        <p className="mt-2 text-foreground/90">Администрация не несёт ответственности за временную недоступность сервиса.</p>
      </article>
    </PageShell>
  ),
});
