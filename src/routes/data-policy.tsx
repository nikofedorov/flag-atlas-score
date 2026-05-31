import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/data-policy")({
  head: () => ({ meta: [{ title: "Обработка персональных данных — ФЛАГМАН" }] }),
  component: () => (
    <PageShell>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Политика обработки персональных данных</h1>
        <p className="mt-4 text-muted-foreground">В соответствии с ФЗ-152 «О персональных данных».</p>
        <h2 className="mt-6 text-xl font-bold">Цели обработки</h2>
        <p className="mt-2 text-foreground/90">Связь с пользователями, обработка заказов и обращений.</p>
        <h2 className="mt-6 text-xl font-bold">Срок хранения</h2>
        <p className="mt-2 text-foreground/90">До достижения целей обработки или до момента отзыва согласия.</p>
        <h2 className="mt-6 text-xl font-bold">Контакты оператора</h2>
        <p className="mt-2 text-foreground/90">hello@flagman.games</p>
      </article>
    </PageShell>
  ),
});
