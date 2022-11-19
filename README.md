<!-- HEADER -->
<div align="center">
	<img title="doinel1a logo" src="https://github.com/doinel1a/vanilla-js-starter/blob/main/public/favicon/favicon-512.png" alt="doinel1a logo" width=152 />
	<hr />
	<h1 title="Repository name">Vanilla JavaScript — Starter</h1>
	<p>Open source Vanilla JS starter boilerplate / template configured, with Webpack, Babel, Core-JS, Tailwind CSS and much more, to quickly bootstrap the foundations for building  Apps, SPAs, landing pages or websites.</p>
	<p>
		| —
			<a title="View demo" href="https://vanilla-js-starter.d1a.app/">Demo</a>
      —
			<a title="Report a bug" href="https://github.com/doinel1a/vanilla-js-starter/issues">Bug <strong>(label: bug)</strong></a>
      —
			<a title="Request a feature" href="https://github.com/doinel1a/vanilla-js-starter/issues">Feature <strong>(label: enhancement)</strong></a>
    — |
	</p>
</div>
<!-- END HEADER -->

<!-- TABLE OF CONTENT -->
<hr />
<h2 title="'Table of contents' section" name="table-of-contents">:bookmark: Table of contents</h2>
<ul>
  <li>
    :package: <a title="Go to 'Features' section" href="#features">Features</a>
  </li>
  <li>
    :arrows_clockwise: <a title="Go to 'Versions' section" href="#versions">Versions</a>
  </li>
  <li>
    :globe_with_meridians: <a title="Go to 'Browsers support' section" href="#browsers-support">Browsers support</a>
  </li>
  <li>
    :computer: <a title="Go to 'Getting started' section" href="#getting-started">Getting started</a>
  </li>
  <li>
    :white_check_mark: <a title="Go to 'To do' section" href="#to-do">To do</a>
  </li>
  <li>
    :busts_in_silhouette: <a title="Go to 'Contribute' section" href="#contribute">Contribute</a>
  </li>
  <li>
    :phone: <a title="Go to 'Contacts' section" href="#contacts">Contacts</a>
  </li>
  <li>
    :bookmark_tabs: <a title="Go to 'License' section" href="#license">License</a>
  </li>
	<li>
    :gem: <a title="Go to 'Acknowledgements' section" href="#acknowledgements">Acknowledgements</a>
  </li>
</ul>
<!-- END TABLE OF CONTENT -->

<!-- FEATURES -->
<hr />
<h2>
  :package: <a title="'Features' section" name="features">Features</a>
</h2>
<p>
  This repository comes packed with a variety of tools that makes development headache free: 
