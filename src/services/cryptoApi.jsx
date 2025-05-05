

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const cryptoHeaders = {
    'x-rapidapi-key': 'a71cdd1dc8msh194b7a2d9f5efe6p181a9ejsn7b273b9e4355',
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}
const baseUrl = "https://coinranking1.p.rapidapi.com";
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => ({
                url: "/coins",
                headers: cryptoHeaders
            })
        })
    })

}

)

export const { useGetCryptosQuery } = cryptoApi



