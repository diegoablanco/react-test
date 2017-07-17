import get from 'lodash/get';
import { fetchJSON } from '../utils/http';
import apiUrls from '../constants/api-endpoints';
import assign from 'lodash/assign';

export function validateUserNameService(username) {
    const apiEndpoint = get(apiUrls, 'admin.user.forgotPassword.validateUser');

    return fetchJSON(get(apiEndpoint, 'url'), get(apiEndpoint, 'method'), {}, {username: username});
}

export function validateUserPersonalDataPointsService(params, username) {
    const apiEndpoint = get(apiUrls, 'admin.user.forgotPassword.getUserSecurityQuestions');
    const requestParams = assign({}, {
        email: params.email,
        firstName: params.firstName,
        lastName: params.lastName,
        username,
    });

    return fetchJSON(get(apiEndpoint, 'url'), get(apiEndpoint, 'method'), {}, requestParams);
}

export function validateUserSecurityQuestionsService(params, username) {
    const apiEndpoint = get(apiUrls, 'admin.user.forgotPassword.verifyUserSecurityAnswers');
    const requestParams = assign({}, {
        securityQuestions: [...params],
        username,
    });

    return fetchJSON(get(apiEndpoint, 'url'), get(apiEndpoint, 'method'), {}, requestParams);
}

export function resetUserPasswordService(params, securityQuestionAnswers, username) {
    const apiEndpoint = get(apiUrls, 'admin.user.forgotPassword.resetUserPassword');
    const requestParams = assign({}, {
        securityQuestions: securityQuestionAnswers,
        newPassword: params.newPassword,
        confirmPassword: params.confirmPassword,
        username,
    });

    return fetchJSON(get(apiEndpoint, 'url'), get(apiEndpoint, 'method'), {}, requestParams);
}
