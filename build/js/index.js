window.addEventListener('scroll', handlerNavigation);
window.addEventListener('load', handlerNavigation);

function handlerNavigation () {
    let navigation = document.getElementById('navigation');
    let logoParts = document.getElementsByClassName('logo-part');
    let NavPlayBtn = document.getElementById('nav-play-btn');

    if(window.scrollY > 50) {
        navigation.classList.add('bg-white');
        navigation.childNodes[1].childNodes[3].childNodes[1].classList.remove('text-white');

        NavPlayBtn.classList.remove('border-white');
        NavPlayBtn.classList.add('border-black');
        for(let i in logoParts) {
            logoParts[i].setAttribute('fill', 'black');
        }
    }
    else {
        navigation.classList.remove('bg-white');
        navigation.childNodes[1].childNodes[3].childNodes[1].classList.add('text-white');
        NavPlayBtn.classList.add('border-white');

        for(let i in logoParts) {
            logoParts[i].setAttribute('fill', 'white');
        }
    }
}

function navDotController(a) {
    let dot = document.getElementById('navActiveDot');

    if(a === 'out') {
        dot.style.visibility = 'hidden';
        return;
    }
    dot.style.visibility = 'visible'
    dot.style.left = `${a}px`;
}