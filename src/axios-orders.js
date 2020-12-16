import axios from 'axios';
import urls from './urls';

const instance = axios.create({
    baseURL: urls.axiosInstance
});

export default instance;
