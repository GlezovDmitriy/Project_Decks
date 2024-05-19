import s from './AddNewPostForm.module.css'
import { useForm } from 'react-hook-form'
import {decksApi} from "../decks-api.ts";
import dispatch from "redux";
import {addDecksAC} from "../decks-reducer.ts";
import {addDecksTC} from "../decks-thunks.ts";
import {store, useAppDispatch} from "../../../app/store.ts";

type FormValues = {
  name: string
}

export const AddNewDeckForm = () => {

  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
    },
  })

  const onSubmit = (data: FormValues) => {
   dispatch(addDecksTC(data))
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={s.label}>
        Deck name
        <input
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name must be longer than or equal to 3 characters',
            },
          })}
          autoComplete="off"
        />
        <p className={s.errorMessage}>{errors.name && errors.name.message}</p>
      </label>
      <button type="submit">Add new deck</button>
    </form>
  )
}
