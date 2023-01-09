const BASE_URL = 'https://us-central1-prueba-front-280718.cloudfunctions.net/';
// https://us-central1-prueba-front-280718.cloudfunctions.net/equipamiento 
// https://us-central1-prueba-front-280718.cloudfunctions.net/aberturas 
// https://us-central1-prueba-front-280718.cloudfunctions.net/terminaciones
const ENV = {
  BASE_URL,
  API: {
    GET_EQUIPAMIENTO: `${BASE_URL}/equipamiento`,
    GET_ABERTURAS: `${BASE_URL}/aberturas`,
    GET_TERMINACIONES: `${BASE_URL}/terminaciones`,
  },
};

export default ENV;
