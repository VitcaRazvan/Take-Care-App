/**
 * Created by Vitca Razvan on 6/13/2017.
 */

import {combineReducers} from 'redux';
import count from './count';
import black from './black'
import yellow from './yellow'

export default combineReducers({
    count,
    black,
    yellow
});