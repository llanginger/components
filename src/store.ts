import { combineReducers, createStore, applyMiddleware, Store } from "redux";

import { componentReducer } from "./reducers/componentReducer";
import { docsReducer } from "./reducers/docsReducer";
import { editorState } from "./reducers/editorState";
import logger from "redux-logger";

export interface Reducers {
    componentReducer: componentReducer;
    docsReducer: docsReducer;
    editorState: editorState;
}
const reducers = combineReducers({
    componentReducer,
    docsReducer,
    editorState
});

export const store: Store<Reducers> = createStore(
    reducers,
    applyMiddleware(logger)
) as Store<Reducers>;
