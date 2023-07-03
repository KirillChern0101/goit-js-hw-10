import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_KuzGFRhqEnNv3K1enlXmsYIYCznVug65C64Tr5AWpONfSdS98j9kd5mJdJarVB7A';
const BASE_URL = 'https://api.thecatapi.com/v1/breeds';

export default function fetchBreeds() {
  return axios(BASE_URL).then(response => {
    console.log(response);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  });
}
