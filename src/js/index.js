import '../css/global.css';
import '../scss/global.scss';

import { onCLS, onFID, onLCP } from 'web-vitals';

onCLS(console.log);
onFID(console.log);
onLCP(console.log);

document.addEventListener('DOMContentLoaded', () => {
	const main = document.querySelector('#main');
	const counter = document.querySelector('#counter');

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

				default: {
					return;
				}
			}
		}
	});
});

onLCP(console.log);
onFID(console.log);
onFID(console.log);
