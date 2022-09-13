import wait from './async';

import '../css/style.css';

document.addEventListener('DOMContentLoaded', async () => {
	const a = 'HELLO WORLD!';

	await wait();

	console.log(a);
});
