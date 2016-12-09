var React = require('react');
var TopNavigation = require('TopNavigation');

var Main = (properties) => {
  return (
    <div>
      <TopNavigation/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-8 offset-xs-2 col-md-6 offset-md-3 main">
            {properties.children}
          </div>
        </div>
      </div>
    </div>
  )
}

module.exports = Main;
