# Redux-Toolkit-CRUD
Redux, React, TailwindCss, 

## Available Scripts
### `Redux, React, TailwindCss, With Srever`  
In the project directory, you can run:

### `npm install`

Instal All dependencies in this project

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Link

Reactjs: https://reactjs.org/docs/create-a-new-react-app.html
TailwindCSS: https://tailwindcss.com/
Redux Toolkit: https://redux-toolkit.js.org/tutorials/quick-start
Hero Icon: https://heroicons.com/
ReactRouter: https://reactrouter.com/
UUID: https://www.npmjs.com/package/uuid?activeTab=readme


### Video Tutorial

You can see my youtube video for this project in [here](https://youtu.be/SgnlgEEkqSo)  
### Tailwind setup

`npm install -D tailwindcss autoprefixer postcss`  
&
postcss.config.cjs file
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
&  
tailwind.config.cjs file
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {},
  },
  plugins: [],
};
```
&  
index.css file  
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
