/**
 * Created by Vitca Razvan on 6/13/2017.
 */
import React from 'react';

import ReactDOM from 'react-dom';
import Popup from './components/app/Popup';

import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';

const proxyStore = new Store({portName: 'take-care-proxy'});

chrome.storage.sync.get(['blackValueChrome', 'yellowValueChrome'], (data) => {

    console.log("Data: "+ data.blackValueChrome +" and "+ data.yellowValueChrome + " got!");
    //return(data.black_value.toString());

ReactDOM.render(
    <Provider store={proxyStore}>
        <Popup
            blackValue = {data.blackValueChrome}
            yellowValue = {data.yellowValueChrome}
        />
    </Provider>,
    document.getElementById('app')
);
});