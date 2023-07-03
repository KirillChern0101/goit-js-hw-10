import fetchBreeds from './js/cat-api';

const error = document.querySelector('.error');
const breedSelect = document.querySelector('.breed-select');

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
