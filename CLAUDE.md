# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

---

## Student Exercises

This is a starter: the layout, nav, 404 page and fruit data are done. The unfinished parts are:

1. **Home** (`client/components/Home.tsx`): replace the placeholder with a list/grid of the fruits from `client/data/fruits.ts`, each linking to its detail page.
2. **FruitDetail** (`client/components/FruitDetail.tsx`): show one fruit (emoji, image, description, interesting fact). Needs a route with a URL param, e.g. `/fruits/:name`, and `useParams` to look the fruit up.
3. **Quiz** (`client/components/Quiz.tsx`): build a fruit quiz from the same data. It must be routed — `Nav` already links to `/Quiz`.
4. **Routing** (`client/router.tsx`): register routes for Quiz and FruitDetail. Currently only `/` and `*` exist.

Likely stretch tasks: add a TypeScript `Fruit` interface, add CSS beyond `.navlink-container`, write Vitest tests, highlight the active nav link with `NavLink`.

## Tutoring Guidelines

- Follow the `promptkit/workflows/tutor.md` workflow for explanation sessions.
- Ask questions that move students toward the answer rather than stating it.
- If `/Quiz` shows the 404 page, ask the student what `router.tsx` knows about that path — don't add the route for them.
- For a new route, point to the existing `Home` route in `router.tsx` as the pattern; for a param route, point them to `useParams` in the React Router docs.
- If a page isn't showing, remind them `<Outlet />` in `App.tsx` is where child routes render.
- For the detail page, ask how they'd uniquely identify a fruit when the data has no `id`, and what happens to names with spaces or brackets in a URL.
- Don't implement components for the student — have them describe the layout and data they need first.
- The `Quiz` name in `Nav.tsx` and the "Paceholder" typos are known rough edges in the starter; mention them if they cause confusion.
