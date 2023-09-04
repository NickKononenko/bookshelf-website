import { charityFoundsData } from './charity-foundations-data';

const charitySection = document.querySelector('.charity');

function renderCharityFoundations(charityFoundsArr) {
  let foundationNumber = 1;
  const supportUkraine = `<div class="charity-heading-wrapper">
  <h2 class="charity-heading">Support Ukraine</h2>
  <svg class='trizub-icon' width='20' height='32'>
  <use href="src/images/sprite.svg#icon-ukraine-trizub"></use>
  </svg>
  </div>`;
  const markup = charityFoundsArr
    .map(({ title, url, img }) => {
      return `<li><a href="${url}"><img src='${img}' alt="${title}"/></a></li>`;
    })
    .join('');
  charitySection.innerHTML = supportUkraine + markup;
}

renderCharityFoundations(charityFoundsData);
