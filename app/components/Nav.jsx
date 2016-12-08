var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-dark bg-inverse">
        <div id="navbar">
          <nav className="nav navbar-nav float-xs-left">
            <IndexLink to="/" className="nav-item nav-link" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Timer</IndexLink>
            <Link to="/countdown" className="nav-item nav-link" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Countdown</Link>
          </nav>
        </div>
      </nav>
    )
  }
});

module.exports = Nav;
