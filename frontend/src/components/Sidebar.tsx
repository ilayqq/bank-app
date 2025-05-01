import { Menu, MenuProps } from 'antd';
import { CreditCardOutlined, HomeFilled, SwapOutlined, TransactionOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';
import Logo from "../assets/img/logo.png";
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [defaultOpenKey, setDefaultOpenKey] = useState<string[]>([]);

  type MenuItem = Required<MenuProps>['items'][number];

  const items: MenuItem[] = [
    { key: '/dashboard', icon: <HomeFilled />, label: 'Dashboard' },
    { key: "/cards", icon: <CreditCardOutlined />, label: "Cards" },
    { key: "/transactions", icon: <TransactionOutlined />, label: "Transactions" },
    {
      key: "/transfers",
      label: "Transfers",
      icon: <SwapOutlined />,
      children: [
        { key: "/transfers/phoneNumber", label: "With Phone Number" },
        { key: "/transfers/replenish", label: "Replenish" },
        { key: "/transfers/transfer", label: "Transfer" }
      ],
    },
  ]

  useEffect(() => {
    if (location.pathname.startsWith("/transfers")) {
      setDefaultOpenKey(["/transfers"]);
    } else {
      setDefaultOpenKey([""]);
    }
  }, [location.pathname]);

  const onClick = (e: any) => {
    navigate(e.key);
  };

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="logo" style={{ margin: '16px', color: 'white', fontWeight: 'bold', fontSize: 25, display: "flex", alignItems: "center", gap: 10 }}>
        <img src={Logo} alt="logo" />
        BankDash.
      </div>
      <Menu
        theme="dark"
        mode="inline"
        openKeys={defaultOpenKey}
        selectedKeys={[location.pathname]}
        onClick={onClick}
        items={items}
        onOpenChange={(keys) => setDefaultOpenKey(keys)}
      />
    </Sider>
  );
};

export default Sidebar;
