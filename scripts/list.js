document.addEventListener('mouseover', (event) => {
    const { target } = event;

    if (target.className === 'reason-list__item') {
        target.style.background = '#55565A';

        target.addEventListener('mouseout', (e) => {
            e.target.style.background = 'none';
        });
    }
});