</p>
<ul>
  <li>
    <a title="'Webpack' official website" href="https://webpack.js.org/">Webpack</a>&nbsp; :wrench: &nbsp;<code>./webpack.config.js</code>
    <br />
    Configured to manage and optimize all project files:
    <ul>
      <li>HTML</li>
      <ul>
        <li>
          <a title="'html-webpack-plugin' github repository" href="https://github.com/jantimon/html-webpack-plugin">html-webpack-plugin
          </a>
          <br />
          Creates dynamic HTML files starting from a template.
        </li>
      </ul>
      <li>JS</li>
      <ul>
        <li>
          <a title="'Babel' official website" href="https://babel.dev/docs/en/babel-core">@babel/core</a>
          ,           
          <a title="'Babel' official website" href="https://babel.dev/docs/en/babel-preset-env">@babel/preset-env</a>
           and 
          <a title="'core-js' github repository" href="https://github.com/zloirock/core-js/">core-js</a>
          <br />
          Compiles modern JavaScript code into backward compatible code.
        </li>
        <li>
          <a title="'babel-loader' github repository" href="https://github.com/babel/babel-loader">babel-loader
          </a>
          <br />
          Transpiles JavaScript files using Babel and Webpack.
        </li>
      </ul>
      <li>SASS / SCSS and CSS</li>
      <ul>
        <li>
          <a title="'postcss' github repository" href="https://github.com/postcss/postcss">postcss
          </a>
          <ul>
            <li>
              <a title="'autoprefixer' github repository" href="https://github.com/postcss/autoprefixer">autoprefixer
              </a>
              <br />
              Compiles modern SASS / SCSS and CSS styles into backward compatible styles.
              </li>
            <li>
              <a title="'tailwindcss' github repository" href="https://github.com/tailwindlabs/tailwindcss">tailwindcss
              </a>
              <br />
              Extracts tailwind's classes from files.
            </li>
            <li>
              <a title="'SASS' official website" href="https://sass-lang.com/">sass
              </a>
              <br />
              Gives CSS superpowers.
            </li>
            <li>
              <a title="'cssnano' github repository" href="https://github.com/cssnano/cssnano">cssnano
              </a>
              <br />
              Compress CSS files to be production ready.
            </li>
          </ul>
        </li>
        <li>
          <a title="'Webpack' official website" href="https://webpack.js.org/">webpack
          </a>
          <ul>
            <li>
              <a title="'sass-loader' github repository" href="https://github.com/webpack-contrib/sass-loader">sass-loader
              </a>
              <br />
              Compiles SASS / SCSS files to CSS.
            </li>
            <li>
              <a title="'postcss-loader' github repository" href="https://github.com/webpack-contrib/postcss-loader">postcss-loader
              </a>
              <br />
              Process CSS with PostCSS.
            </li>
            <li>
              <a title="'css-loader' github repository" href="https://github.com/webpack-contrib/css-loader">css-loader
              </a>
              <br />
              Interprets @import and url() like import/require() and resolved them.
            </li>
            <li>
              <a title="'mini-css-extract-plugin' github repository" href="https://github.com/webpack-contrib/mini-css-extract-plugin">mini-css-extract-plugin
              </a>
              <br />
              Extracts CSS into separate files.
            </li>
          </ul>
        </li>
      </ul>
      <li>Images</li>
      <li>Fonts</li>
    </ul>
  </li>
  <br />
  <li>
    <strong>** </strong><a title="'Babel' official website" href="https://babeljs.io/">Babel</a> and <a title="CoreJS official repository" href="https://github.com/zloirock/core-js/">Core-JS</a>&nbsp; :wrench: &nbsp;<code>./.babelrc.js</code>
    <br />
    Configured to compile and polyfill modern JavaScript code into backwards compatible code based on <code><a title="'browserslist' github repository" href="https://github.com/browserslist/browserslist">./.browserslistrc</code></a> configuration.
  </li>
  <br />
  <li>
    <strong>** </strong><a title="'Tailwind CSS' official website" href="https://tailwindcss.com/">Tailwind CSS</a>&nbsp; :wrench: &nbsp;<code>./tailwind.config.js</code> and <code>./postcss.config.js</code>
    <br />
    Configured to use tailwind's classes as well as using custom created SASS / SCSS and CSS classes.
    Those automatically will be compiled into backwards compatible CSS based on <code><a title="'browserslist' github repository" href="https://github.com/browserslist/browserslist">./.browserslistrc</code></a> configuration.
  </li>
  <br />
  <li>
    <a title="'Playwright' official website" href="https://playwright.dev/">Playwright</a>&nbsp; :wrench: &nbsp;<code>./tests/browsers.test.js</code>
    <br />
    Allows cross-browser testing.
  </li>
  <br />
  <li>
    <a title="'ESLint' official website" href="https://eslint.org//">ESLint</a>&nbsp; :wrench: &nbsp;
    <code>./.eslintrc.js</code>
    <br />
    Configured to find and fix problems in the code:
    <ul>
      <li>
        <a title="'eslint-plugin-prettier' github repository" href="https://github.com/prettier/eslint-plugin-prettier">eslint-plugin-prettiert</a>
        <br /> 
        Runs Prettier as an ESLint rule.
      </li>
      <li>
        <a title="'eslint-plugin-import' github repository" href="https://github.com/import-js/eslint-plugin-import">eslint-plugin-import</a>
        <br /> 
        Supports linting of new ES import/export syntax.
      </li>
      <li>
        <a title="'eslint-plugin-simple-import-sort' github repository" href="https://github.com/lydell/eslint-plugin-simple-import-sort">eslint-plugin-simple-import-sort</a>
        <br /> 
        Auto-sorts imports.
      </li>
      <li>
        <a title="'eslint-plugin-promise' github repository" href="https://github.com/eslint-community/eslint-plugin-promise">eslint-plugin-promise</a> 
        <br /> 
        Enforces best practices for promises.
      </li>
      <li>
        <a title="'eslint-plugin-sonarjs' github repository" href="https://github.com/SonarSource/eslint-plugin-sonarjs">eslint-plugin-sonarjs</a>
         and 
        <a title="'eslint-plugin-unicorn' github repository" href="https://github.com/sindresorhus/eslint-plugin-unicorn">eslint-plugin-unicorn</a>
        <br />
        Detects bugs and suspicious patterns.
      </li>
    </ul>
  </li>
  <br />
  <li>
    <a title="'Partytown' official website" href="https://partytown.builder.io/">Partytown</a>
    <br />
    Allows lazy-loading third parties modules off the main thread.
  </li>
