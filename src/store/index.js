import * as reducers from './reducers';
import { combineReducers, createStore } from 'redux';

const todosReducer = combineReducers(reducers);
const store = createStore(todosReducer); // création du store

export default store;