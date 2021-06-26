import changeCount from './counter';
import changeTime from './timer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    changeCount,
    changeTime
});

export default rootReducer;