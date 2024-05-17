import s from './DecksList.module.css'
import {useEffect, useState} from "react";
import {decksApi, ItemsType} from "../decks-api.ts";
import {setDecksAC} from "../decks-reducer.ts";
import dispatch from "redux"
import {useDispatch, useSelector} from "react-redux";
import {DeckItem} from "./DeckItem/DeckItem.tsx";
import {store, useAppDispatch, useAppSelector} from "../../../app/store.ts";
import {selector} from "../decks-selectors.ts";
import {fetchDecksTC} from "../decks-thunks.ts";
import {useFetchDecks} from "./useFetchDecks.tsx";
export const DecksList = () => {

  //const decks = useAppSelector(state => state.decksReducer.decks)
  // можно вынести отдельно в селекторы
  ///////////////////////////////////////////
  /*const decks = useAppSelector(selector)
  const dispatch = useAppDispatch();         //это все  можно вынести в отдельную функцию (хук) useFetchDecks
  useEffect(() => {
   dispatch(fetchDecksTC())
  }, [dispatch]);*/
/////////////////////////////////////////////
  const {decks} = useFetchDecks()

  return <ul className={s.list}>
    {decks.map(el =>(
        <DeckItem key={el.id} deck={el} />
        )
    )}

  </ul>

}
