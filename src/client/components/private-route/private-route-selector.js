import { select as defaultSelector } from '../../utils/build-selector';
import assign from 'lodash/assign';

export function select(state) {
    return assign({}, defaultSelector(state), {
        login: state.login
    });
}
