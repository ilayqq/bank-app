import { Drawer, Menu, Grid } from 'antd';
import {
  HomeOutlined,
  CreditCardOutlined,
  UserOutlined,
  SettingOutlined,
  SwapOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Sidebar.css';

const { useBreakpoint } = Grid;

const Sidebar = () => {
  const navigate = useNavigate();
  const screens = useBreakpoint();
  const [visible, setVisible] = useState(false);

  const menuItems = [
    { key: '/dashboard', icon: <HomeOutlined />, label: 'Dashboard' },
    { key: '/accounts', icon: <UserOutlined />, label: 'Accounts' },
    { key: '/cards', icon: <CreditCardOutlined />, label: 'Cards' },
    { key: '/transactions', icon: <SwapOutlined />, label: 'Transactions' },
    { key: '/settings', icon: <SettingOutlined />, label: 'Settings' },
  ];

  const onClick = (e: any) => {
    navigate(e.key);
    setVisible(false);
  };

  if (!screens.md) {
    // Mobile version — show burger icon
    return (
      <div className="mobile-menu-icon">
        <MenuOutlined onClick={() => setVisible(true)} />
        <Drawer
          title="Menu"
          placement="left"
          onClose={() => setVisible(false)}
          open={visible}
        >
          <Menu mode="vertical" onClick={onClick} items={menuItems} />
        </Drawer>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="sidebar">
      <Menu
        theme="dark"
        mode="vertical"
        defaultSelectedKeys={['/dashboard']}
        className="sidebar-menu"
        onClick={onClick}
        items={menuItems}
      />
    </div>
  );
};

export default Sidebar;
