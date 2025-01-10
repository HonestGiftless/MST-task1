document.addEventListener('click', (event) => {
    const { target } = event;

    if (target.classList.contains('zoomable-image')) {
        event.target.classList.toggle('zoom');
    }
});