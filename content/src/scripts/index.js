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

page_wrapper.style.backgroundColor = 'black';
page_wrapper.style.minHeight = "100%";
page_wrapper.style.minWidth= "100%";
page_wrapper.style.height ="auto";
page_wrapper.style.position="fixed";
page_wrapper.style.pointerEvents="none";
page_wrapper.style.zIndex="9999999999999999";
page_wrapper.style.top="0";
page_wrapper.style.left="0";

//
// background-color: black;
// min-height: 100%;
// min-width: 100%;
// height: auto;
// position: fixed;
//
// pointer-events: none; /* allows me to click through this div to underlying elements */
//
// top: 0;
// left: 0;
//
// z-index: 999; /* puts sunglasses div over everything*/

// page_wrapper.rel = 'stylesheet';
// page_wrapper.type = 'css';

page_wrapper.href = chrome.extension.getURL('background.css');
document.body.appendChild(page_wrapper);

// var style = document.createElement('link');
// style.rel = 'stylesheet';
// style.type = 'text/css';
// style.href = chrome.extension.getURL('myStyles.css');
// (document.head||document.documentElement).appendChild(style);

render(
    <Provider store={reduxProxyStore}>
        <App/>
    </Provider>,
    document.getElementById('take_care_wrapper'));
