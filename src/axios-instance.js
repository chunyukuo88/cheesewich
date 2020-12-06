import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://cheesewich-49a69-default-rtdb.firebaseio.com/'
    baseURL: 'bogus url'
});

export default instance;