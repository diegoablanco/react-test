import filter from 'lodash/filter';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import assign from 'lodash/assign';
import { createObjectWithKeyId } from '../../utils/common';
import { NOTIFICATION_TYPES } from './notifications-constants';

export function getErrorsFromNotifications(notifications) {
    return filter(notifications, item => get(item, 'type') === NOTIFICATION_TYPES.NOTIFICATION_TYPES.ERROR);
}

export function appendId(item) {
    return assign({}, item, createObjectWithKeyId());
}

export function filterEmpty(list) {
    return filter(list, item => !isEmpty(item));
}
