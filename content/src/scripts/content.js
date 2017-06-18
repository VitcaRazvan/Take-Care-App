/**
 * Created by Vitca Razvan on 6/13/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';
import Content from './components/Content';

const reduxProxyStore = new Store({portName: 'take-care-proxy'});

const page_wrapper= document.createElement('div');
page_wrapper.id = 'take_care_wrapper';

document.body.appendChild(page_wrapper);

chrome.storage.sync.get(['opacityValueChrome', 'yellowValueChrome'], (data) => {

    console.log("Data: "+ data.opacityValueChrome + " and "+data.yellowValueChrome+ " got in background from chrome ");

    ReactDOM.render(
        <Provider store={reduxProxyStore}>
            <Content
                opacityValue={data.opacityValueChrome}
                yellowValue={data.yellowValueChrome}
            />
        </Provider>,
        document.getElementById('take_care_wrapper')
    );

});
