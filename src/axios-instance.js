import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cheesewich-49a69-default-rtdb.firebaseio.com/'
});

export default instance;