const initState = { showDocs: false }

export const docsReducer = (state = initState, action) => {
  switch(action.type) {
    case 'SHOW_DOCS':
      return { showDocs: true }
    case 'HIDE_DOCS':
      return { showDocs: false }
    case 'TOGGLE_DOCS':
      return { showDocs: !state.showDocs}
    default:
      return state
  }
}