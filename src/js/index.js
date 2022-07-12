import '../css/global.css';
import '../scss/global.scss';

import _config from '../../_config.cjs';

const githubCornerTitle = 'Get started on GitHub';
const githubRepoUrl = 'https://github.com/doinel1a/vanilla-js-starter';

document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('#title');
  const main = document.querySelector('#main');
  const githubCorner = main.querySelector('#github');
  const counter = main.querySelector('#counter');

  title.textContent = _config.title;

  githubCorner.setAttribute('title', githubCornerTitle);
  githubCorner.setAttribute('aria-label', githubCornerTitle);
  githubCorner.setAttribute('href', githubRepoUrl);

  main.addEventListener('click', (event) => {
    const { id, type } = event.target;

    if (type === 'button') {
      const currentCount = Number(counter.textContent);

      switch (id) {
        case 'increment': {
          counter.textContent = currentCount + 1;
          break;
        }
        case 'decrement': {
          counter.textContent = currentCount - 1;
          break;
        }
      }
    }
  });
});
