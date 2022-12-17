const linkEng = document.getElementById('link-eng');
const linkIta = document.getElementById('link-ita');
const LangIndicator = document.querySelector('#lang-dicator');

if (linkIta.classList.contains('active')) {
  LangIndicator.classList.add('active');
} else {
  LangIndicator.classList.remove('active');
}

function noAddActive() {
  linkEng.classList.add('de-active');
  LangIndicator.classList.remove('active');
}

function addActive() {
  linkIta.classList.add('active');
  LangIndicator.classList.add('active');
}

linkEng.addEventListener('click', noAddActive);
linkIta.addEventListener('click', addActive);

if (linkIta.classList.contains('weglot-link--active')) {
  LangIndicator.classList.add('active');
} else if (linkEng.classList.contains('weglot-link--active')) {
  LangIndicator.classList.add('de-active');
}