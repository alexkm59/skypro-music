import { SET_CURRENT_TRACK, NEXT_TRACK, PREV_TRACK, TOGGLE_SUFFLED } from "../types/index";


export const setCurrentTrack = (id, content, isPlayingTrack) => ({
  type: SET_CURRENT_TRACK,
  payload: {
    id,
    content,
    isPlayingTrack
  },
});

export const nextTrack = (AllIds,content, currentTrackId) => ({
  type: NEXT_TRACK,
  payload: {
    
    AllIds,
    content,
    currentTrackId,
  },
});

