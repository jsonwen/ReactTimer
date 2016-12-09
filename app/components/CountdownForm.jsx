var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountDown(parseInt(strSeconds, 10));
    }
  },
  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input ref="seconds" type="text" placeholder="Enter time in seconds" className="form-control" />
          <button className="btn btn-md btn-primary btn-full-width">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
