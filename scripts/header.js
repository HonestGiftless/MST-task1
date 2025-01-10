const header = document.querySelector('header');
const mainImageContainer = document.querySelector('#main-image__container');

function handleScroll() {
    const imageRect = mainImageContainer.getBoundingClientRect();
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = Math.min(scrollY / maxScroll, 1);

    const startColor = [34, 34, 34];
    const endColor = [0, 0, 0];

    const currentColor = startColor.map((start, index) =>
        Math.round(start + (endColor[index] - start) * scrollFraction)
    );

    header.style.background = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;

    if (imageRect.bottom <= 0) {
        header.style.width = '100%';
    } else {
        header.style.width = '60%'
    }
}
    
function checkDeviceWidth() {
    if (window.innerWidth < 768) {
        window.removeEventListener('scroll', handleScroll);
        header.style.width = '100%';
        header.style.background = '#222222';
    } else {
        window.addEventListener('scroll', handleScroll);
    }
}

checkDeviceWidth();
window.addEventListener('resize', checkDeviceWidth);
window.addEventListener('scroll', handleScroll);