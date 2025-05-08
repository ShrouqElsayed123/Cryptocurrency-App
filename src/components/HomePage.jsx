import { Col, Row, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { NavLink } from 'react-router-dom';
import CryptoCurrencies from "./CryptoCurrencies";
import News from "./News";
import Loader from "./Loader";
const { Title } = Typography;

export default function HomePage() {
  const {
    data,
    isFetching

  } = useGetCryptosQuery()
  const globalStats = data?.data?.stats



  if (isFetching) return <Loader />






  return (
    <>
      <Title level={2} >Global Crypto Stats </Title>
      <Row>
        <Col span={12}><Statistic title="total" value={globalStats.total} suffix="/ 100" /></Col>
        <Col span={12}><Statistic title="total24hVolume" value={globalStats.total24hVolume} suffix="/ 100" /></Col>
        <Col span={12}><Statistic title="totalCoins" value={globalStats.totalCoins} suffix="/ 100" /></Col>
        <Col span={12}><Statistic title="totalExchanges" value={globalStats.totalExchanges} suffix="/ 100" /></Col>
        <Col span={12}><Statistic title="totalMarketCap" value={globalStats.totalMarketCap} suffix="/ 100" /></Col>
        <Col span={12}><Statistic title="totalMarkets" value={globalStats.totalMarkets} suffix="/ 100" /></Col>

      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 cryptocurrencies In The World</Title>
        <Title level={2} className="show-more"><NavLink to="/cryptocurrencies">Show more</NavLink></Title>
      </div>
      <CryptoCurrencies simplified={true} />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest cryptocurrencies news</Title>
        <Title level={2} className="show-more"><NavLink to="/news">Show more</NavLink></Title>
      </div>
      <News />


    </>


  )
}



