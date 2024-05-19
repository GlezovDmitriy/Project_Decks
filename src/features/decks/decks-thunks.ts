import {AddDeckParamsType, decksApi, ItemsType} from "./decks-api.ts";
import dispatch, {Dispatch} from "redux";
import {addDecksAC, setDecksAC} from "./decks-reducer.ts";

export const fetchDecksTC = ()=>{
    return (dispatch: Dispatch) =>{
        decksApi.getDecks().then(res => dispatch(setDecksAC(res.data.items)))
    }
}

export const addDecksTC = (params: AddDeckParamsType)=>{
    return (dispatch: Dispatch) =>{
        decksApi.addDeck(params).then(res => dispatch(addDecksAC(res.data)))
    }
}