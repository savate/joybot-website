//putting the nav fixed on the page
const nav = document.querySelector('#main');
const navTopCoord = nav.offsetTop;


function fixNav() {
    if(window.scrollY >= navTopCoord) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fix-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fix-nav');
    }
}

window.addEventListener('scroll', fixNav);