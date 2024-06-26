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
export const useFetchDecks = () => {
  const decks = useAppSelector(selector)
  const dispatch = useAppDispatch();

  useEffect(() => {
   dispatch(fetchDecksTC())
  }, [dispatch]);

  return {
    decks
  }
}
