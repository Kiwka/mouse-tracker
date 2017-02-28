import { connect } from 'react-redux';
import RectangleAreaComp from '../components/rectangele-area';
import { mouseMoved, setRectanglePosittion } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onMouseMove: (coordinates) => {
      dispatch(mouseMoved(coordinates));
    },

    getRectanglePosition: (position) => {
      dispatch(setRectanglePosittion(position));
    },
  };
};

const mapStateToProps = (state) => {
  return {...state.rectangle};
}

const RectangleArea = connect(mapStateToProps, mapDispatchToProps)(RectangleAreaComp);

export default RectangleArea;
