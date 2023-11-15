import axios from "axios";
import {IAuthResponse} from "../models/responce/IAuthResponse";

export const API_URL = 'http://127.0.0.1:8000';

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config
})

api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.config.url !== '/auth/token/refresh/' && error.response.status === 401) {
        const response = await api.post<IAuthResponse>('/auth/token/refresh/', {
            refresh: localStorage.getItem('refresh_token')
        })
        localStorage.setItem('access_token', response.data.access);
        originalRequest.data = {
            token: localStorage.getItem('access_token')
        }
        return api.request(originalRequest);
    } else {
        throw error;
    }

})

export default api;