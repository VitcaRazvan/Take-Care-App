/**
 * Created by Vitca Razvan on 6/13/2017.
 */

import {combineReducers} from 'redux';
import count from './count';
import opacity from './opacity'

export default combineReducers({
    count,
    opacity
});