import { SET_CURRENT_TRACK, NEXT_TRACK, PREV_TRACK, TOGGLE_SUFFLED, ALL_TRACKS_LOADING, SET_PAGE, FAVORITE_TRACKS_LOADING, SET_ACCESS_TOKEN, SET_FILTER_ACTIVE, SET_FILTER_TRACKS, SET_AUTHOR_FILTER, SET_GENRE_FILTER, SET_SORT_FILTER } from "../actions/types/index";

// 1.
const initialState = {
  currentTrack: {},
  isPlayingTrack: null,
  tracks: [],
  isSuffled: false,
  currentPage: "mine",
  favoriteTracks:[],
  accessToken: null,
  isAuthorFilterActive: false,
  isGenreFilterActive: false,
  filtredTracks: [],
  sortFilter: "По-умолчанию",
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {

    case ALL_TRACKS_LOADING: {
      const {allTracks } = action.payload;
      return {
        
       ...state, 
       tracks: allTracks,
        };
      }

      case SET_SORT_FILTER: {
        const {filter} = action.payload;
        return {
         ...state, 
         sortFilter: filter,
          };
        }



      case SET_AUTHOR_FILTER: {
        const {isActive} = action.payload;
        return {
          
         ...state, 
         isAuthorFilterActive: isActive,
          };
        }
        
        case SET_GENRE_FILTER: {
          const {isActive} = action.payload;
          return {
            
           ...state, 
           isGenreFilterActive: isActive,
            };
          }


        case SET_FILTER_TRACKS: {
          const {NewAllTracks } = action.payload;
          return {
            
           ...state, 
           filtredTracks: NewAllTracks,
            };
          }


      case FAVORITE_TRACKS_LOADING: {
        const { allfavoriteTracks } = action.payload;
        return {
          
         ...state, 
         favoriteTracks: allfavoriteTracks,
          };
        }

        case SET_ACCESS_TOKEN: {
          const {accessToken } = action.payload;
          return {
            
           ...state, 
           accessToken: accessToken,
            };
          }


      case SET_PAGE: {
        const {newPage } = action.payload;
        return {
          
         ...state, 
         currentPage: newPage,
          };
        }

    
    case SET_CURRENT_TRACK: {
      
      const {id, content, isPlayingTrack, allTracks } = action.payload;

      
      return {
        id: id,
       ...state, 
       currentTrack: {content},
       isPlayingTrack: isPlayingTrack,
      //  tracks: allTracks
        };
      }
      
    case NEXT_TRACK: {
      let workTracks = [];
      if (state.currentPage === "mine"){
         workTracks = state.tracks;
      }
      if (state.currentPage === "favorite"){
         workTracks = state.favoriteTracks;
      }


      const currentTrackIndex = workTracks.findIndex((track) => (track.id === state.currentTrack.content.id));
        
      let content = workTracks[currentTrackIndex + 1];

      // const currentTrackIndex = state.tracks.findIndex((track) => (track.id === state.currentTrack.content.id));
        
      // let content = state.tracks[currentTrackIndex + 1];
      
      const suffled = state.isSuffled;
        
      if(!content){
        return state;
      }  
      
      if (suffled){
        let allIds = [];
        for (let i = 0; i < workTracks.length; i++) {
          allIds.push(i)
          // код ниже собирает массив id треков
          // allIds.push(workTracks[i].id)
        }
        const newAllIds = allIds.sort(()=> Math.random() - 0.5)
        const randomTrackId = newAllIds[0]
        content = workTracks[randomTrackId]
        
      }

        return {
         ...state,
         currentTrack: {content}
          };
        }

       

        case PREV_TRACK: {
          let workTracks = [];
      if (state.currentPage === "mine"){
         workTracks = state.tracks;
      }
      if (state.currentPage === "favorite"){
         workTracks = state.favoriteTracks;
      }
           
          const currentTrackIndex = workTracks.findIndex((track) => (track.id === state.currentTrack.content.id))
          let content = workTracks[currentTrackIndex - 1]
          const suffled = state.isSuffled;
        if(!content){
          return state;
        }  
        
        if (suffled){
          let allIds = [];
          for (let i = 0; i < workTracks.length; i++) {
            
            allIds.push(i)
            // код ниже собирает массив id треков
            // allIds.push(state.tracks[i].id)
          }
          
          const newAllIds = allIds.sort(()=> Math.random() - 0.5)
          const randomTrackId = newAllIds[0]
          content = workTracks[randomTrackId]
        }

          return {
           
           ...state,
           currentTrack: {content}
         
            };
          }

          case TOGGLE_SUFFLED: {
            
            const {isSuffled} = action.payload;
         
          
            return {
             
             ...state,
             isSuffled: isSuffled
           
              };
            }


      default:
        return state;
   
    }

  }
