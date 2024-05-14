import axios from 'axios'

type ItemsType = {
    [
        {
            "author": {
                "id": "string",
                "name": "string"
            },
            "id": "string",
            "userId": "string",
            "name": "string",
            "isPrivate": true,
            "cover": "string",
            "created": "2024-05-14T20:35:02.252Z",
            "updated": "2024-05-14T20:35:02.252Z",
            "cardsCount": 0
        }
        ]
}
type PaginationType = {
    currentPage: number,
    itemsPerPage: number,
    totalPages: number,
    totalItems: number

}
export type GetDecksType = {
    items: ItemsType,
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
    }
}