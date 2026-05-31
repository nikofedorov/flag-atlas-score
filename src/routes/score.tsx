import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  type GameState,
  type Player,
  type RoundScore,
  computeStandings,
  emptyState,
  loadGame,
  saveGame,
  clearGame,
} from "@/lib/score-store";
import { Plus, Trash2, Trophy, RotateCcw, Pencil, Flag, Save, Play, Award } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/score")({
  head: () => ({
    meta: [
      { title: "Счёт игры — ФЛАГМАН" },
      { name: "description", content: "Помощник для ведения счёта в настольной игре ФЛАГМАН. Авто-сохранение партии." },
    ],
  }),
  ssr: false,
  component: ScorePage,
});

const uid = () => Math.random().toString(36).slice(2, 10);

function ScorePage() {
  const [state, setState] = useState<GameState>(emptyState);
  const [loaded, setLoaded] = useState(false);
  const firstRun = useRef(true);

  useEffect(() => {
    setState(loadGame());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    saveGame(state);
    if (firstRun.current) { firstRun.current = false; return; }
    toast.success("Игра сохранена", { duration: 1200 });
  }, [state, loaded]);

  if (!loaded) {
    return (
      <PageShell>
        <div className="mx-auto max-w-3xl px-4 py-24 text-center text-muted-foreground">Загрузка…</div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <Toaster position="top-center" />
      <section className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-red">Помощник партии</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Счёт игры</h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Введите игроков, фиксируйте очки по турам и автоматически получайте таблицу. В ФЛАГМАНЕ побеждает игрок с наименьшей суммой очков.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {state.status === "setup" && <SetupView state={state} setState={setState} />}
        {state.status === "playing" && <PlayingView state={state} setState={setState} />}
        {state.status === "finished" && <FinishedView state={state} setState={setState} />}
      </section>
    </PageShell>
  );
}

function SetupView({ state, setState }: { state: GameState; setState: (s: GameState) => void }) {
  const [players, setPlayers] = useState<Player[]>(
    state.players.length ? state.players : [
      { id: uid(), name: "" },
      { id: uid(), name: "" },
    ]
  );

  const valid = players.filter((p) => p.name.trim()).length >= 2;

  const update = (id: string, name: string) => setPlayers(players.map((p) => p.id === id ? { ...p, name } : p));
  const remove = (id: string) => setPlayers(players.filter((p) => p.id !== id));
  const add = () => players.length < 10 && setPlayers([...players, { id: uid(), name: "" }]);

  const start = () => {
    const cleaned = players.map((p) => ({ ...p, name: p.name.trim() })).filter((p) => p.name);
    if (cleaned.length < 2) return;
    setState({
      status: "playing",
      players: cleaned,
      rounds: [],
      startedAt: Date.now(),
    });
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-10">
      <h2 className="text-2xl font-bold">Игроки партии</h2>
      <p className="mt-2 text-sm text-muted-foreground">От 2 до 10 участников.</p>

      <div className="mt-8 space-y-3">
        {players.map((p, i) => (
          <div key={p.id} className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-secondary text-sm font-semibold text-brand">
              {i + 1}
            </span>
            <Input
              value={p.name}
              onChange={(e) => update(p.id, e.target.value)}
              placeholder={`Игрок ${i + 1}`}
              className="h-11"
              maxLength={30}
            />
            {players.length > 2 && (
              <button onClick={() => remove(p.id)} aria-label="Удалить" className="grid h-10 w-10 place-items-center rounded-lg border border-border text-muted-foreground hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Button variant="outline" onClick={add} disabled={players.length >= 10}>
          <Plus className="h-4 w-4" /> Добавить игрока
        </Button>
        <Button onClick={start} disabled={!valid} className="bg-brand text-brand-foreground hover:bg-brand/90">
          <Play className="h-4 w-4" /> Начать игру
        </Button>
      </div>
    </div>
  );
}

function PlayingView({ state, setState }: { state: GameState; setState: (s: GameState) => void }) {
  const [inputOpen, setInputOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const standings = useMemo(() => computeStandings(state), [state]);

  const saveRound = (round: RoundScore, replaceLast: boolean) => {
    const rounds = replaceLast
      ? [...state.rounds.slice(0, -1), round]
      : [...state.rounds, round];
    setState({ ...state, rounds });
    setInputOpen(false);
    setEditing(false);
  };

  const finish = () => {
    setState({ ...state, status: "finished", finishedAt: Date.now() });
  };

  const reset = () => {
    if (!confirm("Начать новую игру? Текущая партия будет удалена.")) return;
    clearGame();
    setState(emptyState);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">Партия идёт</p>
          <h2 className="text-2xl font-bold">Сыграно туров: {state.rounds.length}</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => { setEditing(false); setInputOpen(true); }} className="bg-accent-red text-white hover:opacity-90">
            <Plus className="h-4 w-4" /> Ввести данные тура
          </Button>
          <Button variant="outline" onClick={() => { setEditing(true); setInputOpen(true); }} disabled={state.rounds.length === 0}>
            <Pencil className="h-4 w-4" /> Редактировать последний тур
          </Button>
          <Button variant="outline" onClick={finish} disabled={state.rounds.length === 0}>
            <Flag className="h-4 w-4" /> Закончить игру
          </Button>
          <Button variant="ghost" onClick={reset}>
            <RotateCcw className="h-4 w-4" /> Новая игра
          </Button>
        </div>
      </div>

      {inputOpen && (
        <RoundForm
          players={state.players}
          initial={editing ? state.rounds[state.rounds.length - 1] : undefined}
          roundNumber={editing ? state.rounds.length : state.rounds.length + 1}
          onCancel={() => { setInputOpen(false); setEditing(false); }}
          onSave={(r) => saveRound(r, editing)}
        />
      )}

      <StandingsTable state={state} standings={standings} />
    </div>
  );
}

function RoundForm({
  players, initial, roundNumber, onCancel, onSave,
}: {
  players: Player[];
  initial?: RoundScore;
  roundNumber: number;
  onCancel: () => void;
  onSave: (r: RoundScore) => void;
}) {
  const [scores, setScores] = useState<Record<string, string>>(() => {
    const o: Record<string, string> = {};
    players.forEach((p) => { o[p.id] = initial?.[p.id]?.toString() ?? ""; });
    return o;
  });

  const submit = () => {
    const r: RoundScore = {};
    players.forEach((p) => {
      const n = parseInt(scores[p.id] || "0", 10);
      r[p.id] = Number.isFinite(n) ? n : 0;
    });
    onSave(r);
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
      <h3 className="text-xl font-bold">Тур №{roundNumber}</h3>
      <p className="mt-1 text-sm text-muted-foreground">Введите очки каждого игрока в этом туре.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {players.map((p) => (
          <div key={p.id} className="flex items-center gap-3 rounded-lg border border-border p-3">
            <span className="flex-1 text-sm font-medium">{p.name}</span>
            <Input
              type="number"
              inputMode="numeric"
              value={scores[p.id]}
              onChange={(e) => setScores({ ...scores, [p.id]: e.target.value })}
              className="h-10 w-24 text-right"
              placeholder="0"
            />
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <Button onClick={submit} className="bg-brand text-brand-foreground hover:bg-brand/90">
          <Save className="h-4 w-4" /> Сохранить тур
        </Button>
        <Button variant="ghost" onClick={onCancel}>Отмена</Button>
      </div>
    </div>
  );
}

function StandingsTable({ state, standings }: { state: GameState; standings: ReturnType<typeof computeStandings> }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <div className="border-b border-border p-6">
        <h3 className="text-xl font-bold">Турнирная таблица</h3>
        <p className="mt-1 text-sm text-muted-foreground">Меньше очков — выше место.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Место</th>
              <th className="px-4 py-3">Игрок</th>
              {state.rounds.map((_, i) => <th key={i} className="px-3 py-3 text-center">Т{i + 1}</th>)}
              <th className="px-4 py-3 text-right">Итого</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((s) => (
              <tr key={s.player.id} className="border-t border-border">
                <td className="px-4 py-3">
                  <span className={`inline-grid h-7 w-7 place-items-center rounded-full text-xs font-bold ${s.place === 1 ? "bg-accent-red text-white" : "bg-secondary text-brand"}`}>
                    {s.place}
                  </span>
                </td>
                <td className="px-4 py-3 font-semibold">{s.player.name}</td>
                {s.perRound.map((v, i) => <td key={i} className="px-3 py-3 text-center text-muted-foreground">{v}</td>)}
                <td className="px-4 py-3 text-right text-base font-bold text-brand">{s.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FinishedView({ state, setState }: { state: GameState; setState: (s: GameState) => void }) {
  const standings = useMemo(() => computeStandings(state), [state]);
  const winner = standings[0];

  const reset = () => {
    clearGame();
    setState(emptyState);
  };

  const duration = state.startedAt && state.finishedAt
    ? Math.max(1, Math.round((state.finishedAt - state.startedAt) / 60000))
    : 0;

  return (
    <div className="space-y-8">
      <div className="overflow-hidden rounded-3xl bg-gradient-brand p-10 text-brand-foreground shadow-elevated sm:p-14">
        <div className="flex items-center gap-3 text-accent-red">
          <Award className="h-6 w-6" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">Победитель</span>
        </div>
        <h2 className="mt-4 font-display text-5xl font-extrabold sm:text-6xl">{winner.player.name}</h2>
        <p className="mt-3 text-white/80">Набрал(а) всего {winner.total} очков за {state.rounds.length} туров.</p>
        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-red px-5 py-2 text-sm font-bold uppercase tracking-wider">
          <Trophy className="h-4 w-4" /> Чемпион партии
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { l: "Игроков", v: state.players.length },
          { l: "Туров", v: state.rounds.length },
          { l: "Длительность", v: duration ? `${duration} мин` : "—" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-border bg-card p-5 shadow-card">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
            <p className="mt-1 text-2xl font-bold text-brand">{s.v}</p>
          </div>
        ))}
      </div>

      <StandingsTable state={state} standings={standings} />

      <div className="flex flex-wrap gap-3">
        <Button onClick={reset} className="bg-brand text-brand-foreground hover:bg-brand/90">
          <RotateCcw className="h-4 w-4" /> Начать новую игру
        </Button>
      </div>
    </div>
  );
}
