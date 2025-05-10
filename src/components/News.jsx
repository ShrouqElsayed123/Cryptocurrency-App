import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi"

export default function News() {
  let { data, isFetching, isLoading } = useGetCryptoNewsQuery();
  if (isLoading) return <h1>Loading..........</h1>


  console.log(data);

  return (
    <>

    </>
  )
}
