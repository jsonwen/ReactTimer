var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  render: function() {
    var { countdownStatus } = this.props;
    var renderStartStopButton = () => {
        if (countdownStatus === 'started') {
          return <button className="btn btn-md btn-secondary">Pause</button>
        } else if (countdownStatus === 'paused') {
          return <button className="btn btn-md btn-primary btn-full-width">Start</button>
        }
    };

    return (
      <div className="align-center">
        {renderStartStopButton()}
        <button className="btn btn-md btn-default">Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
