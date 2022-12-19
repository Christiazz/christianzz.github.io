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
}

closeOffc.addEventListener('click', trigOff);