import axios from 'axios'

export type ItemsType = {
    author: AuthorType,
    id: string,
    userId: string,
    name: string,
    isPrivate: boolean,
    cover: string,
    created: string,
    updated: string,
    cardsCount: number
}
type AuthorType = {
    id: string,
    name: string
}
type PaginationType = {
    currentPage: number,
    itemsPerPage: number,
    totalPages: number,
    totalItems: number

}
export type GetDecksType = {
    items: ItemsType[],
    pagination: PaginationType
}

export const instance = axios.create({
    baseURL: 'https://api.flashcards.andrii.es',
    headers: {
        'x-auth-skip': true,
    },
})

export const decksApi = {
    getDecks() {
        return instance.get<GetDecksType>('/v2/decks')
    },
    addDeck (name:string) {
        return instance.post<ItemsType>('/v1/decks', name)
    }
}