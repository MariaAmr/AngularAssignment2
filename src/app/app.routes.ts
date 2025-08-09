import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contacts } from './components/contacts/contacts';
import { Meals } from './components/meals/meals';
import { Seafood } from './components/seafood/seafood';
import { Pasta } from './components/pasta/pasta';
import { Pizza } from './components/pizza/pizza';
import { Team } from './components/team/team';
import { Error } from './components/error/error';

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", title: "Home", component: Home },
  { path: "about", title: "About", component: About },
  {
    path: "meals",
    title: "Meals",
    component: Meals,
    children: [
      { path: "", title: "Seafood", component: Seafood },
      { path: "seafood", title: "Seafood", component: Seafood },
      { path: "pasta", title: "Pasta", component: Pasta },
      { path: "pizza", title: "Pizza", component: Pizza },
    ],
  },
  { path: "team", title: "Team", component: Team },
  { path: "contacts", title: "Contacts", component: Contacts },
  { path: "404", title: "Page Not Found", component: Error },
  { path: "**", redirectTo: "/404" },
];
