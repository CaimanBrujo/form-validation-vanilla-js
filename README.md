# Form Validation

A minimal project using Webpack 5 to build a form with **live validation** using **vanilla JavaScript** and the native **Constraint Validation API**.

Includes custom error messages, input styling, and success feedback — no third-party libraries required.

> Built on top of the `template-webpack` boilerplate. Plug and play.

## Getting Started

1. Clone this project

```bash
git clone git@github.com:CaimanBrujo/template-webpack.git form-validation-vanilla-js
cd form-validation-vanilla-js
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

This opens the project at http://localhost:8080 with live reload enabled.

## Features

- Native form validation using JavaScript
- Custom error messages and styling
- Password confirmation check
- Dark theme with CSS variables
- Responsive and clean layout
- ESLint + Prettier integrated (via base template)

## How It Works

This project uses the **Constraint Validation API**, built into modern browsers, to check input validity without external libraries.

The HTML defines rules using attributes like `required`, `type`, `pattern`, and `minlength`. JavaScript reads those rules using properties like:

- `input.validity.valueMissing`: field is required and empty
- `input.validity.typeMismatch`: e.g. invalid email format
- `input.validity.tooShort`: input is shorter than the minlength value
- `input.validity.valid`: returns true only if all validation passes
- `form.checkValidity()`: checks if all form inputs are valid
- `input.setCustomValidity()`: allows setting a custom error message manually

The script listens for `blur` events to validate fields live, and checks all fields again on `submit`.

## Code Quality: ESLint + Prettier

This project uses [ESLint](https://eslint.org/) for code linting and [Prettier](https://prettier.io/) for code formatting.

### ▶Lint your code

```bash
npm run lint
```

This runs ESLint on all `.js` files under `src/` and reports any errors or bad practices (e.g. use of `var`, missing semicolons, etc.).

### Format your code

```bash
npm run format
```

Runs Prettier to format `.js`, `.css`, and `.html` files based on `.prettierrc` configuration.

## Build for Production

```bash
npm run build
```

Generates the `/dist` folder with:

- Bundled `main.js`
- Extracted and minified `main.css`
- Auto-generated `index.html` from template
- Optimized assets inside `dist/assets/`

## Project Structure

```
form-validation-vanilla-js/
├── dist/
├── src/
│   ├── css/style.css
│   ├── index.js
│   └── template.html
├── eslint.config.js
├── .prettierrc
├── .prettierignore
├── .gitignore
├── package.json
├── webpack.config.js
└── README.md
```

## Live Demo

[Add link here if hosted]

## Author

Made with code by [Caimán Brujo](https://github.com/CaimanBrujo)
