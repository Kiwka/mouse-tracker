import { initialState, mouseAppReducer } from './index.js';

describe('mouseAppReducer ', () => {
  const startState = {
    rectangle: {
      height: 500,
      width: 500
    },
    mouseCoordinates: {
      x: 243,
      y: 255,
    },
    rectanglePosition: {
      left: 100,
      top: 100,
    },
    corner: 'topRight',
  };

  it('should return initialState if nothing else was passed', () => {
    const newState = mouseAppReducer(undefined, {type: 'ANY'});
    expect(newState).toEqual(initialState);
  });

  it('should return the same state if the action type is unknown', () => {
    const newState = mouseAppReducer(startState, {type: 'ANY'});
    expect(newState).toEqual(startState);
  });

  describe(' on width change ', () => {
    const newWidth = 300;
    const newState = mouseAppReducer(startState, {type: 'CHANGE_WIDTH', value: newWidth});

    it('rectangle width should change to the value that is passed in action', () => {
      expect(newState.rectangle.width).toEqual(newWidth);
    });

    it('rectangle height should remain the same', () => {
      expect(newState.rectangle.height).toEqual(startState.rectangle.height);
    });
  });

  describe(' on height change ', () => {
    const newHeight = 300;
    const newState = mouseAppReducer(startState, {type: 'CHANGE_HEIGHT', value: newHeight});

    it('rectangle height should change to the value that is passed in action', () => {
      expect(newState.rectangle.height).toEqual(newHeight);
    });

    it('rectangle width should remain the same', () => {
      expect(newState.rectangle.width).toEqual(startState.rectangle.width);
    });
  });

  it('on CHANGE_CORNER should set the new corner as the start of the coordinates', () => {
    const newCorner = 'bottomRight';
    const newState = mouseAppReducer(startState, {type: 'CHANGE_CORNER', corner: newCorner});
    expect(newState.corner).toEqual(newCorner);
  });

  it('should update rectangle position on SET_RECTANGLE_POSITION', () => {
    const position = {top: 20, left: 30};
    const newState = mouseAppReducer(startState, {type: 'SET_RECTANGLE_POSITION', position});
    expect(newState.rectanglePosition).toEqual(position);
  });

  describe('on mouse moved', () => {
    const coordinates = {x: 210, y: 230};
    const coordinatesOutside = {x: null, y: null};

    it(' the passed coordinates are nulls the mouseCoordinates shoudl become null', () => {
      const newState = mouseAppReducer(startState, {type: 'MOUSE_MOVED', coordinates: coordinatesOutside});
      expect(newState.mouseCoordinates.x).toBeNull();
      expect(newState.mouseCoordinates.y).toBeNull();
    });

    describe('if mouse is inside the rectangle x mouseCoordinates', () => {
      describe(' it should deduct the rectangle position only if ', () => {
        it(' corner is topLeft and take abs', () => {
          const newState = mouseAppReducer({...startState, ...{corner: 'topLeft'}}, {type: 'MOUSE_MOVED', coordinates});
          expect(newState.mouseCoordinates.x).toEqual(Math.abs(coordinates.x - startState.rectanglePosition.left));
        });

        it(' corner is bottomLeft and take abs', () => {
          const newState = mouseAppReducer({...startState, ...{corner: 'bottomLeft'}}, {type: 'MOUSE_MOVED', coordinates});
          expect(newState.mouseCoordinates.x).toEqual(Math.abs(coordinates.x - startState.rectanglePosition.left));
        });
      });

      describe(' it should deduct the rectangle position and rectangle width if ', () => {
        it(' corner is topRight and take abs', () => {
          const newState = mouseAppReducer({...startState, ...{corner: 'topRight'}}, {type: 'MOUSE_MOVED', coordinates});
          expect(newState.mouseCoordinates.x).toEqual(Math.abs(coordinates.x - startState.rectanglePosition.left - startState.rectangle.width));
        });

        it(' corner is bottomRight and take abs', () => {
          const newState = mouseAppReducer({...startState, ...{corner: 'bottomRight'}}, {type: 'MOUSE_MOVED', coordinates});
          expect(newState.mouseCoordinates.x).toEqual(Math.abs(coordinates.x - startState.rectanglePosition.left - startState.rectangle.width));
        });
      })
    });

    describe('if mouse is inside the rectangle y mouseCoordinates', () => {
      describe(' it should deduct the rectangle position only if ', () => {
        it(' corner is topLeft and take abs', () => {
          const newState = mouseAppReducer({...startState, ...{corner: 'topLeft'}}, {type: 'MOUSE_MOVED', coordinates});
          expect(newState.mouseCoordinates.y).toEqual(Math.abs(coordinates.y - startState.rectanglePosition.top));
        });

        it(' corner is topRight and take abs', () => {
          const newState = mouseAppReducer({...startState, ...{corner: 'topRight'}}, {type: 'MOUSE_MOVED', coordinates});
          expect(newState.mouseCoordinates.y).toEqual(Math.abs(coordinates.y - startState.rectanglePosition.top));
        });
      });

      describe(' it should deduct the rectangle position and rectangle height if ', () => {
        it(' corner is bottomLeft and take abs', () => {
          const newState = mouseAppReducer({...startState, ...{corner: 'bottomLeft'}}, {type: 'MOUSE_MOVED', coordinates});
          expect(newState.mouseCoordinates.y).toEqual(Math.abs(coordinates.y - startState.rectanglePosition.top - startState.rectangle.height));
        });

        it(' corner is bottomRight and take abs', () => {
          const newState = mouseAppReducer({...startState, ...{corner: 'bottomRight'}}, {type: 'MOUSE_MOVED', coordinates});
          expect(newState.mouseCoordinates.y).toEqual(Math.abs(coordinates.y - startState.rectanglePosition.top - startState.rectangle.height));
        });
      })
    });
  });
});
