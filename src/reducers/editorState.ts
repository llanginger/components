export interface editorState {
    showComponents: boolean;
}

const initState: editorState = {
    showComponents: true
};

export const editorState = (state: editorState = initState, action) => {
    switch (action.type) {
        case "SHOW_EDITOR":
            return { showComponents: false };
        case "SHOW_COMPONENTS":
            return { showComponents: true };
        default:
            return state;
    }
};
