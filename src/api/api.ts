import axios from "axios";
import {AuthResponse} from "../models/responce/AuthResponse";

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
    if(!error.config._isRetry && error.response.status === 401) {
        try {
            originalRequest._isRetry = true;
            const response = await api.post<AuthResponse>('/auth/token/refresh/', {
                refresh: localStorage.getItem('refresh_token')
            })
            localStorage.setItem('token', response.data.access);
            originalRequest.data = {
                token: localStorage.getItem('token')
            }
            return api.request(originalRequest);
        } catch (e) {
            console.log(error)
        }
    }
    throw error;
})

export default api;