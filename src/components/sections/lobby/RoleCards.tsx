import { ROLE_CARDS } from "@/lib/strings";

const fieldIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.2" />
  </svg>
);

const terminalIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8a5a34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 21h8M12 17v4M7 9h6M7 12.5h4" />
  </svg>
);

export default function RoleCards() {
  return (
    <div className="px-4 pb-4">
      <span className="font-mono text-[9.5px] tracking-widest uppercase text-coral-dark">
        {ROLE_CARDS.sectionLabel}
      </span>

      <div className="grid grid-cols-2 gap-2 mt-2">
        {/* Field card */}
        <div className="rounded-2xl p-3 bg-teal-deep border-2 border-teal-deep text-white">
          {fieldIcon}
          <div className="mt-2 font-heading text-base">
            {ROLE_CARDS.fieldTitle}
          </div>
          <p className="text-[10.5px] font-semibold leading-snug mt-1 text-white/85">
            {ROLE_CARDS.fieldDescription}
          </p>
          <div className="mt-2 inline-block rounded-full px-2 py-1 font-mono text-[9px] tracking-[.08em] text-white/50">
            {ROLE_CARDS.fieldSlots}
          </div>
        </div>

        {/* Terminal card */}
        <div className="rounded-2xl p-3 bg-paper border-2 border-sage">
          {terminalIcon}
          <div className="mt-2 font-heading text-base text-ink">
            {ROLE_CARDS.terminalTitle}
          </div>
          <p className="text-[10.5px] font-semibold leading-snug mt-1 text-ink-soft">
            {ROLE_CARDS.terminalDescription}
          </p>
          <div className="mt-2 inline-block rounded-full px-2 py-1 font-mono text-[9px] tracking-[.08em] bg-cream-2 text-ink-soft">
            {ROLE_CARDS.terminalSlots}
          </div>
        </div>
      </div>
    </div >
  );
}