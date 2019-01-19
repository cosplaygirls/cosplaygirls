import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import data from './cosplaygirls.json';
import './css/index.css';
import './css/noramalize.css';
import * as serviceWorker from './serviceWorker';
import { socialsTypes } from './socialsTypes.js';

const [fields, ...cosplaygirls] = data;

ReactDOM.render(
  <App
    cosplaygirls={cosplaygirls}
    fields={fields}
    socialsTypes={socialsTypes}
  />,
  document.getElementById('root')
);

serviceWorker.register();
