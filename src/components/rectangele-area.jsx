import React from 'react';

const s = getStyle();

export default class RectangleAreaComp extends React.Component {
  constructor(props) {
    super(props);

    this.getPosition = this.getPosition.bind(this);
  }

  getPosition() {
    this.props.getRectanglePosition({
      left: this.refs.rectangle.getBoundingClientRect().left,
      top: this.refs.rectangle.getBoundingClientRect().top,
    });
  }

  componentDidMount() {
    this.getPosition();
    window.addEventListener('resize', this.getPosition);
    window.addEventListener('scroll', this.getPosition);
  }

  componentDidUpdate(prevProps) {
    if (this.props.width !== prevProps.width || this.props.height !== prevProps.height) {
      this.getPosition();
    }
  }

  componentUnmount() {
    window.removeEventListener('resize', this.getPosition);
    window.removeEventListener('scroll', this.getPosition);
  }

  render() {
    return (<div ref="rectangle"
        style={{width: this.props.width || 0, height: this.props.height || 0, ...s.rectangle}}
        onMouseMove={e => this.props.onMouseMove({x: e.clientX, y: e.clientY})}
        onMouseLeave={e => this.props.onMouseMove({x: null, y: null})}></div>);
  }
};

RectangleAreaComp.propTypes = {
  onMouseMove: React.PropTypes.func,
  getRectanglePosition: React.PropTypes.func,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
}

function getStyle() {
  return {
    rectangle: {
      border: '5px solid black',
      margin: '20px auto',
    }
  }
};
