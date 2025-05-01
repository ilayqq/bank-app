import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import CardItem from "../components/CardItem";
import TransactionsItem from "../components/TransactionItem";
import { useEffect, useState } from "react";
import WeeklyActivity from "../components/WeeklyActivity";
import Sidebar from "../components/Sidebar";
import HeaderItem from "../components/Header";

interface BalanceCard {
    balance: number;
    cardHolder: string;
    cardNumber: string;
    validThru: string;
}

interface ClientData {
    firstName: string;
    lastName: string;
}

const balanceCards: BalanceCard[] = [
    { balance: 5756, cardHolder: 'Eddy Cusuma', cardNumber: '3778 **** 1234', validThru: '12/22' },
    { balance: 5756, cardHolder: 'Eddy Cusuma', cardNumber: '3778 **** 1234', validThru: '12/22' },
    { balance: 5756, cardHolder: 'Eddy Cusuma', cardNumber: '3778 **** 1234', validThru: '12/22' },
];

const DashboardPage: React.FC = () => {
    const [clientData, setClientData] = useState<ClientData>({ firstName: '', lastName: '' });

    useEffect(() => {

    }, [])

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar />
            <Layout>
                <HeaderItem />
                <Content style={{ display: "flex", padding: "30px", gap: "30px", flexWrap: "wrap" }}>
                    {/* КАРТОЧКА */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#343C6A", fontSize: 22 }}>
                            <h2>My Cards</h2>
                            <h2><a href="#" style={{ fontSize: 22, color: "#343C6A", textDecoration: "none" }}>See All</a></h2>
                        </div>
                        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
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
                    <div>
                        <div style={{ color: "#343C6A", fontSize: 22 }}>
                            <h2>Weekly Activity</h2>
                        </div>
                        <div>
                            {/* <WeeklyActivity /> */}
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardPage;
