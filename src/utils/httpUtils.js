import 'whatwg-fetch';
import settings from '../settings';
import axios from 'axios';

const httpClient = axios.create();
httpClient.defaults.timeout = 30000;

export const webApi = settings.webApi;

export let token = localStorage["token"];
let tokenTimestamp = localStorage["token-ts"] && parseInt(localStorage["token-ts"]);
let refreshingToken = false;

const _request = (url, method, data, config = {}) => {
    refreshToken();
    const headers = {...config.headers, Authorization: "Bearer " + token};
    if (config.noAuth || !token) delete headers.Authorization;
    return httpClient({url, method, data, headers}).then((res) => {
        if(res.status === 200 || res.status === 201 || res.status === 204) return res.data;
        else throw (res.data);
    }).catch(errorResponse => {
        throw (errorResponse.response || {status: 500})
    })
};

export const get = (url) => _request(url, "GET");

export const post = (url, body, config = {}) => _request(url, "POST", body, config);

export const put = (url, body, config = {}) => _request(url, "PUT", body, config);

export const deleteRequest = (url, body, config = {}) => _request(url, "DELETE", body, config);

export const services = {
    refreshToken: (token) => post(webApi + "auth/refresh/", {token}),
};

export const refreshToken = () => {
    if (token && tokenTimestamp && Date.now() - tokenTimestamp > 1200000 && Date.now() - tokenTimestamp < 1800000 && !refreshingToken) {
        refreshingToken = true;
        services.refreshToken(token).then(tokenRes => {
            if(tokenRes.token) {
                _saveToken(tokenRes.token);
            }
            refreshingToken = false;
        }).catch((err) => refreshingToken = false);
    }
};
refreshToken();

export const _saveToken = (respToken) => {
    localStorage["token"] = respToken;
    localStorage["token-ts"] = Date.now();
    token = respToken;
    tokenTimestamp = Date.now();
};