</ul>
<p><strong>** </strong><em>The more versions to support, larger JS and CSS bundles will be.</em></p>
<p  align="right"><a title="Back to 'Table of contents' section" href="#table-of-contents">Back to:arrow_up:</a></p>
<!-- END FEATURES -->

<!-- VERSIONS -->
<hr />
<h2>
    :arrows_clockwise: <a title="'Versions' section" name="versions">Versions</a>
</h2>
<table>
  <tr>
    <td align="center">
      <strong>
        Vanilla <a title="'JavaScript' official website" href="https://www.javascript.com/">JS</a>
      </strong>
    </td>
	  <td align="center">
      <strong>
        Vanilla <a title="'TypeScript' official website" href="https://www.typescriptlang.org/">TS</a>
      </strong>
    </td>
    <td align="center">
      <strong>
        <a title="'React' official website" href="https://reactjs.org/">React</a> 
        -
        <a title="'JavaScript' official website" href="https://www.javascript.com/">JS</a>
      </strong>
    </td>
    <td align="center">
      <strong>
        <a title="'React' official website" href="https://reactjs.org/">React</a>
        -
        <a title="'TypeScript' official website" href="https://www.typescriptlang.org/">TS</a>
      </strong>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img title="JavaScript" src="https://skillicons.dev/icons?i=js" alt="JavaScript" />
      &
      <img title="Tailwind CSS" src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" />
      <br />
      This repository
    </td>
	  <td align="center">
      <img title="TypeScript" src="https://skillicons.dev/icons?i=ts" alt="TypeScript" />
      &
      <img title="Tailwind CSS" src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" />
      <br />
      Coming Soon!
    </td>
    <td align="center">
		  <img title="React" src="https://skillicons.dev/icons?i=react" alt="React" />
		  &
      <img title="JavaScript" src="https://skillicons.dev/icons?i=js" alt="JavaScript" />
		  <br />
      Coming Soon!
    </td>
    <td align="center">
		  <img title="React" src="https://skillicons.dev/icons?i=react" alt="React" />
		  &
		  <img title="TypeScript" src="https://skillicons.dev/icons?i=ts" alt="TypeScript" />
		  <br />
      <a title="'React - TS' repository" href="https://github.com/doinel1a/react-ts-starter">Repository</a>
    </td>
  </tr>
</table>
<p  align="right"><a title="Back to 'Table of contents' section" href="#table-of-contents">Back to:arrow_up:</a></p>
<!-- END VERSIONS -->

<!-- BROWSER SUPPORT -->
<hr />
<h2>
  :globe_with_meridians: <a title="'Browsers support' section" name="browsers-support">Browsers support</a>
