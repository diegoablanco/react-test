import 'isomorphic-fetch';
import get from 'lodash/get';
import extend from 'lodash/extend';
import isEmpty from 'lodash/isEmpty';
import queryString from 'query-string';
import LocalStorage from '../utils/local-storage';
import {envVariable, useProxy} from '../constants/enviroments';

const errorCodes = [401, 403, 404, 405, 407, 501, 502, 503, 504, 505];
const useMocks = LocalStorage.get('MOCK') === 'on';

function getDefaultJSONHeaders() {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Environment': envVariable,
        'Proxy': useProxy,
    };

    if (useMocks) {
        headers['mock-data'] = true;
    }

    return headers;
}

export function fetchLocalJSON(url) {
    return fetch(url).then((response) => {
        if (errorCodes.indexOf(response.status) > -1) {
            throw new Error('error.' + response.status);
        }

        return response.json();
    }).then(response => {
        return {
            success: true,
            body: response,
        };
    }).catch((error) => {
        return {
            success: false,
            errors: [
                {
                    errorMessage: get(error, 'message', error),
                },
            ],
        };
    });
}

export function fetchJSON(url, method = 'POST', headers = {}, body = false) {
    const options = {
        method,
        headers: extend(getDefaultJSONHeaders(), headers),
    };

    if (body && method !== 'GET') {
        options.body = JSON.stringify(body);
    }

    const requestUrl = _addQueryParams(url, method, body);

    return fetch(requestUrl, options).then((response) => {
        return response.json();
    }).catch((error) => {
        return {
            success: false,
            errors: [
                {
                    errorMessage: get(error, 'message', error),
                },
            ],
        };
    });
}

function _addQueryParams(url, method, body) {
    if (!isEmpty(body) && method === 'GET') {
        const newUrl = url.concat('?');

        return newUrl.concat(queryString.stringify(body));
    }

    return url;
}
