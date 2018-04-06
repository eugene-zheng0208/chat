import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Chat from './reducer/chat'

const store = createStore(Chat, window.devToolsExtension && window.devToolsExtension())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
