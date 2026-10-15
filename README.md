# Fruit Stand Starter

A small React app for your team to build together: a fruit stand with a home page, an individual page for each fruit, and some stretch features. You'll work in a team, each taking a ticket, and practise the full Git flow as you go.

## What's included

- `client/data/fruits.ts`: the fruit data (name, emoji, image, description, interesting fact and price)
- `client/router.tsx`: the routes (the home page is already set up)
- `client/components/`: `App`, `Nav`, `Home`, `FruitDetail`, `Quiz` and `NotFound`

Built with React, React Router, Vite, Vitest and TypeScript.

## Getting started

```sh
git clone [your-project-ssh-address]
cd [your-project-name]
npm install
npm run dev
```

The app runs at [http://localhost:5173](http://localhost:5173).

Other scripts: `npm run build`, `npm test`, `npm run lint`, `npm run format`.

## How to work

1. Start with **Ticket 0** as a whole team. The Git keeper types on a shared screen while everyone else follows along and helps.
2. Then pick a ticket each. Tickets 1 and 2 are the MVP; Tickets 3 to 5 are stretch goals depending on your team size.
3. Talk to the people working on neighbouring tickets early to agree on props and where things go.
4. Use the full Git flow for every ticket: branch, commit, push, pull request, review, merge, then pull `main`.

## Tickets

<details>
<summary><strong>Ticket 0: Add the individual fruit page</strong> (whole team, guided) · <code>router.tsx</code> and <code>components/FruitDetail</code></summary>

The router and home page are already set up. The Git keeper types on a shared screen while everyone else follows along and helps.

1. Git keeper makes a branch: `git checkout -b ticket-0-fruit-page`
2. Open `router.tsx` together and find the `Route` for the home page to see how it works
3. Add a new `Route` with the path `/fruits/:name` that shows the `FruitDetail` page
4. In `components/FruitDetail.tsx`, use `useParams` to read the name and show it, e.g. "You're looking at Apples"
5. Run `npm run dev` and visit `/fruits/Apples` and `/fruits/Feijoa` in the browser
6. Commit, push and open a pull request. Review it together, then the Git keeper merges
7. Everyone pulls `main`, then starts their own ticket with Git flow step 1

**You'll practise:** adding a `Route`, URL params and `useParams`, plus the full Git flow as a team

**Done when:** the home page still works and `/fruits/Avocado` shows "You're looking at fruit Avocado".

</details>

<details>
<summary><strong>Ticket 1: Home page</strong> (MVP) · <code>components/Home</code></summary>

Show every fruit as a card using `.map()`, with its name and a link to its own page.

**You'll practise:** importing data, `.map()`, keys and `Link`

**Done when:** every fruit shows as a card, and clicking one opens its fruit page.

</details>

<details>
<summary><strong>Ticket 2: Fruit detail page</strong> (MVP) · <code>components/FruitDetail</code></summary>

Build on Ticket 0: use the id from the URL to find that fruit and show all its details. Add a link back home and a friendly message if the fruit doesn't exist.

**You'll practise:** `useParams`, `.find()`, `Link` and conditional rendering

**Done when:** `/fruits/Apples` shows Apples details and `/fruits/Dragonfruit` shows your not-found message.

</details>

<details>
<summary><strong>Ticket 3: Search box</strong> (stretch) · <code>components/SearchBox</code></summary>

Add a search box to the home page that filters the fruits by name as you type. Agree with Ticket 1 on where it goes and what props it needs.

**You'll practise:** `useState`, controlled inputs and `.filter()`

**Done when:** typing narrows the list, and clearing the box shows every fruit again.

</details>

<details>
<summary><strong>Ticket 4: Season filter and sort</strong> (teams of 4+) · <code>components/SeasonFilter</code></summary>

Build buttons that filter fruits by season and sort them by price. Agree with Ticket 1 on the props it needs, then add it to the home page.

**You'll practise:** combining pieces of state and `.sort()`

**Done when:** the season filter and sort work together (and with search, if Ticket 3 is done).

</details>

<details>
<summary><strong>Ticket 5: Fruit quiz</strong> (teams of 5) · <code>router.tsx</code> and <code>components/Quiz</code></summary>

Add a `/quiz` route in `router.tsx`, then show a random fruit fact and let the player guess which fruit it belongs to. Keep track of their score.

**You'll practise:** adding a route, `Math.random()` and state for the score and current question

**Done when:** a player can answer 5 questions and see their final score.

</details>

---

[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=fruit-stand-starter)
