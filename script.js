

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');
const body = document.body;

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
  body.classList.toggle('no-scroll');
});


// dark-mode


let themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', null);
}

if (localStorage.getItem('dark-mode') === 'active') {
    enableDarkmode();
}

themeSwitch.addEventListener("click", () => {
    let darkmode = localStorage.getItem('dark-mode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});







