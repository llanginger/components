export const DISPLAY_COMPONENT = (payload) => {
  return {
    type: 'DISPLAY_COMPONENT',
    payload
  }
}

export const UPDATE_PROP = (propToUpdate, valueToUpdate) => {
  return {
    type: 'UPDATE_PROP',
    propToUpdate,
    valueToUpdate
  }
}

export const SHOW_DOCS = () => {
  return {
    type: 'SHOW_DOCS'
  }
}

export const TEST = () => {
  return {
    type: 'test'
  }
}


export const HIDE_DOCS = () => {
  return {
    type: 'SHOW_DOCS'
  }
}

export const TOGGLE_DOCS =() => {
  return {
    type: 'TOGGLE_DOCS'
  }
}