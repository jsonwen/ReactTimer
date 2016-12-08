var React = require('react');
var Nav = require('Nav');

var Main = (properties) => {
  return (
    <div>
      <Nav/>
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
