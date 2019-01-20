import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import data from './cosplaygirls.json';
import './css/index.css';
import './css/noramalize.css';
import * as serviceWorker from './serviceWorker';
import { socialsTypes } from './const.js';

const [fieldsObject, ...cosplaygirls] = data;
const fields = Object.keys(fieldsObject);

ReactDOM.render(
  <App
    cosplaygirls={cosplaygirls}
    fields={fields}
    socialsTypes={socialsTypes}
  />,
  document.getElementById('root')
);

serviceWorker.register();
