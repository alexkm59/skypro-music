import { SET_CURRENT_TRACK, NEXT_TRACK, PREV_TRACK, TOGGLE_SUFFLED } from "../actions/types/index";

// 1.
const initialState = {
  currentTrack: {},
};

// 2.
export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    // 3.
    case SET_CURRENT_TRACK: {
      // 4.
      const { content } = action.payload;

      // 5.
      return {
        
        currentTrack: {content}
        };
      }

      default:
        return state;
   
    }

  }
