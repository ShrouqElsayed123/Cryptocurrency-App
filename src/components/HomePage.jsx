import { Col, Row, Statistic, Typography } from "antd";

export default function HomePage() {
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
