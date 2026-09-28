# Döntési napló

Rövid lista: mit döntöttünk és miért. Új chatben ez adja a kontextust.

## 0. fázis — Alapbeállítás

### Next.js + tooling
- **Next.js 16, App Router, `src/` mappa, `@/*` alias.**
- **ESLint (nem Biome):** az `eslint-plugin-react-hooks` szabályai (pl. `set-state-in-effect`) csak így érhetők el.
- **React Compiler: kikapcsolva.** Tanulás miatt; később bekapcsolható (`reactCompiler: true`).
- **`tsconfig`: `strict` + `noUncheckedIndexedAccess`.** A tömb-indexelés `T | undefined`-et ad.
- **`next.config`: `typedRoutes: true`.** Az elgépelt útvonal build-hibát ad.

### Formázás
- **Prettier alapbeállításokkal** + `prettier-plugin-tailwindcss` (class-rendezés).
- **`eslint-config-prettier/flat` az ESLint-konfig UTOLSÓ eleme**, spread nélkül (objektum, nem tömb).

### shadcn/ui
- **Base UI motor** (nem Radix). Linkként renderelt gomb: `render={<Link />}`, NEM `asChild`.
- **`cn()` a hivatalos `cn` npm-csomagból jön** (2026 szept. óta). Nem kell `clsx` + `tailwind-merge`-re cserélni.

### Színek (`globals.css`)
- **Két réteg:** paletta (`--cream`, `--teal`…) → szerepek (`--background: var(--cream)`).
- **Hex érték CSAK a palettában** szerepel.
- **Csak light téma.** A `@custom-variant dark` sor marad: enélkül a `dark:` class-ok a rendszer sötét módjára reagálnának.

### Fontok
- **`next/font`, saját változónevek → szerepek:** Nunito → `font-sans`, Bree Serif → `font-heading`, Special Elite → `font-mono`.
- **`latin-ext` subset** (ő, ű); **`lang="hu"`**.

### Git
- **`develop` a munkaág**; kész, nagyobb egység → `master`.
- **Conventional Commits** (`feat:`, `fix:`, `chore:`, `style:`, `docs:`).

## Nyitott kérdések
- A coral egyszerre CTA és `destructive` szín — átgondolandó.
- Globális címsor-stílusok (`h1`–`h6`) — a UI-fázisban.
- Automatizálás (Husky / CI) — deploy előtt.
- `metadata` (cím, leírás) — a landing oldalnál.