import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store ,history} from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { CssBaseline} from '@material-ui/core'
import { ConnectedRouter } from 'connected-react-router';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <ConnectedRouter history={history} >
        <CssBaseline/>
        <App />
      </ConnectedRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
