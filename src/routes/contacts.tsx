import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageShell } from "@/components/site/PageShell";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Mail, MessageSquare, Send } from "lucide-react";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты — ФЛАГМАН" },
      { name: "description", content: "Свяжитесь с командой настольной игры ФЛАГМАН." },
    ],
  }),
  component: ContactsPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Укажите имя").max(80),
  email: z.string().trim().email("Некорректный email").max(255),
  message: z.string().trim().min(5, "Сообщение слишком короткое").max(1000),
});

function ContactsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse({ name, email, message });
    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Сообщение отправлено! Мы ответим в течение 1–2 дней.");
      setName(""); setEmail(""); setMessage("");
      setLoading(false);
    }, 600);
  };

  return (
    <PageShell>
      <Toaster position="top-center" />
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">Контакты</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Свяжитесь с нами</h1>
          <p className="mt-4 max-w-2xl text-white/75">Вопросы, сотрудничество, оптовые заказы — пишите, мы рады.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-8 shadow-card">
          <h2 className="text-xl font-bold">Форма обратной связи</h2>
          <div className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium">Имя</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="mt-1.5 h-11" maxLength={80} />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="mt-1.5 h-11" maxLength={255} />
            </div>
            <div>
              <label className="text-sm font-medium">Сообщение</label>
              <Textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder="Напишите, как мы можем помочь" className="mt-1.5" maxLength={1000} />
            </div>
            <Button type="submit" disabled={loading} className="bg-accent-red text-white hover:opacity-90">
              <Send className="h-4 w-4" /> Отправить
            </Button>
          </div>
        </form>

        <div className="space-y-5">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <Mail className="h-6 w-6 text-accent-red" />
            <p className="mt-4 text-sm uppercase tracking-wider text-muted-foreground">Email</p>
            <a href="mailto:hello@flagman.games" className="mt-1 block text-lg font-semibold">hello@flagman.games</a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <MessageSquare className="h-6 w-6 text-accent-red" />
            <p className="mt-4 text-sm uppercase tracking-wider text-muted-foreground">Социальные сети</p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm font-medium">
              <a href="#" className="rounded-md border border-border px-3 py-1.5 hover:bg-secondary">Telegram</a>
              <a href="#" className="rounded-md border border-border px-3 py-1.5 hover:bg-secondary">VK</a>
              <a href="#" className="rounded-md border border-border px-3 py-1.5 hover:bg-secondary">Instagram</a>
            </div>
          </div>
          <div className="rounded-2xl bg-secondary/50 p-6 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Юридическая информация</p>
            <p className="mt-2">ИП Иванов И. И. · ИНН 770000000000 · ОГРНИП 300000000000000</p>
            <p className="mt-1">Москва, Россия</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
