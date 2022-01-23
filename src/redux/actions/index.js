import { types } from '../types';

export const addCharacters = (characters) => ({
  type: types.addCharacters,
  payload: characters,
});

export const voteUp = (characterId) => ({
  type: types.voteUp,
  payload: { characterId },
});
