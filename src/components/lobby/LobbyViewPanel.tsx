import { PAGELOBBY } from "@/lib/strings";

const LobbyViewPanel = ({ joinCode }: { joinCode: string }) => {
  return (
    <div
      className="relative overflow-hidden px-6 py-10 text-center bg-teal-deep"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 120%, rgba(239,185,62,.22) 0 40%, transparent 70%)",
        }}
      />
      <p
        className="relative mb-3 text-xs tracking-[.2em] uppercase text-white/70"
      >
        {PAGELOBBY.joinCodeLabel}
      </p>
      <p
        className="relative font-mono text-5xl tracking-[.16em] text-white"
      >
        {joinCode}
      </p>
      <p
        className="relative mt-2 text-sm font-bold text-white/70"
      >
        {PAGELOBBY.joinUrl}
      </p>
    </div>
  );
};

export default LobbyViewPanel;
