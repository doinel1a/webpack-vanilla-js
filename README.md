[node]: https://nodejs.org/en
[yarn]: https://yarnpkg.com
[demo]: https://vanilla-js-starter.d1a.app
[license]: https://github.com/doinel1a/vanilla-js-starter/blob/main/LICENSE
[code-of-conduct]: https://github.com/doinel1a/vanilla-js-starter/blob/main/CODE_OF_CONDUCT.md
[issues]: https://github.com/doinel1a/vanilla-js-starter/issues
[pulls]: https://github.com/doinel1a/vanilla-js-starter/pulls
[browserslist]: https://browsersl.ist/#q=last+3+versions%2C%3E+0.2%25%2C+not+dead
[graphviz]: https://www.graphviz.org/download
[commitlint]: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
[vite-react-ts-repo]: https://github.com/doinel1a/vite-react-ts-starter
[vite-react-js-repo]: https://github.com/doinel1a/vite-react-js-starter
[vite-vanilla-ts-repo]: ''
[vite-vanilla-js-repo]: ''
[wp-react-ts-repo]: https://github.com/doinel1a/react-ts-starter
[wp-react-js-repo]: ''
[wp-vanilla-ts-repo]: ''
[wp-vanilla-js-repo]: https://github.com/doinel1a/vanilla-js-starter
[react-icon]: https://skillicons.dev/icons?i=react
[ts-icon]: https://skillicons.dev/icons?i=ts
[js-icon]: https://skillicons.dev/icons?i=js
[tailwind-icon]: https://skillicons.dev/icons?i=tailwind
[chrome-icon]: https://github.com/alrra/browser-logos/blob/main/src/chrome/chrome_64x64.png
[firefox-icon]: https://github.com/alrra/browser-logos/blob/main/src/firefox/firefox_64x64.png
[edge-icon]: https://github.com/alrra/browser-logos/blob/main/src/edge/edge_64x64.png
[opera-icon]: https://github.com/alrra/browser-logos/blob/main/src/opera/opera_64x64.png
[safari-icon]: https://github.com/alrra/browser-logos/blob/main/src/safari/safari_64x64.png

# Webpack Vanilla JavaScript — Starter template

Are you looking for a way to supercharge your development experience and build stunning web applications with ease? You are in the right place!
This development starter template is the ultimate solution to help you getting started on your project in no time, without the hassle of setting up and configuring your development environment from scratch each time you start working.
This template is ideal for front-end developers who want to build modern, fast and reliable web applications with the latest cutting edge technologies such as **JavaScript**, **Tailwind CSS**, **ESLint**, **Prettier**, **Husky**, **Webpack**, **Babel**, **Core-JS** and much more!

[Demo][demo] — [Bug(label: bug)][issues] — [Feature(label: enhancement)][issues]

## :bookmark: Table of contents

