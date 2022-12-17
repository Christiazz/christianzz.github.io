const linkEng = document.getElementById('link-eng');
const linkIta = document.getElementById('link-ita');
const LangIndicator = document.getElementById('lang-dicator');

if (linkIta.classList.contains('active')) {
  LangIndicator.classList.add('active-state');
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