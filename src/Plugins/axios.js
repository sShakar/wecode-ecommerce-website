import axios from 'axios';

export const getItems = async () => {
  return await axios('https://api.storerestapi.com/products')
    .then((response) => response.data)
    .catch((error) => console.log('Something went wrong ' + error));
};
