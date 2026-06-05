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
drawLines();

function getHeight() {
  return window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
}

function drawLines() {
  const lines = document.getElementsByClassName('line');
  if (lines.length) {
    for (let i = 0; i < lines.length; i++) {
      document.body.removeChild(lines[i]);
    }
  }

  for (i = 0; i < getHeight() / 10; i++) {
    const line = document.createElement("div");
    line.className = `line line-${i}`;
    line.style.top = `${i * 10}px`;
    const time = Math.random() * 5;
    line.style.animation = `lines ${time}s infinite`;
    document.body.appendChild(line);
  }
}



const customCursor = document.getElementById('custom-cursor');


const links = document.querySelectorAll('a');

links.forEach(link => {
    // Коли мишка заходить на область посилання
    link.addEventListener('mouseenter', () => {
        if (customCursor) {
            customCursor.classList.add('cursor-link-hover');
        }
    });

    // Коли мишка покидає область посилання
    link.addEventListener('mouseleave', () => {
        if (customCursor) {
            customCursor.classList.remove('cursor-link-hover');
        }
    });
});

const myCursor = document.getElementById('custom-cursor');
// Знаходимо тільки ті теги <img>, які обгорнуті в посилання <a>
const imageLinks = document.querySelectorAll('a img');

imageLinks.forEach(img => {
    // Коли курсор заходить на територію картинки
    img.addEventListener('mouseenter', () => {
        if (myCursor) {
            myCursor.classList.add('cursor-img-link-hover');
        }
    });

    // Коли курсор покидає картинку
    img.addEventListener('mouseleave', () => {
        if (myCursor) {
            myCursor.classList.remove('cursor-img-link-hover');
        }
    });
});








ScrollReveal().reveal('h1', { reset: true, origin: 'top', delay: 700, distance: '50px' });
ScrollReveal().reveal('p', { reset: true, delay: 700, origin: 'bottom', distance: '150px' });
ScrollReveal().reveal('h2', { reset: true, origin: 'top', delay: 700, distance: '50px' });
ScrollReveal().reveal('h3', { reset: true, origin: 'top', delay: 700, distance: '50px' });
ScrollReveal().reveal('h5', { reset: true, delay: 700, distance: '50px' });




