const linkEng = document.getElementsByClassName('weglot-link-en');
const linkIta = document.getElementsByClassName('weglot-link-it');
const LangIndicator = document.getElementsByClassName('lang-indicator');

console.log(linkIta);

function linkIndicator() {
  if (linkIta.classList.contains('weglot-link--active')) {
    LangIndicator.classList.add('active-lang-indicator');
  } else if (linkEng.classList.contains('weglot-link--active')) {
    LangIndicator.classList.add('de-active-lang-indicator');
  }
}

window.addEventListener('onload', linkIndicator);