</h2>
<p>At the moment the project supports the last three versions of the following browsers: </p>
<table>
  <tr>
    <td align="center">
      <strong> Chrome </strong>
    </td>
    <td align="center">
      <strong> Firefox </strong>
    </td>
    <td align="center">
      <strong> Edge </strong>
    </td>
    <td align="center">
      <strong> Opera </strong>
    </td>
    <td align="center">
      <strong> Safari </strong>
    </td>
  </tr>
    <tr>
      <td>
        <img title="Google Chrome" src="https://github.com/alrra/browser-logos/blob/main/src/chrome/chrome_64x64.png" alt="Google Chrome"/>
      </td>
      <td>
        <img title="Mozilla Firefox" src="https://github.com/alrra/browser-logos/blob/main/src/firefox/firefox_64x64.png" alt="Mozilla Firefox"/>
      </td>
      <td>
        <img title="Microsoft Edge" src="https://github.com/alrra/browser-logos/blob/main/src/edge/edge_64x64.png" alt="Microsoft Edge"/>
      </td>
      <td>
        <img title="Opera" src="https://github.com/alrra/browser-logos/blob/main/src/opera/opera_64x64.png" alt="Microsoft Edge"/>
      </td>
      <td>
        <img title="Apple Safari" src="https://github.com/alrra/browser-logos/blob/main/src/safari/safari_64x64.png" alt="Apple Safari"/>
      </td>
    </tr>
</table>
<p>In order to support older browsers and meet the needed requirements, update the <code><a title="'browserslist' github repository" href="https://github.com/browserslist/browserslist">./.browserslistrc</code></a> file:</p>
<ol>
  <li>
    <code>last 3 versions</code> : the versions <strong>of each</strong> browser
  </li>
  <li>
    <code>> 0.2%</code> : the browsers <strong>usage statistics</strong>
  </li>
  <li>
    <code>not dead</code> : the browsers <strong>official support</strong> or updates
  </li>
</ol>
<p><strong>** </strong><em>The more versions to support, larger JS and CSS bundles will be.</em></p>
<p  align="right"><a title="Back to 'Table of contents' section" href="#table-of-contents">Back to:arrow_up:</a></p>
<!-- END BROWSER SUPPORT -->

<!-- GETTING STARTED -->
<hr />
<h2>
  :construction_worker: <a title="'Getting started' section" name="getting-started">Getting started</a>
</h2>
<ol>
  <li>
    <h3>:heavy_exclamation_mark: Prerequisites</h3>
    <ul>
      <li>
        JavaScript runtime <a title="'Node' official website" href="https://nodejs.org/en/">Node</a>
      </li>
      <li>
        <strong> (OPTIONAL) </strong> 
        <br />
        <a title="'Yarn' official website" href="https://yarnpkg.com/">Yarn</a> package manager:
        <code>npm install --global yarn</code>
      </li>
    </ul>
  </li>
  <li>
    <h3 title="'Getting started' section" name="local-dev">:computer: Local Dev</h3>
    <ol>
      <li>
          Clone the repository: <code>git clone https://github.com/doinel1a/vanilla-js-starter PROJECT-NAME</code>
      </li>    
      <li>
          Open the terminal, or the code editor, to the path the project is located, and run:
          <ol>
              <li>
                  With <strong> NPM </strong>:
                  <ol>
                      <li>
                          To install the dependencies: <code>npm install</code>
                      </li>
                      <li>
                          To run the local server: <code>npm run dev</code>
                      </li>
                  </ol>
              </li>
          </ol>
          <ol>
              <li>
                  With <strong> Yarn </strong>:
                  <ol>
                      <li>
                          To install the dependencies: <code>yarn install</code>
                      </li>
                      <li>
                          To run the local server: <code>yarn dev</code>
                      </li>
                  </ol>
              </li>
          </ol>
      </li>
      <li>
        Configure the <code>./_config.js</code> file with the project's details
      </li>
      <li>
        Enjoy! :wink:
      </li>
    </ol>
  </li>
</ol>
<p  align="right"><a title="Back to 'Table of contents' section" href="#table-of-contents">Back to:arrow_up:</a></p>
<!-- END LOCAL DEV -->

<!-- TO DO -->
<hr />
<h2>
    :white_check_mark: <a title="'To do' section" name="to-do">To do</a>
</h2>

<h3>Implementations</h3>

-   [ ] Set OG image
-   [ ] Add icons library

<h3>Bugs</h3>

-   [x] /

<p  align="right"><a title="Back to 'Table of contents' section" href="#table-of-contents">Back to:arrow_up:</a></p>
<!-- END TO DO -->

<!-- CONTRIBUTE -->
<hr />
<h2>
    :busts_in_silhouette:  <a title="'Contribute' section" name="contribute">Contribute</a>
