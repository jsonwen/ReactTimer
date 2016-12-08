var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

// Load bootstrap & styles
require('style!css!bootstrap/dist/css/bootstrap.min.css');
require('applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);


// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path="/" component={Main}>
//       <Route path="about" component={About}/>
//       <Route path="examples" component={Examples}/>
//       <IndexRoute component={Weather}/>
//     </Route>
//   </Router>,
//   document.getElementById('app')
// );
