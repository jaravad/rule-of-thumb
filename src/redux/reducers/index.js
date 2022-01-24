import { types } from '../types';

const initialState = null;

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setCharacters:
      return action.payload;
    case types.setCharacterLoading:
      return state.map((character) => {
        if (character.id === action.payload.id) {
          return {
            ...character,
            loading: action.payload.loading,
          };
        }
        return character;
      });
    case types.setAlreadyVoted:
      return state.map((character) => {
        if (character.id === action.payload.id) {
          return {
            ...character,
            alreadyVoted: action.payload.alreadyVoted,
          };
        }
        return character;
      });
    case types.voteUp:
      return state.map((character) => {
        if (character.id === action.payload) {
          return {
            ...character,
            votes: {
              ...character.votes,
              positive: character.votes.positive + 1,
            },
          };
        }
        return character;
      });
    case types.voteDown:
      return state.map((character) => {
        if (character.id === action.payload) {
          return {
            ...character,
            votes: {
              ...character.votes,
              negative: character.votes.negative + 1,
            },
          };
        }
        return character;
      });
    default:
      return state;
  }
};
