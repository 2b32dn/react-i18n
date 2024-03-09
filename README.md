# React + Vite

This is a boilerplate for integrating i18n or Internatiionalization for building a website where the user can select their desirable language.

# The Principle

`Wrapper.jsx` is a component that wraps around the <App/> with Context and Intl to provide the appropriate method and data for its inner child.

# Initial Setup

- `npm i`
- ``npm run dev` to launch the project

# To Add new language

- Create new JSON file for new language ex. ar.json for Arabic
- Import aforementioed json file into Wrapper.jsx
- Update the switch logic handler
