import {decksApi, ItemsType} from "./decks-api.ts";
import dispatch, {Dispatch} from "redux";
import {setDecksAC} from "./decks-reducer.ts";

export const fetchDecksTC = ()=>{
    return (dispatch: Dispatch) =>{
        decksApi.getDecks().then(res => dispatch(setDecksAC(res.data.items)) )
    }
}