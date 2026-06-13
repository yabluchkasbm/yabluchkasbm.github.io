new WOW().init();

let btnHideShow = document.querySelector('.btn-hide-show');
let leftPanel = document.querySelector('.left-panel');
let divContainer = document.querySelector('.container');

btnHideShow.onclick = function () {
  leftPanel.classList.toggle('hide-panel');
  btnHideShow.classList.toggle('btn-hide-div');
  btnHideShow.classList.toggle('btn-hrest');
  divContainer.classList.toggle('container-thin')
}

ScrollReveal().reveal('h1', { reset: true, origin: 'top', delay: 700, distance: '50px' });
ScrollReveal().reveal('p', { reset: true, delay: 700, origin: 'bottom', distance: '150px' });
ScrollReveal().reveal('h2', { reset: true, origin: 'top', delay: 700, distance: '50px' });
ScrollReveal().reveal('h3', { reset: true, origin: 'top', delay: 1000, distance: '600px' });

window.onload = function() {
    setTimeout(function() {
        var button = document.querySelector('.btn-hide-show');
        if (button) {
            button.style.setProperty('display', 'block', 'important');
        }
    }, 1000); // невелика затримка у 0.1 секунди для надійності
};


ScrollReveal().reveal('.card-1', { reset: true, origin: 'top', delay: 700, distance: '100px' });
ScrollReveal().reveal('.card-2', { reset: true, origin: 'bottom', delay: 800, distance: '150px' });
ScrollReveal().reveal('.card-3', { reset: true, origin: 'top', delay: 900, distance: '200px' });

ScrollReveal().reveal('.card-4', { reset: true, origin: 'top', delay: 900, distance: '200px' });
ScrollReveal().reveal('.card-5', { reset: true, origin: 'bottom', delay: 800, distance: '150px' });
ScrollReveal().reveal('.card-6', { reset: true, origin: 'top', delay: 700, distance: '100px' });

