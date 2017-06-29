export interface editorState {
    showComponents: boolean;
    showAdvancedEditor: boolean;
}

const initState: editorState = {
    showComponents: true,
    showAdvancedEditor: false
};

export const editorState = (state: editorState = initState, action) => {
    switch (action.type) {
        case "SHOW_EDITOR":
        case "DISPLAY_COMPONENT":
            return { ...state, showComponents: false };
        case "SHOW_COMPONENTS":
            return { ...state, showComponents: true };
        case "SHOW_ADVANCED_EDITOR":
            return { ...state, showAdvancedEditor: true };
        case "HIDE_ADVANCED_EDITOR":
            return { ...state, showAdvancedEditor: false };
        default:
            return state;
    }
};
