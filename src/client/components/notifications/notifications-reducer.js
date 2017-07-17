import { createReducer } from '../../reducers/create-reducer';
import map from 'lodash/map';
import get from 'lodash/get';
import filter from 'lodash/filter';
import slice from 'lodash/slice';
import concat from 'lodash/concat';
import {
    NOTIFICATION_ADD, NOTIFICATION_DELETE,
    NOTIFICATION_ADD_BATCH, NOTIFICATION_CLEAR
} from './notifications-actions';

import { filterEmpty, appendId } from './notifications-utils';

const initialState = {
    notificationItems: undefined,
};

export default createReducer(initialState, {
    [NOTIFICATION_ADD](state, action) {
        const newNotification = appendId(action.data);

        const notifications = slice(state.get("notificationItems", initialState["notificationItems"]));
        notifications.push(newNotification);

        return { ...state, notificationItems: notifications }
    },
    [NOTIFICATION_DELETE](state, action) {
        const notifications = filter(state.get("notificationItems", initialState["notificationItems"]), e => {
            return get(e, "keyId") !== action.id;
        });

        return { ...state, notificationItems: notifications }
    },
    [NOTIFICATION_ADD_BATCH](state, action) {
        const oldNotifications = state.get("notificationItems", initialState["notificationItems"]);
        const newNotifications = map(action.list, item => {
            return appendId(item);
        });
        const notifications = concat(oldNotifications, newNotifications);

        return { ...state, notificationItems: filterEmpty(notifications) }
    },
    [NOTIFICATION_CLEAR](state) {
        return { ...state, ...initialState }
    },
});
