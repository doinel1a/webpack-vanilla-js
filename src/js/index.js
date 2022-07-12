import '../css/style.css';

import wait from './async';

document.addEventListener('DOMContentLoaded', async () => {
    const a = 'HELLO WORLD!';

    await wait();

    console.log(a);
});
