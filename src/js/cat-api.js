import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_YzXVxRzzgs2N9cP5s56UUALtUpPjYZlprzRO7AYw95AhDINf7OzNlcAZskVQRHiT';

const loader = document.querySelector('.loader');
loader.style.display = 'none';
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const CATE_DATA_URL = 'https://api.thecatapi.com/v1/images/search';

function fetchBreeds() {
  loader.style.display = 'block';
  return axios(BASE_URL).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    loader.style.display = 'none';
    return response.data;
  });
}

function fetchCatByBreed(breedId) {
  loader.style.display = 'block';
  return axios(`${CATE_DATA_URL}?breed_ids=${breedId} `).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    loader.style.display = 'none';
    return response.data[0];
  });
}

export { fetchBreeds, fetchCatByBreed };
