import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
const error = document.querySelector('.error');
const breedSelect = document.querySelector('.breed-select');

breedSelect.addEventListener('change', getCatDate);

function getCatDate() {
  const catId = event.target.value;
  fetchCatByBreed(catId).then(
    ({ description, name, temperament }) => console.log
  );
}

fetchBreeds()
  .then(allCats => {
    allCats.map(cat => {
      const option = `<option value="${cat.id}">${cat.name}</option>`;
      breedSelect.insertAdjacentHTML('beforeend', option);
    });
  })
  .catch(() => {
    error.style.display = 'block';
  });
