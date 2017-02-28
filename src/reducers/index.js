export const initialState = {
  rectangle: {
    height: 100,
    width: 100
  },
  mouseCoordinates: {
    x: null,
    y: null,
  },
  rectanglePosition: {
    left: 0,
    top: 0,
  },
  corner: 'topLeft',
};

export const mouseAppReducer = (state = {...initialState}, action) => {
  switch (action.type) {
    case 'CHANGE_WIDTH':
      return Object.assign({}, state, {
        rectangle: {
          width: +action.value,
          height: state.rectangle.height,
        }
      });

    case 'CHANGE_HEIGHT':
      return Object.assign({}, state, {
        rectangle: {
          width: state.rectangle.width,
          height: +action.value,
        }
      });

    case 'CHANGE_CORNER':
      return Object.assign({}, state, {
        corner: action.corner,
      });

    case 'MOUSE_MOVED':
      return Object.assign({}, state, {
        mouseCoordinates: {
          x: action.coordinates.x ?
            Math.abs(action.coordinates.x - state.rectanglePosition.left -
              (['bottomRight', 'topRight'].includes(state.corner) ? state.rectangle.width : 0)) :
            null,
          y: action.coordinates.y ?
            Math.abs(action.coordinates.y - state.rectanglePosition.top -
              (['bottomLeft', 'bottomRight'].includes(state.corner) ? state.rectangle.height : 0)) :
            null,
        },
      });

    case 'SET_RECTANGLE_POSITION':
      return Object.assign({}, state, {
        rectanglePosition: {
          top: action.position.top,
          left: action.position.left,
        },
      });

    default:
      return state;
  }
};
