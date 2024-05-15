import {GetDecksType, ItemsType} from "./decks-api.ts";

const initialState = {
  decks: [] as ItemsType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case "SET-DECKS": {
      return {...state, decks: action.decks}
    }
    default:
      return state
  }
}

type DecksActions = {
  type: "SET-DECKS",
  decks: ItemsType[]
}

export const setDecksAC = (decks: ItemsType[]): DecksActions=>{
  return {type: "SET-DECKS", decks}
}