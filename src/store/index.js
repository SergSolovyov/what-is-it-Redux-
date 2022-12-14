import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { countReducer } from './countReducer';
import { userReducer } from './userReducer';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
  count: countReducer,
  users: userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(rootWatcher)
