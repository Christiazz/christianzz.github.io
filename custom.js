const linkEng = document.getElementsByClassName('weglot-link-en');
const linkIta = document.getElementsByClassName('weglot-link-it');
const LangIndicator = document.getElementById('lang-dicator');

console.log(LangIndicator);

function linkIndicator() {
  if (linkIta.classList.contains('weglot-link--active')) {
    LangIndicator.classList.add('active');
  } else if (linkEng.classList.contains('weglot-link--active')) {
    LangIndicator.classList.add('de-active');
  }
}

window.addEventListener('onload', linkIndicator);