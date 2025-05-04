import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

const { Content } = Layout;

export default function Layout1() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Navbar (Sider) */}
      <Navbar />

      {/* المحتوى الرئيسي */}
      <Layout style={{ marginLeft: 220 }}>
        <Content style={{ padding: 24, background: "#f0f2f5", minHeight: "100vh" }}>
          <Outlet />
        </Content>

        <Footer />
      </Layout>
    </Layout>
  );
}
