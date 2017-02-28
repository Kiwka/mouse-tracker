import React from 'react';

const s = getStyle();

const MouseCoordinatesComp = props => {
  if (props.x && props.y) {
    return (<div style={s.info}>{`The mouse coordinates are x:${props.x} & y:${props.y}`}</div>)
  } else {
    return <div style={s.info}>Mouse is outside the rectangle</div>
  }
};

export default MouseCoordinatesComp;

MouseCoordinatesComp.propTypes = {
  x: React.PropTypes.number,
  y: React.PropTypes.number,
};

function getStyle() {
  return {
    info: {
      marginTop: 10,
      textAlign: 'center',
      fontSize: 22,
    }
  }
};
