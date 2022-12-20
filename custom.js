const linkEng = document.getElementById('link-eng');
const linkIta = document.getElementById('link-ita');
const LangIndicator = document.getElementById('lang-dicator');

if (linkIta.classList.contains('active')) {
  LangIndicator.classList.add('active-state');
}

function noAddActive() {
  linkEng.classList.add('de-active');
}

function addActive() {
  linkIta.classList.add('active');
  LangIndicator.classList.add('active');
}

linkEng.addEventListener('click', noAddActive);
linkIta.addEventListener('click', addActive);

// logica lang-indicator solo per lingue mobile

const linkEngOff = document.getElementById('link-eng-offc');
const linkItaOff = document.getElementById('link-ita-offc');
const LangIndicatorOff = document.getElementById('lang-dicator-offc');

if (linkItaOff.classList.contains('active')) {
  LangIndicatorOff.classList.add('active-state');
}

function noAddActive() {
  linkEngOff.classList.add('de-active');
}

function addActive() {
  linkItaOff.classList.add('active');
  LangIndicatorOff.classList.add('active');
}

linkEngOff.addEventListener('click', noAddActive);
linkItaOff.addEventListener('click', addActive);

// logica animazione chiusura toggle offcanvas

const closeUno = document.querySelector('.close-elem._6');
const closeDue = document.querySelector('.close-elem._7');
const closeOffc = document.querySelector('.toggle-close-container');

function trigOff() {
  closeUno.classList.add('close-active-sei');
  closeDue.classList.add('close-active-sette');
  setTimeout(function () {
    closeUno.classList.remove('close-active-sei');
    closeDue.classList.remove('close-active-sette');
  }, 1500);
}

closeOffc.addEventListener('click', trigOff);

// CAROSELLO

function carousel() {
  let carouselSlider = document.querySelector(".carousel__slider");
  let list = document.querySelector(".carousel__list");
  let item = document.querySelectorAll(".carousel__item");
  let list2;

  const speed = 1;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;

    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;

    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
      list.style.left = `${x}px`;
    } else {
      x2 = width;
    }
  }

  clone();

  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);
}

carousel();