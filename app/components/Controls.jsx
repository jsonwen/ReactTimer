var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  componentWillReceiveProps: function(newProps) {
    //console.log('componentWillReceiveProps', newProps.countdownStatus);
  },
  render: function() {
    var { countdownStatus } = this.props;
    var renderStartStopButton = () => {
        if (countdownStatus === 'started') {
          return <button className="btn btn-md btn-red margin-x-s" onClick={this.onStatusChange('paused')}>Pause</button>
        } else {
          return <button className="btn btn-md btn-green margin-x-s" onClick={this.onStatusChange('started')}>Start</button>
        }
    };

    return (
      <div className="align-center">
        {renderStartStopButton()}
        <button className="btn btn-md btn-default margin-x-s" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
