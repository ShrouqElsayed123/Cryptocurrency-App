import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import logo from '../assets/images/cryptocurrency.png';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const menuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: <NavLink to="/">Home</NavLink>,
    },
    {
      key: "2",
      icon: <FundOutlined />,
      label: <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>,
    },
    {
      key: "3",
      icon: <MoneyCollectOutlined />,
      label: <NavLink to="/exchanges">Exchanges</NavLink>,
    },
    {
      key: "4",
      icon: <BulbOutlined />,
      label: <NavLink to="/news">News</NavLink>,
    },
  ];

  return (

    <Sider
      width={220}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div style={{
        height: 64,
        background: "#001529",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        gap: 10,
      }}>
        <img src={logo} width={30} height={30} alt="logo" />
        <h2 style={{ margin: 0, fontSize: 18 }}>Ant Design</h2>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={menuItems}
      />
    </Sider>



  );
}
