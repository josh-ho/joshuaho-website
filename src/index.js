import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Shell from './views/Shell.js'
import Landing from './views/Landing.js'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Shell}>
      <IndexRoute component={Landing} />
    </Route>
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();
