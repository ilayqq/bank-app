import { Avatar, Card, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { PieChartOutlined, DollarOutlined, CreditCardOutlined, BarChartOutlined, SettingOutlined } from '@ant-design/icons';
import { Content, Header } from "antd/es/layout/layout";
import CardItem from "../components/Card";
import TransactionsItem from "../components/TransactionsItem";

interface BalanceCard {
    balance: number;
    cardHolder: string;
    cardNumber: string;
    validThru: string;
}

const balanceCards: BalanceCard[] = [
    { balance: 5756, cardHolder: 'Eddy Cusuma', cardNumber: '3778 **** 1234', validThru: '12/22' },
    { balance: 5756, cardHolder: 'Eddy Cusuma', cardNumber: '3778 **** 1234', validThru: '12/22' },
];

const DashboardPage: React.FC = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider breakpoint="lg" collapsedWidth="0">
                <div className="logo" style={{ margin: '16px', color: 'white', fontWeight: 'bold', fontSize: 24 }}>BankDash</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<PieChartOutlined />}>Dashboard</Menu.Item>
                    <Menu.Item key="2" icon={<DollarOutlined />}>Transactions</Menu.Item>
                    <Menu.Item key="3" icon={<CreditCardOutlined />}>Accounts</Menu.Item>
                    <Menu.Item key="4" icon={<BarChartOutlined />}>Investments</Menu.Item>
                    <Menu.Item key="5" icon={<SettingOutlined />}>Settings</Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: '#fff', padding: 40, paddingRight: 24 }}>
                    <h2 style={{ color: "#343C6A", fontSize: 28 }}>Overview</h2>
                    <Avatar src="https://i.pravatar.cc/40" />
                </Header>
                <Content style={{ display: "flex", padding: "30px", gap: "30px"}}>
                    {/* КАРТОЧКА */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#343C6A", fontSize: 22 }}>
                            <h2>My Cards</h2>
                            <a href="#" style={{ fontSize: 22, color: "#343C6A", textDecoration: "none" }}>See All</a>
                        </div>
                        <div style={{ display: "flex", gap: "30px" }}>
                            {balanceCards.map((card, index) => (
                                <CardItem key={index} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <div style={{ color: "#343C6A", fontSize: 22 }}>
                            <h2>Recent Transaction</h2>
                        </div>
                        <div>
                            <TransactionsItem />
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardPage;
