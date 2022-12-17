const linkEng = document.querySelector('#link-eng');
const linkIta = document.querySelector('#link-ita');
const LangIndicator = document.getElementById('lang-dicator');

console.log(linkIta);
console.log(linkEng);
console.log(LangIndicator);

if (linkIta.classList.contains('weglot-link--active')) {
  LangIndicator.classList.add('active');
} else if (linkEng.classList.contains('weglot-link--active')) {
  LangIndicator.classList.add('de-active');
}

console.log(linkIta);
console.log(linkEng);
console.log(LangIndicator);