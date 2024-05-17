import {AppRootState} from "../../app/store.ts";

export const selector = (state: AppRootState)=> state.decksReducer.decks
