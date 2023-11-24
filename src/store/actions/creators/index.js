import { SET_CURRENT_TRACK, NEXT_TRACK, PREV_TRACK, TOGGLE_SUFFLED } from "../types/index";


export const setCurrentTrack = (id, content, isPlayingTrack, allTracks) => ({
  type: SET_CURRENT_TRACK,
  payload: {
    id,
    content,
    isPlayingTrack,
    allTracks
  },
});

export const nextTrack = () => ({
  type: NEXT_TRACK,
  
});

