import { connect } from 'react-redux';
import MouseCoordinatesComp from '../components/mouse-coordinates';

const mapStateToProps = (state) => {
  return {...state.mouseCoordinates};
}

const MouseCoordinates = connect(mapStateToProps)(MouseCoordinatesComp);

export default MouseCoordinates;
