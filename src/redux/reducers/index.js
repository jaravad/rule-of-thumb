import { data } from '../../assets/data';
import { types } from '../types';

const initialState = data;

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.voteUp:
      return state;
    case types.voteDown:
      return state;
    default:
      return state;
  }
};
