import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { mouseAppReducer } from './reducers'
import RectangleConfig from  './containers/rectangle-config';
import RectangleArea from './containers/rectangle-area';
import MouseCoordinates from './containers/mouse-coordinates';

const store = createStore(
  mouseAppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const s = getStyle();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1 style={s.header}>Let's track the mouse</h1>
          <RectangleConfig />
          <RectangleArea />
          <MouseCoordinates />
        </div>
      </Provider>
    );
  }
}

export default App;

function getStyle() {
  return {
    header: {
      textAlign: 'center',
      background: 'black',
      color: 'white',
      lineHeight: '48px',
    },
  }
}
