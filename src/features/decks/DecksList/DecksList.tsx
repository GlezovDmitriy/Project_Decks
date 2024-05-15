import s from './DecksList.module.css'
import {useEffect, useState} from "react";
import {decksApi, ItemsType} from "../decks-api.ts";
import {setDecksAC} from "../decks-reducer.ts";
import dispatch from "redux"
import {useDispatch} from "react-redux";
import {DeckItem} from "./DeckItem/DeckItem.tsx";
export const DecksList = () => {
  const [decks, setDecks] = useState<ItemsType[]>([])
  const dispatch = useDispatch();
  useEffect(() => {
    decksApi.getDecks().then(res => dispatch(setDecksAC(res.data.items)) && setDecks(res.data.items))

  }, []);


  return <ul className={s.list}>
    {decks.map(el =>(
        <DeckItem key={el.id} deck={el} />
        )
    )}

  </ul>

}
