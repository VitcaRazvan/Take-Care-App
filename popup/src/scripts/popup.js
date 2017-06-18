/**
 * Created by Vitca Razvan on 6/13/2017.
 */
import React from 'react';

import ReactDOM from 'react-dom';
import App from './components/app/Popup';

import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';

const proxyStore = new Store({portName: 'take-care-proxy'});

chrome.storage.sync.get(['opacityValueChrome', 'yellowValueChrome'], (data) => {

    console.log("Data: "+ data.opacityValueChrome +" and "+ data.yellowValueChrome + " got!");
    //return(data.opacity_value.toString());

ReactDOM.render(
    <Provider store={proxyStore}>
        <App
            opacityValue = {data.opacityValueChrome}
            yellowValue = {data.yellowValueChrome}
        />
    </Provider>,
    document.getElementById('app')
);
});