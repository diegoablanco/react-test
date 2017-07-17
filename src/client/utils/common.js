import times from 'lodash/times';
import uniqueId from 'lodash/uniqueId';

export function encodeCredentialsFromBase64ToASCII(username, password) {
    return window.btoa(window.btoa(username) + ':' + window.btoa(password));
}

export function generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let token = '';

    times(length, () => {
        token += chars.charAt(~~(Math.random() * chars.length));
    });

    return token;
}

export function createObjectWithKeyId(prefix) {
    return {
        keyId: uniqueId(prefix),
    };
}

export function getConfigSection(config, section) {
    if (!config || !section) {
        return {};
    }

    const configSection = config.section;

    return configSection || {};
}
