import Navbar from '../Navbar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import { Content } from 'antd/es/layout/layout'
import { Layout } from 'antd'

export default function Layout1() {
  return (
    <>

      <div className="app">

      <Layout style={{ minHeight: "100vh" }}>
        <div className="navbar">
          
          <Navbar />
        </div>


        <div className="main">
        <Layout style={{ marginLeft: 220 }}>
        <Content style={{ padding: "24px" }}>
         
          <Outlet></Outlet>
        </Content>
      </Layout>
          

        </div>
</Layout>
        
        <div className="footer">
          <Footer />

        </div>
      </div>

    </>
  )
}
