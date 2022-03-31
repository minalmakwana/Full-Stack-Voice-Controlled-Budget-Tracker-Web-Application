import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import 'tachyons';
import { Provider } from './context/context';
import App from './App';
import './index.scss';


ReactDOM.render(
  //Wrapping speechly api for the entire dom so that fields can be updated for the entire dom
  <SpeechProvider appId="7c4aee08-1073-4a32-b862-ebe1850e0732" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
);
