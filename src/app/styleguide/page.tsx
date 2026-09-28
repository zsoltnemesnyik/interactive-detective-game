import { Button } from "@/components/ui/button";

// Colour swatches — palette + role colours
const colours = [
  // Palette
  { name: "cream", bg: "bg-cream", text: "text-ink" },
  { name: "cream-2", bg: "bg-cream-2", text: "text-ink" },
  { name: "paper", bg: "bg-paper", text: "text-ink" },
  { name: "teal", bg: "bg-teal", text: "text-paper" },
  { name: "teal-deep", bg: "bg-teal-deep", text: "text-paper" },
  { name: "coral", bg: "bg-coral", text: "text-paper" },
  { name: "coral-dark", bg: "bg-coral-dark", text: "text-paper" },
  { name: "mustard", bg: "bg-mustard", text: "text-ink" },
  { name: "ink", bg: "bg-ink", text: "text-paper" },
  { name: "ink-soft", bg: "bg-ink-soft", text: "text-paper" },
  { name: "sage", bg: "bg-sage", text: "text-ink" },
  { name: "leather", bg: "bg-leather", text: "text-paper" },
];

// Button variants available in shadcn base-nova
const buttonVariants = [
  { label: "Default", variant: "default" },
  { label: "Secondary", variant: "secondary" },
  { label: "Destructive", variant: "destructive" },
  { label: "Outline", variant: "outline" },
  { label: "Ghost", variant: "ghost" },
  { label: "Link", variant: "link" },
  { label: "CTA", variant: "cta" },
] as const;

export default function StyleguidePage() {
  return (
    <main className="min-h-screen bg-background p-8 space-y-12">
      <header>
        <h1 className="font-heading text-4xl text-ink">Styleguide</h1>
        <p className="text-ink-soft mt-1">Visual reference — colours, typography, components</p>
      </header>

      {/* Colors */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-ink">Colors</h2>
        <div className="flex flex-wrap gap-3">
          {colours.map(({ name, bg, text }) => (
            <div key={name} className={`${bg} ${text} rounded-lg w-24 h-24 flex flex-col items-center justify-center text-center p-2`}>
              <span className="font-mono text-xs font-semibold">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-ink">Typography</h2>
        <div className="space-y-3">
          <p className="font-heading text-4xl text-ink">Bree Serif — heading (h1)</p>
          <p className="font-heading text-2xl text-ink">Bree Serif — heading (h2)</p>
          <p className="font-sans text-base text-ink">Nunito — body text, alapértelmezett</p>
          <p className="font-sans text-sm text-ink-soft">Nunito — small / muted</p>
          <p className="font-mono text-base text-ink">Special Elite — kód, koordináta, bélyegző</p>
          <p className="font-mono text-sm text-ink border border-sage rounded px-2 py-1 inline-block">JOIN-4821</p>
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-ink">Buttons</h2>
        <div className="flex flex-wrap gap-3 items-center">
          {buttonVariants.map(({ label, variant }) => (
            <Button key={variant} variant={variant}>
              {label}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          {buttonVariants.map(({ label, variant }) => (
            <Button key={variant} variant={variant} disabled>
              {label}
            </Button>
          ))}
        </div>
        <p className="text-ink-soft text-sm">Első sor: aktív — második sor: disabled</p>
      </section>

      {/* Surfaces */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl text-ink">Surfaces</h2>
        <div className="flex flex-wrap gap-4">
          <div className="bg-paper border border-sage rounded-lg p-4 w-48">
            <p className="font-heading text-ink">Paper card</p>
            <p className="text-ink-soft text-sm mt-1">border-sage</p>
          </div>
          <div className="bg-cream-2 border border-sage rounded-lg p-4 w-48">
            <p className="font-heading text-ink">Cream-2 card</p>
            <p className="text-ink-soft text-sm mt-1">secondary bg</p>
          </div>
          <div className="bg-teal text-paper rounded-lg p-4 w-48">
            <p className="font-heading">Teal surface</p>
            <p className="text-sm mt-1 opacity-80">header, akcent</p>
          </div>
        </div>
      </section>
    </main>
  );
}