# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Idées pour le projet

Construire un système d’adressage hiérarchique, géré par petits blocs (rang par rang), au lieu d’un gros fichier JSON ingérable.
Chaque “rang” est indépendant mais liés par une relation d’ascendance / descendance → ce qui permet de naviguer dans les deux sens.

    •   État → n’a pas à gérer les adresses, juste les villes.
    •	Ville → ne gère pas toutes les rues, juste ses ZIP.
    •	ZIP → a la charge de sa zone (adresses précises).

PS : Index global pour les entrées directes (ZIP, Ville) pour une recherche rapide. Mais Adresse toujours disabled si ZIP non renseigné
