import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi"

export default function News() {
  // const count = simplified ? 10 : 100;

  let { data, isLoading } = useGetCryptoNewsQuery({ refetchOnMountOrArgChange: false });
  if (isLoading) return <h1>Loading.......... ⏳</h1>


  console.log(data);

  return (
    <>


    </>
  )
}
