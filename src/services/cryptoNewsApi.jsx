import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"




const cryptoNewsHeader = {
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
    'x-rapidapi-host': 'newsapi90.p.rapidapi.com'
}

const baseUrl = 'https://newsapi90.p.rapidapi.com/topic'

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: () => ({
                url: `/business?language=en-US&region=US`,
                headers: cryptoNewsHeader,


            })
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi
