import { SET_CURRENT_TRACK, NEXT_TRACK, PREV_TRACK, TOGGLE_SUFFLED, ALL_TRACKS_LOADING, SET_PAGE } from "../actions/types/index";

// 1.
const initialState = {
  currentTrack: {},
  isPlayingTrack: null,
  tracks: [],
  isSuffled: false,
  currentPage: "main",
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
        const currentTrackIndex = state.tracks.findIndex((track) => (track.id === state.currentTrack.content.id));
        let content = state.tracks[currentTrackIndex + 1];
        const suffled = state.isSuffled;
        
      if(!content){
        return state;
      }  
      
      if (suffled){
        let allIds = [];
        for (let i = 0; i < state.tracks.length; i++) {
          allIds.push(state.tracks[i].id)
        }
        
        const newAllIds = allIds.sort(()=> Math.random() - 0.5)
        const randomTrackId = newAllIds[0]
        content = state.tracks[randomTrackId]
      }

        return {
         ...state,
         currentTrack: {content}
          };
        }

       

        case PREV_TRACK: {
          const currentTrackIndex = state.tracks.findIndex((track) => (track.id === state.currentTrack.content.id))
          let content = state.tracks[currentTrackIndex - 1]
          const suffled = state.isSuffled;
        if(!content){
          return state;
        }  
        
        if (suffled){
          let allIds = [];
          for (let i = 0; i < state.tracks.length; i++) {
            allIds.push(state.tracks[i].id)
          }
          
          const newAllIds = allIds.sort(()=> Math.random() - 0.5)
          const randomTrackId = newAllIds[0]
          content = state.tracks[randomTrackId]
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
