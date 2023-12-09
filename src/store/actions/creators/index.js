import { SET_CURRENT_TRACK, NEXT_TRACK, PREV_TRACK, TOGGLE_SUFFLED, ALL_TRACKS_LOADING, SET_PAGE} from "../types/index";


export const setCurrentTrack = (id, content, isPlayingTrack) => ({
  type: SET_CURRENT_TRACK,
  payload: {
    id,
    content,
    isPlayingTrack,
    // allTracks
  },
});

export const nextTrack = () => ({
  type: NEXT_TRACK,
  
});

export const prevTrack = () => ({
  type: PREV_TRACK,
  
});

export const toggleSuffled = (isSuffled) => ({
  type: TOGGLE_SUFFLED,
  payload: {
    isSuffled,
  },
    
  });

  export const allTrakcksLoading = ( {allTracks}) => ({
    type: ALL_TRACKS_LOADING,
    payload: {
      allTracks,
    },
  });
  
export const setPage = ({newPage}) => ({
  type: SET_PAGE,
  payload: {
    newPage,
  },
})