- :package: [Features](#package-features "Go to 'Features' section")
- :computer: [Getting started](#computer-getting-started "Go to 'Getting started' section")
- :arrows_clockwise: [Versions](#arrows_clockwise-versions "Go to 'Versions' section")
- :globe_with_meridians: [Browsers support](#globe_with_meridians-browsers-support "Go to 'Browsers support' section")
- :busts_in_silhouette: [Contribute](#busts_in_silhouette-contribute "Go to 'Contribute' section")
- :bookmark_tabs: [License](#bookmark_tabs-license "Go to 'License' section")
- :gem: [Acknowledgements](#gem-acknowledgements "Go to 'Acknowledgements' section")

---

## :package: Features

This development starter template comes fully equipped with all the necessary tools to create modern, responsive and fast web applications, including:

- **JavaScript**: A programming language used primarily for creating dynamic web content and interactive user interfaces;
- **Tailwind CSS**: A utility-first CSS framework that provides predefined classes for common styles and layout patterns, allowing quick styling without writing custom CSS;
- **SASS**: A CSS preprocessor that adds features such as variables, nesting, and mixins to CSS, making it easier to write and maintain large CSS codebases;
- **PostCSS**: A tool for transforming CSS with JavaScript plugins, allowing to add new features to CSS and improve the development process:
  - **Autoprefixer**: A PostCSS plugin that adds vendor prefixes to CSS properties, ensuring cross-browser compatibility;
  - **CSSnano**: A PostCSS plugin that minifies CSS code, reducing file size and improving page load times;
- **Fontawesome**: A library with over 5000 free icons that can be easily customized and used in web applications;
- **Playwright**: A library for automating web browser interactions, allowing the writing of end-to-end tests and perform browser automation tasks;
- **Webpack**: A build tool and development server that provides fast and efficient development and production builds for modern web applications:
  - **Babel**: A compiler used for both compilation and bundling both JavaScript and TypeScript into cross-browser compatible supported code;
  - **Core-JS**: A modular standard library that provides polyfills for new features introduced in the latest ECMAScript specifications and helps ensure cross-browser compatibility;
  - **Partytown**: A lazy-loaded library to help relocate resource intensive scripts into a web worker, and off of the main thread. Its goal is to help speed up sites by dedicating the main thread to your code, and offloading third-party scripts to a web worker;

And with tools that enhance the development experience:

- **Dependency cruiser**: A tool for visualizing and analyzing the dependencies between modules in a project, helping to identify potential issues and improve code maintainability;
- **ESLint**: A tool for enforcing coding standards and identifying potential errors in the code;
- **Prettier**: A code formatter that automatically formats code to conform to a consistent style, making it easier to read and maintain;
- **Husky**: A Git hook manager that allows easy set up and configuration of Git hooks, which are scripts that run at certain points in the Git workflow;
- **Commitlint**: A tool for enforcing commit message conventions in Git repositories, helping to ensure consistent and informative commit messages;

[Back to:arrow_up:](#webpack-vanilla-javascript--starter-template "Back to 'Table of contents' section")

---

## :computer: Getting started

### Prerequisites:

- JavaScript runtime [Node][node];
- **(OPTIONAL)** <br />
  [Yarn][yarn] package manager: `npm install --global yarn`;

### To get started with this template:

- Get the repository:

  - click **"Use this template"** button <br/> or
  - click the **"Fork"** button <br/> or
  - **clone** the repository `git clone https://github.com/doinel1a/vanilla-js-starter/ YOUR-PROJECT-NAME`;

- Open the terminal or the code editor, to the path your project is located, and run:

  - With **NPM** :
    - To **install** the dependencies: `npm install`;
    - To **run** the **development server**: `npm run dev`;
    - To **build** your app **for production**: `npm run build`;
    - To **preview** your **production optimized app**: `npm run preview`;
  - With **Yarn** :
    - To **install** the dependencies: `yarn install`;
    - To **run** the **development server**: `yarn dev`;
    - To **build** your app **for production**: `yarn build`;
    - To **preview** your **production optimized app**: `yarn preview`;

- **Keep in mind**:
  - The `dependency-cruiser` package needs the GraphViz `dot` command in order to work. On most linux and comparable operating systems it will be awailable by default, if it's not the case check [GraphViz][graphviz] page for instructions, especially Windows users;
  - The `playwright` package needs specific versions of browser binaries to operate, you can install them by running:
    - With **NPM** :
      `npx playwright install`;
    - With **Yarn** :
      `yarn playwright install`;

[Back to:arrow_up:](#webpack-vanilla-javascript--starter-template "Back to 'Table of contents' section")

---

## :arrows_clockwise: Versions

**Webpack** and **Vite** are popular build tools for web applications, but they differ in terms of build speed and configuration. Vite is faster than Webpack, especially for large projects, and has a more "zero-config" approach. Both tools support **SWC** as a compiler, but Vite is optimized for it out of the box, making it even faster. If you prioritize speed and ease of use, go with the Vite versions. If you need more control over your build process, choose the Webpack version.

### Vite:

|                           React - TypeScript                            |                           React - JavaScript                            |     Vanilla TypeScript      |     Vanilla JavaScript      |
| :---------------------------------------------------------------------: | :---------------------------------------------------------------------: | :-------------------------: | :-------------------------: |
| ![React][react-icon] & ![TS][ts-icon] <br /> [Repo][vite-react-ts-repo] | ![React][react-icon] & ![JS][js-icon] <br /> [Repo][vite-react-js-repo] | ![TS][ts-icon] <br /> Soon! | ![JS][js-icon] <br /> Soon! |

### Webpack:

|                          React - TypeScript                           |                 React - JavaScript                 |     Vanilla TypeScript      |       Vanilla JavaScript        |
| :-------------------------------------------------------------------: | :------------------------------------------------: | :-------------------------: | :-----------------------------: |
| ![React][react-icon] & ![TS][ts-icon] <br /> [Repo][wp-react-ts-repo] | ![React][react-icon] & ![JS][js-icon] <br /> Soon! | ![TS][ts-icon] <br /> Soon! | ![JS][js-icon] <br /> This repo |

[Back to:arrow_up:](#webpack-vanilla-javascript--starter-template "Back to 'Table of contents' section")

---

## :globe_with_meridians: Browsers support

The provided configuration ensures **92.3 %** of **global browsers** , especially it supports the last three versions of the following browsers:

|            Chrome             |             Firefox              |             Edge             |        Opera         | Safari                       |
| :---------------------------: | :------------------------------: | :--------------------------: | :------------------: | ---------------------------- |
| ![Google Chrome][chrome-icon] | ![Mozilla Firefox][firefox-icon] | ![Microsoft Edge][edge-icon] | ![Opera][opera-icon] | ![Apple Safari][safari-icon] |

In order to support a wider percentage of browsers and meet your project requirements, update the `./.browserslistrc` configuration file:

1. `last 3 versions`: the versions of each browser;
2. `> 0.2%`: the browsers usage statistics;
3. `not dead`: the browsers official support or updates;

You can play with the configurations [here][browserslist] and check in real-time the **global browsers support** .

_The more versions to support, larger JS and CSS bundles size will be._

[Back to:arrow_up:](#webpack-vanilla-javascript--starter-template "Back to 'Table of contents' section")

---

## :busts_in_silhouette: Contribute

Contributions are what make the open source community such an amazing place to learn, inspire, and create.  
Any contribution is greatly appreciated: big or small, it can be documentation updates, adding new features or something bigger.  
Please check the [**contributing guide**][code-of-conduct] for details on how to help out and keep in mind that all commits must follow the **[conventional commit format][commitlint]**.

### How to contribute:

1.  [Get started](#computer-getting-started "Go to 'Getting started' section");
2.  For a new feature:
    1.  Create a new branch: `git checkout -b feat/NEW-FEATURE`;
    2.  Add your changes to the staging area: `git add PATH/TO/FILENAME.EXTENSION`;
    3.  Commit your changes: `git commit -m "feat: NEW FEATURE"`;
    4.  Push your new branch: `git push origin feat/NEW-FEATURE`;
3.  For a bug fix:
    1.  Create a new branch: `git checkout -b fix/BUG-FIX`;
    2.  Add your changes to the staging area: `git add PATH/TO/FILENAME.EXTENSION`;
    3.  Commit your changes: `git commit -m "fix: BUG FIX"`;
    4.  Push your new branch: `git push origin fix/BUG-FIX`;
4.  Open a new [pull request][pulls];
5.  Once your pull request has been merged, you can delete the branch;

[Back to:arrow_up:](#webpack-vanilla-javascript--starter-template "Back to 'Table of contents' section")

---

## :bookmark_tabs: License

All logos and trademarks are the property of their respective owners.  
Everything else is distributed under the **MIT License** .  
See the [LICENSE][license] file for more informations.

[Back to:arrow_up:](#webpack-vanilla-javascript--starter-template "Back to 'Table of contents' section")

---

## :gem: Acknowledgements

Special thanks to:

- [alrra](https://github.com/alrra) for [browser-logos](https://github.com/alrra/browser-logos);
- [tandpfun](https://github.com/tandpfun) for [skill-icons](https://github.com/tandpfun/skill-icons);

[Back to:arrow_up:](#webpack-vanilla-javascript--starter-template "Back to 'Table of contents' section")
