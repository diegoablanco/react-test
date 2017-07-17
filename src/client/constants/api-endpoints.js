import get from 'lodash/get';
import {envVariable} from './enviroments';

const environments = {
    local: {
        api: 'http://localhost:4000',
    },
};

const env = get(environments, envVariable, environments.local);

export default {
    admin: {        
        login: {
            url: env.api + '/authentication',
            method: 'POST',
        },
        access: {
            get: {
                url: env.api + '/auth/access',
                method: 'POST',
            },
        },
        user: {
            forgotPassword: {
                resetUserPassword: {
                    url: env.api + '/forgotPassword/resetPassword',
                    method: 'POST',
                },
                validateUser: {
                    url: env.api + '/forgotPassword/validateUsername',
                    method: 'GET',
                }
            },
            resetPassword: {
                url: env.api + '/auth/resetPassword',
                method: 'POST',
            },
        },
    },
};
