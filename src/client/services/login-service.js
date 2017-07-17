import get from 'lodash/get';
import SessionStorage from '../utils/session-storage';
import { fetchJSON } from '../utils/http';
import { authError } from '../utils/services';
import apiUrls from '../constants/api-endpoints';

export function adminLoginRequest(params) {
    const apiEndpoint = get(apiUrls, 'admin.login');

    return fetchJSON(get(apiEndpoint, 'url'), get(apiEndpoint, 'method'), {}, {
        email: params.username,
        password: params.password,
        strategy: "local"
    });
}

export function adminLoginGetToken() {
    const accessToken = SessionStorage.get('AccessToken');
    const tokenType = SessionStorage.get('TokenType');

    if (accessToken) {
        const apiEndpoint = get(apiUrls, 'admin.token.get');
        const headers = {
            Authorization: tokenType + ' ' + accessToken,
        };

        return fetchJSON(get(apiEndpoint, 'url'), get(apiEndpoint, 'method'), headers);
    }

    return authError;
}

export function adminAccess() {
    const accessToken = SessionStorage.get('AccessToken');
    const tokenType = SessionStorage.get('TokenType');

    if (accessToken) {
        const apiEndpoint = get(apiUrls, 'admin.access.get');
        const headers = {
            Authorization: tokenType + ' ' + accessToken,
        };

        return fetchJSON(get(apiEndpoint, 'url'), get(apiEndpoint, 'method'), headers);
    }

    return authError;
}

export function resetPassword(params) {
    const accessToken = SessionStorage.get('AccessToken');
    const tokenType = SessionStorage.get('TokenType');

    if (accessToken) {
        const apiEndpoint = get(apiUrls, 'admin.user.resetPassword');
        const headers = {
            Authorization: tokenType + ' ' + accessToken,
        };

        return fetchJSON(get(apiEndpoint, 'url'), get(apiEndpoint, 'method'), headers, {
            newPassword: params.newPassword,
            confirmPassword: params.confirmPassword,
        });
    }

    return authError;
}
