import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./reducers/index"

export const store = configureStore({

reducer: {
    player: playerReducer,
}

});