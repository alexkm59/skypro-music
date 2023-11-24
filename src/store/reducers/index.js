import { SET_CURRENT_TRACK, NEXT_TRACK, PREV_TRACK, TOGGLE_SUFFLED } from "../actions/types/index";

// 1.
const initialState = {
  currentTrack: {},
  isPlayingTrack: null,
  tracks: []
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    
    case SET_CURRENT_TRACK: {
      
      const { id, content, isPlayingTrack, allTracks } = action.payload;

      
      return {
        id: id,
       ...state, 
       currentTrack: {content},
       isPlayingTrack: isPlayingTrack,
       tracks: allTracks
        };
      }
      
    case NEXT_TRACK: {
        const currentTrackIndex = state.tracks.findIndex((track) => track.id === state.currentTrack.id)
        console.log(`state.tracks ${state.tracks}`);
        console.log(`state.currentTrack ${state.currentTrack}`);
        console.log(currentTrackIndex);
        const newTrack = state.tracks[currentTrackIndex + 1]
        console.log(newTrack);
      if(!newTrack){
        return state;
      }  
      
        return {
         
         ...state,
         currentTrack: newTrack
       
          };
        }

      default:
        return state;
   
    }

  }
