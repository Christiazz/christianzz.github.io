const linkEng = document.getElementsByClassName('weglot-link-en');
const linkIta = document.getElementsByClassName('weglot-link-it');
const LangIndicator = document.getElementsByClassName('lang-indicator');

function linkIndicator() {
  if (linkIta.classList.contains('weglot-link--active')) {
    LangIndicator.classList.add('active-lang-indicator');
  }
}