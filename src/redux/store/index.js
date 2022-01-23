import { createStore, combineReducers } from 'redux';
import { charactersReducer } from '../reducers';

const reducers = combineReducers({
  characters: charactersReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
