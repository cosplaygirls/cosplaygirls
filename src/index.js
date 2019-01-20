import React from 'react';
import { hydrate, render } from 'react-dom';
import { App } from './components/App';
import './css/index.css';
import './css/noramalize.css';
import * as serviceWorker from './serviceWorker';
import { socialsTypes } from './const.js';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App socialsTypes={socialsTypes} />, rootElement);
} else {
  render(<App socialsTypes={socialsTypes} />, rootElement);
}

serviceWorker.register();
