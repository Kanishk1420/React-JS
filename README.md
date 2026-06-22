# React Learning Journey

A structured, topic-by-topic repository documenting my journey of learning React from the absolute basics to advanced patterns. Each topic lives in its own folder as a standalone Vite project, so it can be opened and run independently.

The repository is organized as a progressive curriculum: early folders cover core fundamentals, while later folders move into performance, advanced hooks, routing, and state-sharing patterns that are commonly expected in real projects and interviews.

## Tech Stack

- React 18 / 19
- Vite (build tool and dev server)
- React Router DOM (routing)
- Redux Toolkit (state management basics)
- Context API (global state)
- Tailwind CSS and inline styling
- Axios / Fetch (API calls)
- Lucide React (icons)

## Repository Structure

Every topic is a self-contained Vite application with its own `package.json`. The general layout inside each topic is:

```
Topic XX- <Name>/
  src/
    components/      reusable and topic-specific components
    pages/           route-level components (where routing is used)
    context/         context providers and hooks (where context is used)
    redux/           store and slices (where Redux is used)
    App.jsx
    main.jsx
  index.html
  package.json
  vite.config.js
```

## Topics Covered

### Fundamentals

| Topic | Focus | Depth |
|-------|-------|-------|
| 1. Printing text through JS by DOM | How the DOM works before React, manual rendering | Intro |
| 2. Import and Export | ES modules, named vs default exports | Core |
| 3. JSX | JSX syntax, expressions, rules | Core |
| 4. Setting up React with Vite | Project scaffolding, dev server, structure | Core |
| 5. Props | Passing data, prop types of usage | Core |
| 6. Cards Project (Props Drilling) | Passing props through multiple levels | Project |
| 7. Tailwind CSS | Utility-first styling, configuration | Core |

### Hooks and State

| Topic | Focus | Depth |
|-------|-------|-------|
| 8. Functions and Hooks | useState (basic and advanced), event handling, controlled forms | Core |
| 9. Notes Application | First full CRUD-style project using state | Project |
| 10. LocalStorage and API Calls | Persisting data, fetching from APIs | Core |
| 11. useEffect | Side effects, dependency arrays, mount behaviour | Core |
| 12. Gallery Project | Combining state, effects, and components | Project |

### Routing and Composition

| Topic | Focus | Depth |
|-------|-------|-------|
| 13. React Router | Routes, nested routes, dynamic params, 404 handling, useNavigate, useParams, Outlet | Core |
| 14. Children as Props | Component composition with the children prop | Core |

### State Management

| Topic | Focus | Depth |
|-------|-------|-------|
| 15. Context API | createContext, Provider, useContext for global state | Core |
| 16. Redux Toolkit | configureStore, createSlice, reducers (counter and theme slices) | Basics |
| 17. Search Images Project | Larger project using Redux slices, Axios, pagination, tabs, and collections | Project |

### Advanced React

| Topic | Focus | Depth |
|-------|-------|-------|
| 18. Component Patterns | Reusable components, composition, pricing/card patterns | Advanced |
| 19. Rendering, Performance and Hooks | useRef, useMemo, useCallback, React.memo, useId, custom hooks, render optimization | Advanced |
| 20. Advanced Routing | Lazy loading with Suspense, protected routes, layout routes, Navigate, useLocation | Advanced |
| 21. Advanced Context API | Memoized context value, custom hook wrappers, multiple contexts, provider composition (mini project: Theme + Auth + Cart) | Advanced |

## Projects in This Repository

- Cards Project (Topic 6) – props and props drilling
- Notes Application (Topic 9) – state-driven CRUD
- Gallery Project (Topic 12) – state, effects, and component structure
- Search Images Project (Topic 17) – Redux Toolkit, Axios, pagination, tabbed results
- Advanced Context Mini App (Topic 21) – combines Theme, Auth (protected routes with login/logout), and a Cart that fetches products from an external API.

## Running Any Topic

Each topic is an independent project. To run one:

```bash
cd "Topic XX- <Name>"
npm install
npm run dev
```

Then open the local URL shown in the terminal (typically `http://localhost:5173`).

Some topics that use API keys or credentials (for example the login flow in Topic 21) rely on a `.env` file with Vite environment variables prefixed by `VITE_`.

## Special Thanks

This learning journey was guided by two excellent creators. Full credit to them for the teaching and explanations.

### Topics 1 to 17 — Sheryians Coding School

The fundamentals through the Search Images project were learned from the comprehensive single-video course:

- Video: [ReactJS Full Course | ReactJS - Learn Everything](https://youtu.be/3LRZRSIh_KE)
- Channel: [Sheryians Coding School](https://www.youtube.com/@sheryians)

### Topics 18 Onwards — Thapa Technical

The advanced topics (component patterns, performance and hooks, advanced routing, and advanced context) were learned from the Hindi React 19 series:

- Playlist: [React.js v19 Tutorials in Hindi - 2025](https://youtube.com/playlist?list=PLwGdqUZWnOp1Rab71vx2zMF6qpwGDB2Z1)
- Channel: [Thapa Technical](https://www.youtube.com/@ThapaTechnical)

If you want to understand any of these topics in more depth, visiting the original channels above is highly recommended.
