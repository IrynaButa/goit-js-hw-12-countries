import countryCardTpl from '../templates/country-card.hbs';
import countryList from '../templates/country-list.hbs'
import getRefs from '../js/getRefs.js';
import errorNotice from '../js/notice.js'

const refs = getRefs();

 export default function renderCountryCard(country) {
    const notFoundPage = country.status === 404;

  if (notFoundPage) {
      refs.cardContainer.innerHTML = '';
       errorNotice();
    return;
  }

  if (country.length > 10) {
    errorNotice();
    refs.cardContainer.innerHTML = '';
    return;
  }

  if (country.length >= 2 && country.length <= 10) {
    const markupList = countryList(country);
    refs.cardContainer.innerHTML = markupList;
    return;
  }
  const markupCard = countryCardTpl(country);
  refs.cardContainer.innerHTML = markupCard;
}
 