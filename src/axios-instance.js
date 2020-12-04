import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://console.firebase.google.com/project/cheesewich-49a69/database/cheesewich-49a69-default-rtdb/data/'
});

export default instance;