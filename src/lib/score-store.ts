export interface Player {
  id: string;
  name: string;
}

export interface RoundScore {
  // playerId -> score
  [playerId: string]: number;
}

export type GameStatus = "setup" | "playing" | "finished";

export interface GameState {
  status: GameStatus;
  players: Player[];
  rounds: RoundScore[];
  startedAt?: number;
  finishedAt?: number;
}

const KEY = "flagman:game:v1";

export const emptyState: GameState = {
  status: "setup",
  players: [],
  rounds: [],
};

export function loadGame(): GameState {
  if (typeof window === "undefined") return emptyState;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptyState;
    return JSON.parse(raw) as GameState;
  } catch {
    return emptyState;
  }
}

export function saveGame(state: GameState) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

export function clearGame() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}

export interface Standing {
  place: number;
  player: Player;
  perRound: number[];
  total: number;
}

export function computeStandings(state: GameState): Standing[] {
  const totals = state.players.map((p) => {
    const perRound = state.rounds.map((r) => r[p.id] ?? 0);
    const total = perRound.reduce((a, b) => a + b, 0);
    return { player: p, perRound, total };
  });
  // Lower is better
  const sorted = [...totals].sort((a, b) => a.total - b.total);
  return sorted.map((s, i) => ({ ...s, place: i + 1 }));
}
