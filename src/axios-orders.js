import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://vegimselimaj.me/api/user/register'
});

export default instance;