import { SET_CURRENT_TRACK, NEXT_TRACK, PREV_TRACK, TOGGLE_SUFFLED, ALL_TRACKS_LOADING, SET_PAGE, FAVORITE_TRACKS_LOADING, SET_ACCESS_TOKEN, SET_FILTER_TRACKS, SET_AUTHOR_FILTER, SET_GENRE_FILTER, SET_SORT_FILTER, SET_SERTCH_FILTER} from "../types/index";


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

  export const toggleAuthorFilter = (isActive) => ({
    type: SET_AUTHOR_FILTER,
    payload: {
      isActive,
    },
      
    });

    export const setSortFilter = (filter) => ({
      type: SET_SORT_FILTER,
      payload: {
        filter,
      },
    });

    export const toggleGenreFilter = (isActive) => ({
      type: SET_GENRE_FILTER,
      payload: {
        isActive,
      },
        
      });

      export const sertchTraks = ({NewAllTracks})=>({
      type: SET_SERTCH_FILTER,
      payload: {
        NewAllTracks,
      },
      })


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