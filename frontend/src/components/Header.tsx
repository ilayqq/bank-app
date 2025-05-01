import { Avatar, Dropdown, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import { useLocation, useNavigate } from "react-router-dom";
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';


const HeaderItem: React.FC = () => {
    const location = useLocation();
    const path = location.pathname.split("/").pop();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        localStorage.removeItem("token");
        navigate("/")
    };

    const items: MenuProps['items'] = [
        {
            key: "1",
            label: "My Account",
            disabled: true,
        },
        {
            type: "divider"
        },
        {
            key: "2",
            label: "Settings",
            icon: <SettingOutlined />,
            extra: "Ctrl+P",
        },
        {
            key: "3",
            label: "Logout",
            icon: <LogoutOutlined />,
            danger: true,
            onClick: handleButtonClick
        }
    ]

    return (
        <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: '#fff', padding: 40, paddingRight: 24 }}>
            <h2 style={{ color: "#343C6A", fontSize: 28 }}>{path ? path.charAt(0).toUpperCase() + path.slice(1) : "Dashboard"}</h2>
            <Dropdown menu={{ items }} trigger={["click"]}>
                <Avatar src="https://i.pravatar.cc/40" size={60} />
            </Dropdown>
        </Header>
    )
}

export default HeaderItem;