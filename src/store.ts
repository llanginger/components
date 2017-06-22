import { combineReducers, createStore, applyMiddleware, Store } from "redux";

import { componentReducer } from "./reducers/componentReducer";
import { docsReducer } from "./reducers/docsReducer";
import logger from "redux-logger";

interface Reducers {
    componentReducer: componentReducer;
    docsReducer: docsReducer;
}
const reducers = combineReducers({ componentReducer, docsReducer });

export const store: Store<Reducers> = createStore(
    reducers,
    applyMiddleware(logger)
) as Store<Reducers>;
