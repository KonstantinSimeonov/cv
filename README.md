# cv

My resume built as a Single page app with HTML5, CSS and JavaScript.

## Restoring client dependencies
```
npm install
```

## Running the app
- run in dev mode
```
npm run dev-server
```

- run only client with live-server
```
npm run dev-reload
```

## Building the client
```
npm run build
```

This will output a `./build` folder, which contains the built client.

### Tasklist
- Remove placeholders and fill in meaningful content
- Rewrite styles using a preprocessor
- Setup compile step for preprocessor css
- Setup build step for assets
- Refactor `skill.js`
    - extract the dialog window in a jquery widget so it can be reused
- Make margins and paddings of different components consisten
- Reorder the skill ellipses in a more fashionable way