/**
 * Created by Vitca Razvan on 6/13/2017.
 */
import {createStore} from 'redux';
import rootReducer from './reducers';
import {wrapStore} from 'react-chrome-redux'

const store = createStore(rootReducer, {});

wrapStore(store, {
    portName: 'take-care'
});