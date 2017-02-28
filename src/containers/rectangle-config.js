import { connect } from 'react-redux';
import RectangleConfigComp from '../components/rectangle-config';
import { changeWidth, changeHeight, changeCorner } from '../actions';

const mapDispatchToProps = function (dispatch) {
  return {
    onWidthChange: value => {
      dispatch(changeWidth(value));
    },

    onHeightChange: value => {
      dispatch(changeHeight(value))
    },

    changeCorner: corner => {
      dispatch(changeCorner(corner))
    }
}};

const mapStateToProps = (state) => {
  return {...state.rectangle, ...{corner: state.corner}};
}

const RectangleConfig = connect(mapStateToProps, mapDispatchToProps)(RectangleConfigComp);

export default RectangleConfig;
