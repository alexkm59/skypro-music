import { SET_CURRENT_TRACK, NEXT_TRACK, PREV_TRACK, TOGGLE_SUFFLED } from "../types/index";


export const setCurrentTrack = (content) => ({
  type: SET_CURRENT_TRACK,
  payload: {
    content,
  },
});

