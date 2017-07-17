import get from 'lodash/get';
import map from 'lodash/map';

const errorTypes = {
    VALIDATION: 'validation',
};

const tokenStatus = {
    ACTIVE: 'ACTIVE',
};

export function isTokenValid(response) {
    if (get(response, 'tokenActive') === tokenStatus.ACTIVE) {
        return true;
    }

    return false;
}

export function getErrors(response) {
    if (response.type === errorTypes.VALIDATION) {
        return map(response.errors, (error) => {
            return {
                ErrorCode: 'REQUIRED.FIELD.' + error.field,
            };
        });
    }

    return get(response, 'errors');
}

export const authError = {
    success: false,
    errors: [
        {
            ErrorCode: 'SESSION.EXPIRED',
        },
    ],
};

export const expiredTokenError = {
    ErrorCode: 'TOKEN.EXPIRED',
};