</h2>
<p>
    Contributions are what make the open source community such an amazing place to learn, inspire, and create.
    <br />
    Any contribution is greatly appreciated; big or small, it can be documentation updates, adding new features or something bigger.
    <br />
    Please check the <a title="Code of conduct" href="https://github.com/doinel1a/vanilla-js-starter/blob/main/CODE_OF_CONDUCT.md">Contributing Guide</a> for details on how to help out.
</p>
<h3>How to contribute:</h3>
<ol>
    <li>
        <a title="Go to 'Getting started' section" href="#getting-started">Get started</a>
    </li>
    <li>
        For a new feature:
        <ol>
            <li>
                Create a new branch: 
                <code>git checkout -b feat/NEW-FEATURE</code>
            </li>
            <li>
                Add changes to the staging area: 
                <code>git add PATH/TO/FILENAME.EXTENSION</code>
            </li>
            <li>
                Commit your changes: 
                <code>git commit -m "Feature: NEW FEATURE"</code>
            </li>
            <li>
                Push to the new branch: 
                <code>git push origin feat/NEW-FEATURE</code>
            </li>
        </ol>
    </li>
    <li>
        For a bug fix:
        <ol>
            <li>
                Create a new branch: 
                <code> git checkout -b fix/BUG-FIX </code>
            </li>
            <li>
                Add changes to the staging area: 
                <code> git add PATH/TO/FILENAME.EXTENSION </code>
            </li>
            <li>
                Commit your changes: 
                <code> git commit -m "Fix: BUG FIX" </code> <br />
            </li>
            <li>
                Push to the new branch: 
                <code> git push origin fix/BUG-FIX </code>
            </li>
        </ol>
    </li>
    <li>
        Open a new <a title="Open a new pull request" href="https://github.com/doinel1a/vanilla-js-starter/pulls">pull request</a>
    </li>
    <li>
        Once your pull request has been merged, you can delete the branch
    </li>
</ol>
<p  align="right"><a title="Back to 'Table of contents' section" href="#table-of-contents">Back to:arrow_up:</a></p>
<!-- END CONTRIBUTE -->

<!-- CONTACTS -->
<hr />
<h2>
    :phone: <a title="'Contacts' section" name="contacts">Contacts</a>
</h2>
<ul>
    <li>
        :globe_with_meridians: <strong> LinkedIn </strong> — <a title="Let's connect" href="https://www.linkedin.com/in/doinel-atanasiu/">Doinel Atanasiu</a>
    </li>
    <li>
        :mailbox: <strong>E-mail</strong> — <a title="E-mail me" href="mailto:doinel1atanasiu@gmail.com">doinel1atanasiu@gmail.com</a>
    </li>
</ul>
<p  align="right"><a title="Back to 'Table of contents' section" href="#table-of-contents">Back to:arrow_up:</a></p>
<!-- END CONTACTS -->

<!-- LICENSE -->
<hr />
<h2>
    :bookmark_tabs: <a title="'License' section" name="license">License</a>
</h2>
<p>
	All logos and trademarks are the property of their respective owners. <br />
    Everything else is distributed under the <strong> MIT License </strong>. <br /> 
    See the <a title="License" href="https://github.com/doinel1a/vanilla-js-starter/blob/main/LICENSE">LICENSE</a> file for more informations.
</p>
<p  align="right"><a title="Back to 'Table of contents' section" href="#table-of-contents">Back to:arrow_up:</a></p>
<!-- END LICENSE -->

<!-- ACKNOWLEDGEMENTS-->
<hr />
<h2>
    :gem: <a title="'Acknowledgements' section" name="acknowledgements">Acknowledgements</a>
</h2>
<p>
	Special thanks to:
	<ul>
		<li>
			<a href="https://github.com/alrra">alrra</a> for <a href="https://github.com/alrra/browser-logos">browser-logos</a>
		</li>
		<li>
			<a href="https://github.com/tandpfun">tandpfun</a> for <a href="https://github.com/tandpfun/skill-icons">skill-icons</a>
		</li>
	</ul>
</p>
<p  align="right"><a title="Back to 'Table of contents' section" href="#table-of-contents">Back to:arrow_up:</a></p>
<!-- END ACKNOWLEDGEMENTS -->
