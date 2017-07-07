import { combineReducers } from 'redux';

import hwReducer from './hw.app.reducer';

const reducers = combineReducers({
    hwReducer: hwReducer
});

export default reducers;