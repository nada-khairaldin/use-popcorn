# usePopcorn 🎬

A movie search and rating app that fetches real-time data from the OMDB 
API, letting users search movies, rate watched titles, and persist their 
watchlist locally.

---

## Tech Stack
React · JavaScript (ES6+) · OMDB API · PropTypes · CSS3

## Key Concepts Applied
- Custom hooks for reusable logic (`useMovie`, `useLocalStorageState`)
- `AbortController` to cancel outdated API requests on fast user input
- `useRef` for tracking values without triggering re-renders
- Side effects with cleanup (keyboard event listeners, dynamic document title)
- Component composition using `children` props
- Reusable, prop-driven components validated with `PropTypes`

## Features
- Real-time movie search via the OMDB API
- Add/remove movies from a personal watchlist
- Custom star-rating system for watched movies
- Data persistence using `localStorage` (survives page refresh)
- Loading and error states for all async operations
- Keyboard shortcut (Escape) to close movie details

---

## Development Process

Built by layering functionality on top of a core search-and-display flow:

1. **Core UI** — search bar, movie list, and layout composition
2. **Data fetching** — connecting to the OMDB API with loading/error states
3. **Movie details view** — fetching and displaying full movie data on selection
4. **Rating system** — building a reusable `StarRating` component with 
   configurable props
5. **Persistence** — extracting watchlist logic into a custom 
   `useLocalStorageState` hook
6. **Refinement** — replacing a naive fetch with `AbortController` to 
   handle rapid search input correctly

---

## What I Learned
- `AbortController` is essential when a fetch is triggered by fast user 
  input (like typing) — without it, an older, slower response can 
  overwrite a newer one and display incorrect results
- `useRef` is the right tool for values that need to persist across 
  renders but shouldn't trigger a re-render themselves (e.g., counting 
  user actions for internal logic)
- Side effects that touch the DOM directly (event listeners, document 
  title) always need a cleanup function to avoid leaks or stale behavior
- Extracting repeated logic (like localStorage syncing) into a custom 
  hook removes duplication and keeps components focused on rendering

## Future Enhancements
- Extract the watchlist add/delete logic into its own custom hook 
  alongside `useLocalStorageState`, keeping `App.jsx` focused purely on 
  composition rather than state logic
- Add debouncing to the search input to reduce unnecessary API calls 
  while the user is still typing

---

## Folder Structure
```
src/
├── components/       # UI components (MovieList, MovieDetails, StarRating, etc.)
├── hooks/            # Custom hooks (useMovie, useLocalStorageState)
├── App.jsx           # Main composition and state orchestration
└── style.css
```
