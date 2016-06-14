import React from 'react';
import { Link, Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

import Base from './components/Base.jsx';
import Page1 from './components/Page1.jsx';
import Page2 from './components/Page2.jsx';

class Routes extends React.Component{
  render(){
      return(<Router history={appHistory}>
        <Route path="/" component={Base}>
          <Route path="/page1" component={Page1}/>
          <Route path="/page2" component={Page2}/>
        </Route>
      </Router>)
  }
}

export default Routes


// var HashHistory = require('react-router/lib/hashhistory');
// //var History = require('react-router/lib/createBrowserHistory');
//
// var Base = require('./components/Base.jsx');
// var Page1 = require('./components/Page1.jsx');
// var Page2 = require('./components/Page2.jsx');
//
// var Routes = (
//
//   <Router history={HashHistory}>
//     <Route path="/" component={Base}>
//       <Route path="/page1" component={Page1}/>
//       <Route path="/page2" component={Page2}/>
//     </Route>
//   </Router>
// );
//
//
// module.exports = Routes;
