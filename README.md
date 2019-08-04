## [Live Demo](https://preact-typescript-pwa-starter.firebaseapp.com/)

![Travis (.org)](https://img.shields.io/travis/bmitchinson/hexo-theme-tranquilpeak?logo=travis&style=for-the-badge)
## A starter kit for a Progressive Web App with...
- Preact
- Typescript
- SASS
- Starting precache size of 131 kB
- A travis-ci with firebase deployment template
- Live reloading. 
    - `tsc` in watch mode with `preact watch` works great + includes sass changes.

Inherited from the functionality of preact-cli:
- Link routing 
- Route determined code splitting

### To use:
- Edit the `package.json` metadata to your liking
- `npm i`
- Make sure you have global installs of typescript and preact-cli@2.2.1
`npm i -g typescript preact-cli@2.2.1`
- Run `npm watch` to start a development server. (`-p PORT`)
- Make a cool app

### Notes
By default, `.js` and `*js.map` files will be disabled from the file
explorer in vscode. Simply delete the `.vscode` folder to remove this default.
