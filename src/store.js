import { combineReducers, createStore, applyMiddleware } from 'redux'

import { componentReducer } from './reducers/componentReducer'
import { docsReducer } from './reducers/docsReducer'

import logger from 'redux-logger'

const reducers = combineReducers({componentReducer, docsReducer})

export const store = createStore(reducers, applyMiddleware(logger))