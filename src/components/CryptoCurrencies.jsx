import { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi"
import { Card, Col, Input, Row } from 'antd';
import millify from "millify";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";

// eslint-disable-next-line react/prop-types
export default function CryptoCurrencies({ simplified }) {
  const count = simplified ? 10 : 100;

  const {
    data: cryptosList,
    isFetching


  } = useGetCryptosQuery(count)
  const [crypto, setCrypto] = useState()
  const [searchTerm, setSearchTerm] = useState('')
  console.log(crypto);

  useEffect(() => {
    // setCrypto(cryptosList?.data?.coins)
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setCrypto(filteredData)
  }, [cryptosList, searchTerm])
  if (isFetching) return <Loader />

  return (
    <>
      <div className="search-crypto">
        <Input placeholder="Search Crypto Currency" onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
      <Row gutter={[32, 32]} className="crypto-card-container">

        {crypto?.map((currency) => (
          <Col xs={24} sm={12} md={8} lg={6} key={currency.uuid} className="crypto-card">
            <NavLink to={`/crypto/${currency.uuid}`}>
              <Card title={`${currency.rank} - ${currency.name}`} extra={<img src={currency.iconUrl} className="crypto-image" />} hoverable>
                <p>Price: {millify(currency.price)}</p>
                <p>MarketCap: {millify(currency.marketCap)}</p>
                <p>Daily Change{currency.change}%</p>
              </Card>

            </NavLink>



          </Col>
        ))}

      </Row >
    </>
  )
}
