import { combineReducers } from 'redux';

import formReducer from './formReducer';

const reducers = combineReducers({
    Data : formReducer
})

export default reducers;