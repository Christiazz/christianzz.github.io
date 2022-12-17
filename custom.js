const linkEng = document.querySelector('#link-eng');
const linkIta = document.querySelector('#link-ita');
const LangIndicator = document.getElementById('lang-dicator');

console.log(linkIta);
console.log(linkEng);
console.log(LangIndicator);

function noAddActive() {
  linkEng.classList.add('de-active');
}

function addActive() {
  linkIta.classList.add('active');
}

linkEng.addEventListener('click', noAddActive);
linkIta.addEventListener('click', addActive);

if (linkIta.classList.contains('weglot-link--active')) {
  LangIndicator.classList.add('active');
} else if (linkEng.classList.contains('weglot-link--active')) {
  LangIndicator.classList.add('de-active');
}

console.log(linkIta);
console.log(linkEng);
console.log(LangIndicator);