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


// ----------------------

// const slider = document.querySelector('.item-wrap');
// const scrollStep = 400;
// const scrollInterval = 3000; 

// function autoScroll() {
//   let maxScrollRight = slider.scrollWidth - slider.clientWidth;
//   if (slider.scrollLeft >= maxScrollRight - 1) {
//     slider.scrollLeft = 0;} 
//     else {
//     slider.scrollLeft += scrollStep; і
//   }
// }

// let autoPlay = setInterval(autoScroll, scrollInterval);
// slider.addEventListener('mouseenter', () => clearInterval(autoPlay));
// slider.addEventListener('mouseleave', () => {
//   autoPlay = setInterval(autoScroll, scrollInterval);
// });



ScrollReveal().reveal('h1', { reset: true, origin: 'top', delay: 700, distance: '50px' });
ScrollReveal().reveal('p', { reset: true, delay: 700, origin: 'bottom', distance: '150px' });
ScrollReveal().reveal('h2', { reset: true, origin: 'top', delay: 700, distance: '50px' });
ScrollReveal().reveal('h3', { reset: true, origin: 'top', delay: 700, distance: '50px' });
// музика

