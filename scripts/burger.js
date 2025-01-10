document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const toggleBtn = document.getElementById('toggle_header');

    toggleBtn.addEventListener('click', () => {
        if (header.classList.contains('hide')) {
            header.classList.remove('hide');
            toggleBtn.innerHTML = '&#10006;';

            if (window.innerWidth < 768) {
                document.querySelector('.main-container__header').style.marginTop = '30%';
            }
        } else {
            header.classList.add('hide');
            toggleBtn.innerHTML = '&#9776;';

            if (window.innerWidth < 768) {
                document.querySelector('.main-container__header').style.marginTop = '5%';
            }
        }
    });
});