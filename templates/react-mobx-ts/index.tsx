import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { createHashHistory } from 'history';
import { Router } from 'react-router-dom';

import App from './src/components/App';

import './index.less';

const hashHistory = createHashHistory();
const routingStore = new RouterStore();

const store = {
    routing: routingStore
};

const history = syncHistoryWithStore(hashHistory, routingStore);

configure({ enforceActions: 'observed' });

ReactDOM.render(
    <Provider {...store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.querySelector('#app')
);
