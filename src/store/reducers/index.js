import { SET_CURRENT_TRACK, NEXT_TRACK, PREV_TRACK, TOGGLE_SUFFLED } from "../actions/types/index";

// 1.
const initialState = {
  currentTrack: {},
  allIds: []
};

// 2.
export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    // 3.
    case SET_CURRENT_TRACK: {
      // 4.
      const { id, content, isPlayingTrack } = action.payload;

      // 5.
      return {
        id: id,
       ...state, currentTrack: {content},
       isPlayingTrack: isPlayingTrack
        };
      }
      
    case NEXT_TRACK: {
        const { Ids, content } = action.payload;
        const currentTrackId = 10;
        
        if(Ids){
          const currentTrackIndex = Ids.indexOf(currentTrackId)
          const newCurrentTrackIndex = Ids[currentTrackIndex + 1]
          console.log(newCurrentTrackIndex);
          const newCurrentTrack = content[newCurrentTrackIndex]
        }
        
        
        return {
         
         ...state, 
         
          allIds: [...state.allIds, Ids],
        
      
        
          };
        }





      default:
        return state;
   
    }

  }
