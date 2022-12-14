/**
 * Created by Baharul Islam on 12/08/2022.
 */
import axios from 'axios';
import store from './store';
import router from './router';

const axiosClient = axios.create({
    baseURL: '/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

axiosClient.interceptors.request.use(config => {
    const token = localStorage.getItem("TOKEN");
    if (token) {
        config.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return config;
    },
    error => {
        return Promise.reject(error);
    }
)

axiosClient.interceptors.response.use(response => {
    if (response.status === 200 || response.status === 201) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
}, error => {
    if (error.response.status) {
        switch (error.response.status) {
            case 400:
                //do something
                break;
            case 401:
                store.state.login.user.token = null;
                localStorage.removeItem('TOKEN')
                router.push({name:'Login'})
                break;
            case 403:
                store.state.login.user.token = null;
                localStorage.removeItem('TOKEN')
                router.push({name:'Login'})
                break;
            case 404:
                router.push({name:'notFound'})
                break;
            case 502:
            //do something
        }
        return Promise.reject(error.response);
    }
})

export default axiosClient;


