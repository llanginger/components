import { ButtonBundle } from "../componentList/blueprint/BPButton";

export interface componentReducer {
    component: any;
    name: string;
    docs?: any;
}

const compReducerInit: componentReducer = {
    component: ButtonBundle.childNode,
    name: ""
};

export const componentReducer = (
    state: componentReducer = compReducerInit,
    action
) => {
    switch (action.type) {
        case "DISPLAY_COMPONENT":
            return {
                ...state,
                component: action.payload.childNode,
                name: action.payload.componentName
            };
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
