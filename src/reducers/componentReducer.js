import { ButtonBundle } from "../componentList/blueprint/BPButton";

const compReducerInit = {
    component: ButtonBundle.childNode,
    name: ""
};

export const componentReducer = (state = compReducerInit, action) => {
    switch (action.type) {
        case "DISPLAY_COMPONENT":
            console.log("Action payload: ", action.payload);
            console.log(
                "Action component defaultProps",
                action.payload.childNode.defaultProps
            );
            return {
                ...state,
                component: action.payload.childNode,
                name: action.payload.componentName
            };
        case "test":
            console.log("hi");
            return state;
        case "UPDATE_PROP":
            return {
                ...state,
                component: {
                    ...state.component,
                    props: {
                        ...state.component.props,
                        [action.propToUpdate]: action.valueToUpdate
                    }
                }
            };
        default:
            return state;
    }
};
