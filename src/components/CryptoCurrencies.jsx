import { useGetCryptosQuery } from "../services/cryptoApi"

export default function CryptoCurrencies() {

  const {
    data: cryptosList,
    isFetching


  } = useGetCryptosQuery()




  return (
    <>
      CryptoCurrencies
    </>
  )
}
