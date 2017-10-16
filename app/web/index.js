import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from '../store/configureStore';
import $ from 'jquery';
import LandingPage from './containers/LandingPage';

window.jQuery = $;
window.$ = $;

// load our css
require('./styles/style.less');

const store = configureStore();
const rootElement = document.getElementById('root');
if (rootElement) {
	render(<Root store={store} />, rootElement);
}
const landingElement = document.getElementById('landing');

if (landingElement) {
	render(<LandingPage store={store} />, landingElement);
}
