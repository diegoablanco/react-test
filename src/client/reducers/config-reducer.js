import { createReducer } from './create-reducer'

export const LOAD_CONFIGURATION = 'LOAD_CONFIGURATION'

export default createReducer({}, {
    [LOAD_CONFIGURATION](state, action) {
        return {...state, ...action.configuration};
    },
});
