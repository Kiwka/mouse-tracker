export const changeWidth = value => {
  return {
    type: 'CHANGE_WIDTH',
    value,
  }
}

export const changeHeight = value => {
  return {
    type: 'CHANGE_HEIGHT',
    value
  }
}

export const mouseMoved = coordinates => {
  return {
    type: 'MOUSE_MOVED',
    coordinates,
  }
}

export const setRectanglePosittion = position => {
  return {
    type: 'SET_RECTANGLE_POSITION',
    position,
  }
}

export const changeCorner = corner => {
  return {
    type: 'CHANGE_CORNER',
    corner,
  }
}
