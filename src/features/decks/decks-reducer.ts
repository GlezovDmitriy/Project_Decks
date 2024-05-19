import {GetDecksType, ItemsType} from "./decks-api.ts";


const initialState = {
  decks: [] as ItemsType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState
type ActionType = DecksActions | AddDecksActionType
export const decksReducer = (state: DecksState = initialState, action: ActionType): DecksState => {
  switch (action.type) {
    case "SET-DECKS": {
      return {...state, decks: action.decks}
    }
    case "ADD-DECK": {
      return {...state, decks:[action.deck, ...state.decks]}
    }
    default:
      return state
  }
}

type DecksActions = {
  type: "SET-DECKS",
  decks: ItemsType[]
}
type AddDecksActionType = ReturnType<typeof addDecksAC>
export const setDecksAC = (decks: ItemsType[]): DecksActions=>{
  return {type: "SET-DECKS", decks}
}
export const addDecksAC = (deck: ItemsType) =>{
  return {
    type: "ADD-DECK" as const,
    deck
  }
}