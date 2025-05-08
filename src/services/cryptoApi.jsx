

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoHeaders = {
    'x-rapidapi-key': import.meta.env.VITE_API_URL,
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = "https://coinranking1.p.rapidapi.com";
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => ({
                url: `/coins?limit=${count}`,
                headers: cryptoHeaders
            })
        })
    })

}

)

export const { useGetCryptosQuery } = cryptoApi



