export interface docsReducer {
    showDocs: boolean;
}

const initState: docsReducer = { showDocs: false };

export const docsReducer = (state: docsReducer = initState, action) => {
    switch (action.type) {
        case "SHOW_DOCS":
            return { showDocs: true };
        case "HIDE_DOCS":
            return { showDocs: false };
        case "TOGGLE_DOCS":
            return { showDocs: !state.showDocs };
        default:
            return state;
    }
};
