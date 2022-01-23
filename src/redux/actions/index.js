import { types } from '../types';

export const voteUp = (characterId) => ({
  type: types.voteUp,
  payload: { characterId },
});
