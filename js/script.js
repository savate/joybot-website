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

//header little animation
var i = 0;
var txt = 'Joyboy, the bot!';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector('header').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener('load', typeWriter);
window.addEventListener('scroll', typeWriter);