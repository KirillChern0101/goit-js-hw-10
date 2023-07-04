import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_KuzGFRhqEnNv3K1enlXmsYIYCznVug65C64Tr5AWpONfSdS98j9kd5mJdJarVB7A';

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const CATE_DATA_URL = 'https://api.thecatapi.com/v1/images';

function fetchBreeds() {
  return axios(BASE_URL).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  });
}
function fetchCatByBreed(breedId) {
  return axios(`${CATE_DATA_URL}?breed_ids=${breedId}`).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return ({ description, name, temperament } = response[0].breeds[0]);
  });
}

export { fetchBreeds, fetchCatByBreed };
