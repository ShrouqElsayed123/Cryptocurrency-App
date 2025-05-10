import { NavLink } from "react-router-dom";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi"
import { Card, Col, Row } from 'antd';
import dayjs from "dayjs";

export default function News() {
  // const count = simplified ? 10 : 100;

  let { data, isLoading } = useGetCryptoNewsQuery();
  if (isLoading) return <h1>Loading.......... ⏳</h1>


  console.log(data);

  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">

        {data?.map((d) => (
          <Col xs={24} sm={12} md={8} lg={6} key={d.topicId} className="crypto-card">
            <NavLink to=''>
              <Card title={`${d.author} `} extra={<img src={d.pubLogo} className="crypto-image" />} hoverable>
                <p style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>{d.title}</p>
                <p style={{ paddingTop: "20px", color: "gray" }}>{dayjs.unix(d.date).format("DD MMM YYYY - HH:mm")}</p>
              </Card>

            </NavLink>



          </Col>
        ))}

      </Row >

    </>
  )
}
