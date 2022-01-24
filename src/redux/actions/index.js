import { db, doc, updateDoc, increment } from '../../firebase';
import { types } from '../types';

export const setCharacters = (characters) => ({
  type: types.setCharacters,
  payload: characters,
});

export const setCharacterLoading = (characterId, loading) => ({
  type: types.setCharacterLoading,
  payload: { id: characterId, loading },
});

export const setAlreadyVoted = (characterId, alreadyVoted) => ({
  type: types.setAlreadyVoted,
  payload: { id: characterId, alreadyVoted },
});

export const voteUpCharacter = (characterId) => {
  return async (dispatch) => {
    dispatch(setCharacterLoading(characterId, true));
    try {
      const characterRef = doc(db, 'characters', characterId);
      await updateDoc(characterRef, {
        'votes.positive': increment(1),
      });
      dispatch({
        type: types.voteUp,
        payload: characterId,
      });
      dispatch(setAlreadyVoted(characterId, true));
    } catch (err) {
      console.error(err);
    }
    dispatch(setCharacterLoading(characterId, false));
  };
};

export const voteDownCharacter = (characterId) => {
  return async (dispatch) => {
    dispatch(setCharacterLoading(characterId, true));
    try {
      const characterRef = doc(db, 'characters', characterId);
      await updateDoc(characterRef, {
        'votes.negative': increment(1),
      });
      dispatch({
        type: types.voteDown,
        payload: characterId,
      });
      dispatch(setAlreadyVoted(characterId, true));
    } catch (err) {
      console.error(err);
    }
    dispatch(setCharacterLoading(characterId, false));
  };
};
