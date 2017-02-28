import React from 'react';

const s = getStyle();

const RectangleConfigComp = (props) =>
    <div className="ui grid" style={s.text}>
      <div className="three wide column"></div>
      <section className="five wide column">
        <header style={s.header}>Please, type the dimentions of the rectangle</header>
        <div><title style={s.title}>Height{' '}</title>
          <div className="ui input">
            <input value={props.height} type="number"
              onChange={e => props.onHeightChange(e.target.value)} />
          </div>
        </div>
        <div><title style={s.title}>Width{' '}</title>
          <div className="ui input">
            <input className="ui input" value={props.width} type="number"
              onChange={e => props.onWidthChange(e.target.value)} />
          </div>
        </div>
     </section>
     <section className="five wide column">
       <header style={s.header}>Choose from which corner calculate mouse position</header>
       <select className="ui dropdown" onChange={e => props.changeCorner(e.target.value)}>
          <option value="topLeft">Top Left</option>
          <option value="topRight">Top Right</option>
          <option value="bottomLeft">Bottom Left</option>
          <option value="bottomRight">Bottom Right</option>
       </select>
     </section>
     <div className="three wide column"></div>
   </div>;

export default RectangleConfigComp;

RectangleConfigComp.propTypes = {
  height: React.PropTypes.number,
  width: React.PropTypes.number,
  onWidthChange: React.PropTypes.func,
  onHeightChange: React.PropTypes.func,
  changeCorner: React.PropTypes.func,
}

function getStyle() {
  return {
    text: {
      fontSize: 18,
    },
    header: {
      fontWeight: 600,
      marginBottom: 10,
    },
    title: {
      minWidth: 75,
      display: 'inline-block',
    }
  }
};
