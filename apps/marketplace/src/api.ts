import { Api } from '@common/api';
import { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

import { localStorageKeys, messageKeys } from './constant';

export const api = new Api({ baseURL: process.env.NX_API_ENDPOINT });

api.instance.interceptors.response.use(
    async (response: AxiosResponse) => {
        // console.log(`*********** AxiosResponse ***********`, response);
        return response;
    },

    async (error: AxiosError) => {
        console.log(`*********** AxiosError ***********`, error);

        if (!error.response) {
            return Promise.reject(error);
        }

        if (error.response?.status === 403) {
            localStorage.removeItem(localStorageKeys.accessToken);
            localStorage.removeItem(localStorageKeys.account);
            toast.error(messageKeys.sessionExpired);
        }

        if (error.response?.status >= 400) {
            console.log(`*********** AxiosError ***********`, error.response);
            if (error.response?.data?.errorCode)
                return Promise.reject({
                    ...error.response.data,
                });
            if (error.response.data.message) return Promise.reject(new Error(error.response.data.message));
            return Promise.reject(error);
        }

        return Promise.resolve(error.response);
    },
);

api.instance.interceptors.request.use(
    (config) => {
        let hardToken = false;
        if (config.headers && config.headers['default-token']) {
            hardToken = true;
        }
        config.headers = {
            ...config.headers,
            mode: 'no-cors',
            'x-access-token': hardToken
                ? process.env.NX_HARD_TOKEN
                : localStorage.getItem(localStorageKeys.accessToken) || '',
        };
        return config;
    },
    (error) => {
        console.warn(`*********** error: interceptors.request ***********`, error);
    },
);

const apis = api.api;

export default apis;
