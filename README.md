# cv

My resume built as a Single page app with HTML5, CSS and JavaScript. [See it in action](https://simeonov-resume.herokuapp.com/)

## How to run

- dev:
```
yarn && yarn build:watch
```

- production build:
```
yarn && cd build && yarn start
```

## Todos:
- Implement some way to declare child components via handlebars.
- DOM manipulation in the app is not complicated at all. Ditch jQuery.
- Implement lifecycle hooks for components - mount, unmount.
- Components should implement update and/or data comparison to determine whether they should update.
- Show dat eslint configuration some love.
- Maybe use gulp to handle non-bundling tasks like copying/deleting stuff.
- Maybe use shell-js instead of shell script.
