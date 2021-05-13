import axios from 'axios'

export function login(config) {
    var instabce = axios.create();
    instabce.interceptors.request.use(config => {
        config.headers['Authorization'] = window.sessionStorage.getItem('token')
        return config;
    })
    return instabce(config);
}