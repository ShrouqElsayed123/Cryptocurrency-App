

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoHeaders = {
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = "https://coinranking1.p.rapidapi.com";

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count = 10) => ({
                url: `/coins`,
                headers: cryptoHeaders,
                params: { limit: count }
            })
        })
    })

}

)

export const { useGetCryptosQuery } = cryptoApi



