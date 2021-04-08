import { debounce } from 'lodash';
import './css/styles.css';
import API from './js/fetchCountries.js';
import getRefs from './js/getRefs.js';
import errorNotice from './js/notice.js'

import renderCountryCard from './js/renderCard.js'
const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onInputSearch, 500));

function onInputSearch(e) {
    e.preventDefault();
  
    const form = e.target;
    const searchCountry = form.value;

  API.fetchCountry(searchCountry)
    .then(renderCountryCard)
    .catch(errorNotice)
    .finally(setTimeout(reset, 5000));
  
     if (!searchCountry) {
    refs.cardContainer.innerHTML = '';
    return;
  }
  // if (searchCountry) {
  //  refs.input.value = "";
  //   return;
  // }
}

function reset() {
  refs.input.value = "";
}

