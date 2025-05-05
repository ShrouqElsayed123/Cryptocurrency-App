import { Col, Row, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
export default function HomePage() {
  const {
    data,
    error,
    isLoading,
    isFetching,
    isSuccess,
    isError,

  } = useGetCryptosQuery()
  if (isSuccess) {
    console.log(data?.data?.coins);
  }





  return (
    <>
      <Typography.Title level={2} >Global Crypto Stats </Typography.Title>
      <Row>
        <Col span={12}><Statistic title="Unmerged" value={93} suffix="/ 100" /></Col>
        <Col span={12}><Statistic title="Unmerged" value={93} suffix="/ 100" /></Col>
        <Col span={12}><Statistic title="Unmerged" value={93} suffix="/ 100" /></Col>
        <Col span={12}><Statistic title="Unmerged" value={93} suffix="/ 100" /></Col>
        <Col span={12}><Statistic title="Unmerged" value={93} suffix="/ 100" /></Col>
        <Col span={12}><Statistic title="Unmerged" value={93} suffix="/ 100" /></Col>

      </Row>


    </>


  )
}
