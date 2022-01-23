import { types } from '../types';

const initialState = null;

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addCharacters:
      return action.payload;
    case types.voteUp:
      return state;
    case types.voteDown:
      return state;
    default:
      return state;
  }
};
