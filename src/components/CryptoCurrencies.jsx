import { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi"
import { Card, Col, Row } from 'antd';
import millify from "millify";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CryptoCurrencies({ simplified }) {
  const count = simplified ? 10 : 100;

  const {
    data: cryptosList,
    isFetching


  } = useGetCryptosQuery(count)
  const [crypto, setCrypto] = useState(cryptosList?.data?.coins)
  console.log(crypto);



  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">

        {crypto.map((currency) => (
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
