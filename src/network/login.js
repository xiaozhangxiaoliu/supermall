import axios from 'axios'

export function login(config) {
    var instabce = axios.create();

    return instabce(config);
}