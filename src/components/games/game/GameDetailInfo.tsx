import { Game } from "@/types";
import { DIFFICULTY_LABELS } from "@/lib/constants";

const GameDetailInfo = ({ game }: { game: Game }) => (
  <div className="flex flex-col gap-4">
    <p className="font-mono text-sm text-ink-soft">{game.city}</p>
    <h1 className="font-heading text-4xl text-ink">{game.title}</h1>
    {game.description && (
      <p className="text-ink-soft">{game.description}</p>
    )}
    <div className="flex gap-4 text-sm text-ink-soft">
      <span>{game.estimated_duration_min} perc</span>
      <span>·</span>
      <span>{DIFFICULTY_LABELS[game.difficulty]}</span>
    </div>
  </div>
);

export default GameDetailInfo