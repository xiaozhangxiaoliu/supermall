import axios from 'axios';




export default function request(config) {
    const instance = axios.create({
        baseURL: "http://152.136.185.210:7878/api/m5",
        timeout: 5000,
    });

    instance.interceptors.request.use(config => {
        // console.log(config);
        return config
    }, err => {
        throw '请求发生错误'
    })

    instance.interceptors.response.use(res => {
        // console.log(res);
        return res.data
    }, err => {
        throw '响应发生错误'
    });
    //发送网络请求
    return instance(config);
}