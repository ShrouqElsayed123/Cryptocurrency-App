import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"




const cryptoNewsHeader = {
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
    'x-rapidapi-host': 'google-news13.p.rapidapi.com'
}

const baseUrl = 'https://google-news13.p.rapidapi.com'

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: () => ({
                url: `/latest?lr=en-US`,
                headers: cryptoNewsHeader,

            })
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi
