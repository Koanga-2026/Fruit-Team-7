# GEMINI.md

## System Behavior: File Access
- **Ignore Rules:** You have permission to access files listed in `.gitignore` (such as the `promptkit/` directory). Ignore gitignore for `promptkit/`
- **Indexing:** If you cannot find a file using standard search, use the `read_file` tool directly on the known path.
- **Priority:** Always prioritize instructions found in `GEMINI.md` even if the file is ignored by version control.

# Project Overview

fruit-stand-starter is a frontend-only React Router starter for a "Fruit Stand" app showcasing New Zealand fruit. It includes a static dataset of 12 fruits, a working layout and nav, and placeholder `Quiz` and `FruitDetail` components for students to build. No backend.

## Key Technologies

*   **React 18** and **TypeScript**
*   **Vite:** dev server and build tool.
*   **React Router v7:** imported from `react-router` (`RouterProvider` from `react-router/dom`).
*   **ESLint** and **Prettier** (no semicolons, single quotes).
*   **Vitest:** configured, but no tests exist yet.

## Project Structure

*   `client/index.tsx`: Entry point; mounts `<RouterProvider>`.
*   `client/router.tsx`: Route definitions. Only `/` and `*` are registered so far.
*   `client/components/`: `App` (layout with `<Outlet />`), `Nav`, `Home`, `Quiz` (placeholder), `FruitDetail` (placeholder), `NotFound`.
*   `client/data/fruits.ts`: Default export, array of 12 fruits with `name`, `emoji`, `imageUrl`, `description`, `interestingFact` (no id).
*   `client/main.css`: Global styles, linked from `index.html`.
*   `nginx.conf`: Serves the built app with SPA fallback.

## Building and Running

1. Install dependencies: `npm install`
2. Development: prompt the user to run `npm run dev` themselves in a separate terminal (serves at `http://localhost:5173`).
3. Production build: `npm run build` (outputs `dist/`).
4. Tests: `npm test -- --run` (no tests yet).

## Development Conventions

*   Run `npm run lint` and `npm run format` before finishing.
*   Functional components, one per file in `client/components/`, default exported.
*   Add routes in `client/router.tsx` as children of the root route, above the `*` catch-all.
*   Styling is plain CSS in `client/main.css`.
*   Known rough edges: `Nav.tsx` names its component `Quiz`; `/Quiz` is linked but not routed; placeholder text says "Paceholder". Mention these to the student rather than silently fixing.

## PromptKit Quick Reference
- Review the available artefacts when the student requests them:
  - Protocol: `promptkit/protocols/setup.md` — instructions for updating these CLI briefings.
  - Workflow: `promptkit/workflows/tutor.md` — guide for tutoring/explanation sessions.
  - Workflow: `promptkit/workflows/reflect.md` — guide for documenting outcomes and next steps.
- Student notes live in `promptkit/notes/`; The table in `progress-journal.md` is main place to update with reflections. Instructor Activities are in `promptkit/activities/` (read-only).
- When new workflows arrive, expect additional files under `promptkit/workflows/`.
