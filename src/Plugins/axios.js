import axios from 'axios';

export const getItems = async () => {
    return await axios({
        url: 'http://localhost:8080/files',
        method: 'POST',
        headers: {}
    })
        .then((response) => response.data)
        .catch((error) => console.log('Something went wrong ' + error));
};
