import assign from 'lodash/assign';
import map from 'lodash/map';
import { GENERAL_ERROR, NOTIFICATION_TYPES } from './notifications-constants';

export const NOTIFICATION_ADD = 'ADD_ERROR';
export const NOTIFICATION_DELETE = 'NOTIFICATION_DELETE';
export const NOTIFICATION_ADD_BATCH = 'NOTIFICATION_ADD_BATCH';
export const NOTIFICATION_CLEAR = 'NOTIFICATION_CLEAR';

function addNotification(data) {
    return {
        data,
        type: NOTIFICATION_ADD,
    };
}

function addNotificationBatch(list) {
    return {
        list,
        type: NOTIFICATION_ADD_BATCH,
    };
}

function addType(data, type) {
    return assign({}, data, { type });
}

export function addSuccess(data) {
    return addNotification(addType(data, NOTIFICATION_TYPES.SUCCESS));
}

export function addWarning(data) {
    return addNotification(addType(data, NOTIFICATION_TYPES.WARNING));
}

export function addGeneralError() {
    return addError(GENERAL_ERROR);
}

export function addError(data) {
    return addNotification(addType(data, NOTIFICATION_TYPES.ERROR));
}

export function addErrors(list) {
    const items = map(list, item => addType(item, NOTIFICATION_TYPES.ERROR));

    return addNotificationBatch(items);
}

export function deleteNotification(id) {
    return {
        type: NOTIFICATION_DELETE,
        id,
    };
}

export function clearNotifications() {
    return {
        type: NOTIFICATION_CLEAR,
    };
}
