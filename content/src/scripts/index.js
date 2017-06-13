/**
 * Created by Vitca Razvan on 6/13/2017.
 */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';
import App from './components/app/App';

const reduxProxyStore = new Store({portName: 'take-care'});

const page_wrapper= document.createElement('div');
page_wrapper.id = 'take_care_wrapper';

document.body.insertBefore(page_wrapper,document.body.childNodes[0]);

render(
    <Provider store={reduxProxyStore}>
        <App/>
    </Provider>,
    document.getElementById('take_care_wrapper'));
