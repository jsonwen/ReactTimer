var React = require('react');
var TopNavigation = require('TopNavigation');

var Main = (properties) => {
  return (
    <div>
      <TopNavigation/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 main">
            <p className="page-title">Main.jsx rendered</p>
            {properties.children}
          </div>
        </div>
      </div>
    </div>
  )
}

module.exports = Main;
