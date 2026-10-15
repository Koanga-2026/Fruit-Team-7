@promptkit/

# AGENTS.md

## Project Overview

fruit-stand-starter is a frontend-only React Router starter for a "Fruit Stand" app that showcases New Zealand fruit. It ships with a static dataset of 12 fruits, a working layout and nav, and placeholder components for the pages students build: a fruit detail page and a quiz. No backend, no data fetching library.

**Key Technologies:**
- **Frontend**: React 18, TypeScript, Vite, React Router v7 (`react-router`)
- **Testing**: Vitest (no tests exist yet)
- **Linting/Formatting**: ESLint (`@devacademy/eslint-config/react`), Prettier (no semicolons, single quotes)
- **Deployment**: `nginx.conf` serves a built `dist` from `/app/www` with SPA fallback to `index.html`

**Architecture:**
- `client/`: All source code
  - `client/index.tsx` — entry point; mounts `<RouterProvider>` on `#app`
  - `client/router.tsx` — route definitions via `createBrowserRouter` / `createRoutesFromElements`. Currently registers `/` (Home) and `*` (NotFound) only
  - `client/components/App.tsx` — root layout: header with "Fruit Stand" title and `<Nav />`, then `<Outlet />` inside `<main>`
  - `client/components/Nav.tsx` — links to `/` and `/Quiz`
  - `client/components/Home.tsx` — index route (placeholder text)
  - `client/components/Quiz.tsx` — placeholder, not yet routed
  - `client/components/FruitDetail.tsx` — placeholder, not yet routed
  - `client/components/NotFound.tsx` — 404 page
  - `client/data/fruits.ts` — default export: array of 12 fruit objects
  - `client/main.css` — global styles (loaded from `index.html`, not imported in TSX)

**Fruit data shape** (each item in `fruits.ts`; there is no TypeScript interface yet):

| Field | Example |
|-------|---------|
| `name` | `"Kiwifruit"` |
| `emoji` | `"🥝"` |
| `imageUrl` | Wikimedia Commons URL |
| `description` | short description |
| `interestingFact` | short fun fact |

Fruits have no `id` or `slug` field — a detail route will need to key off `name` (or an id the student adds).

## Building and Running

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `http://localhost:5173` |
| `npm run build` | Production build to `dist/` |
| `npm test -- --run` | Run Vitest once (no tests yet, so it exits with "no test files") |
| `npm run lint` | Check code with ESLint |
| `npm run format` | Format code with Prettier |

**Important:** Always use `npm run dev`. Opening `index.html` directly won't load TypeScript.

## Development Conventions

- **Routing**: React Router v7. Routes are declared in `client/router.tsx` as nested `<Route>` elements under the root `<App />` route.
- **Components**: Functional components, one per file in `client/components/`, default exported.
- **Data**: Import fruits from `client/data/fruits.ts`. It is static — there is no API or server.
- **Styling**: Plain CSS in `client/main.css`, linked from `index.html`. Existing class: `.navlink-container` (flex row for nav links).
- **Formatting**: Prettier config in `package.json` — no semicolons, single quotes.

## Architecture Decisions

- **Layout route**: `App` is the root route element; page routes are its children and render through `<Outlet />`. Shared header/nav belongs in `App.tsx`.
- **Catch-all route**: `path="*"` renders `NotFound` as a child of the root, so the layout still shows on unknown URLs.
- **Static data module**: Fruits live in a TypeScript module rather than JSON or an API, keeping the project frontend-only.
- **No data fetching library, no backend**: Intentional. The `server/index.js` mentioned in `package.json`'s `main` field and the `express` mention in `README.md` are leftovers from the boilerplate — there is no server.

## Key Conventions

- Add new routes in `client/router.tsx` as `<Route>` children of the root route, above the `*` catch-all.
- New page components go in `client/components/`.
- All React Router imports come from `react-router`, not `react-router-dom`. `RouterProvider` is the one exception: it comes from `react-router/dom` (see `client/index.tsx`).
- ESLint and Prettier are strict — run `npm run lint` and `npm run format` before finishing.

## Potential Pitfalls

- **`Quiz` and `FruitDetail` are not routed**: `Nav` links to `/Quiz`, but `router.tsx` has no matching route, so it currently renders `NotFound`. Route paths are case-sensitive by default in React Router — keep the link and the route path consistent.
- **`Nav.tsx` declares its component as `Quiz`**: The function and default export in `Nav.tsx` are named `Quiz` (a copy-paste slip). It works because the import in `App.tsx` is by default-export, but it is confusing next to `Quiz.tsx`. Flag it to the student rather than silently renaming, unless asked.
- **`Nav.tsx` uses double quotes** on its `react-router` import, which Prettier will rewrite — run `npm run format`.
- **Placeholder text typos**: `Quiz.tsx` and `FruitDetail.tsx` contain "Paceholder" — they are meant to be replaced.
- **`<Outlet />` must stay in `App.tsx`**: Removing it stops all child routes rendering.
- **No fruit ids**: Detail routes need a param derived from `name`; names contain spaces and parentheses (e.g. `"Apples (Gala / Braeburn)"`), so encode or slugify them.
- **Remote images**: `imageUrl` points at Wikimedia Commons; images need an `alt` attribute (the ESLint a11y plugin is enabled).
- **`README.md` is stale**: It still describes the generic React boilerplate (and lists express). Don't treat it as a spec for this project.

## Related Documentation

- [README.md](README.md): Setup instructions (generic boilerplate text).
- [AGENTS.md](AGENTS.md): Shared AI context file — source of truth for all agent briefings.
- [CLAUDE.md](CLAUDE.md): Claude Code context (imports AGENTS.md; adds student exercises and tutoring guidelines).
- [GEMINI.md](GEMINI.md): Gemini AI context (self-contained summary of this file's content).
- No `fruit-stand-starter-solution` package exists yet.

## PromptKit Quick Reference
- Review the available artefacts when the student requests them:
  - Protocol: `promptkit/protocols/setup.md` — instructions for updating these CLI briefings.
  - Workflow: `promptkit/workflows/tutor.md` — guide for tutoring/explanation sessions.
  - Workflow: `promptkit/workflows/reflect.md` — guide for documenting outcomes and next steps.
- Student notes live in `promptkit/notes/`; The table in `progress-journal.md` is main place to update with reflections. Instructor Activities are in `promptkit/activities/` (read-only).
- When new workflows arrive, expect additional files under `promptkit/workflows/`.
