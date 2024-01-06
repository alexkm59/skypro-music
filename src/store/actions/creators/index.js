import { SET_CURRENT_TRACK, NEXT_TRACK, PREV_TRACK, TOGGLE_SUFFLED, ALL_TRACKS_LOADING, SET_PAGE, FAVORITE_TRACKS_LOADING, SET_ACCESS_TOKEN, SET_FILTER_ACTIVE, SET_FILTER_TRACKS} from "../types/index";


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

  export const toggleFilterActive = (isActive) => ({
    type: SET_FILTER_ACTIVE,
    payload: {
      isActive,
    },
      
    });

    export const filtredTrakcksLoading = ( {NewAllTracks}) => ({
      type: SET_FILTER_TRACKS,
      payload: {
        NewAllTracks,
      },
    });


  export const allTrakcksLoading = ( {allTracks}) => ({
    type: ALL_TRACKS_LOADING,
    payload: {
      allTracks,
    },
  });

  export const setAccessToken = ( {accessToken}) => ({
    type: SET_ACCESS_TOKEN,
    payload: {
      accessToken,
    },
  });

  
export const setPage = ({newPage}) => ({
  type: SET_PAGE,
  payload: {
    newPage,
  },
})

export const favoriteTrakcksLoading = ( {allfavoriteTracks}) => ({
  type: FAVORITE_TRACKS_LOADING,
  payload: {
    allfavoriteTracks,
  },
});