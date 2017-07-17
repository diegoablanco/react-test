import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import config from './config-reducer.js';

export const reducers = combineReducers({
    config,
    form: formReducer
});
