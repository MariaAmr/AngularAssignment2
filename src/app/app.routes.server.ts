import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: "home", renderMode: RenderMode.Server },
  { path: "about", renderMode: RenderMode.Server },
  { path: "meals", renderMode: RenderMode.Server },
  { path: "meals/seafood", renderMode: RenderMode.Server },
  { path: "meals/pasta", renderMode: RenderMode.Server },
  { path: "meals/pizza", renderMode: RenderMode.Server },
  { path: "team", renderMode: RenderMode.Server },
  { path: "contacts", renderMode: RenderMode.Server },
  {
    path: "**",
    renderMode: RenderMode.Client,
  },
];