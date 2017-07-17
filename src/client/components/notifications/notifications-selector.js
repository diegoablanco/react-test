import assign from 'lodash/assign';
import { select as defaultSelector } from '../../utils/build-selector';
import { NOTIFICATION_KEY } from './notifications-constants';

export function select(state) {
    return assign({}, defaultSelector(state), {
        notifications: state.notifications.get(NOTIFICATION_KEY),
    });
}
