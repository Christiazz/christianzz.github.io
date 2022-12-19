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

const linkEng = document.getElementById('link-eng-offc');
const linkIta = document.getElementById('link-ita-offc');
const LangIndicator = document.getElementById('lang-dicator-offc');

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