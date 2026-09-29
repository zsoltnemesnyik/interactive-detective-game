const GameDetailImage = ({ src, alt }: { src: string | null; alt: string }) => (
  <div className="aspect-square w-full overflow-hidden rounded-xl bg-cream-2">
    {src ? (
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    ) : (
      <div className="flex h-full items-center justify-center text-ink-soft">
        Nincs kép
      </div>
    )}
  </div>
);

export default GameDetailImage