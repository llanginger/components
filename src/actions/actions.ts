import { Action } from "redux";

interface PayloadAction extends Action {
    payload: any;
}
export const DISPLAY_COMPONENT: (payload) => PayloadAction = payload => {
    const actionObj: PayloadAction = {
        type: "DISPLAY_COMPONENT",
        payload
    };
    return actionObj;
};

interface UpdateAction extends Action {
    propToUpdate: any;
    valueToUpdate: any;
}
export const UPDATE_PROP: (propToUpdate, valueToUpdate) => UpdateAction = (
    propToUpdate,
    valueToUpdate
) => {
    const actionObj: UpdateAction = {
        type: "UPDATE_PROP",
        propToUpdate,
        valueToUpdate
    };
    return actionObj;
};

export const SHOW_DOCS: () => Action = () => {
    return {
        type: "SHOW_DOCS"
    };
};

export const TEST = () => {
    return {
        type: "test"
    };
};

export const HIDE_DOCS: () => Action = () => {
    return {
        type: "SHOW_DOCS"
    };
};

export const TOGGLE_DOCS: () => Action = () => {
    return {
        type: "TOGGLE_DOCS"
    };
};
