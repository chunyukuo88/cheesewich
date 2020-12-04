import axios from 'axios';

const instance = axios.create({
    baseURL: 'cheesewich-49a69-default-rtdb',
});

export default instance;
