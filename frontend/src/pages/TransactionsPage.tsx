import { Layout, message, Table, Tabs } from "antd";
import { useEffect, useState } from "react";
import { Transaction } from "../types/transactions";
import TabPane from "antd/es/tabs/TabPane";
import Sidebar from "../components/Sidebar";
import HeaderItem from "../components/Header";
import { Content } from "antd/es/layout/layout";
import { getTransactions } from "../api/transactions";

const columns = [
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Transaction ID',
        dataIndex: 'transactionId',
        key: 'transactionId',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Card',
        dataIndex: 'card',
        key: 'card',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        render: (text: string | number) => {
            const amount = typeof text === 'string' ? parseFloat(text) : text;
            return <span style={{ color: amount < 0 ? 'red' : 'green' }}>{amount < 0 ? `-$${Math.abs(amount)}` : `+$${amount}`}</span>;
        },
    },
];

export const TransactionsPage = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchTransactions = async () => {
            setLoading(true);
            try {
                const data = await getTransactions(); // Получаем данные с сервера
                // Преобразуем данные в формат, который подходит для таблицы
                const transformedData = data.map((item, index) => ({
                    key: index.toString(),
                    description: item.description,
                    transactionId: item.transactionId,
                    type: item.type,
                    card: item.card,
                    date: item.date,
                    amount: item.amount,
                }));
                setTransactions(transformedData);
            } catch (error) {
                message.error('Error fetching transactions');
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions(); // Загружаем транзакции при монтировании компонента
    }, []);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar />
            <Layout>
                <HeaderItem />
                <Content>
                    <div>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="All Transactions" key="1">
                                <Table
                                    columns={columns}
                                    dataSource={transactions}
                                    loading={loading}
                                    pagination={false}
                                />
                            </TabPane>
                            <TabPane tab="Income" key="2">
                                <Table
                                    columns={columns}
                                    dataSource={transactions.filter(item => !item.amount.includes('-'))}
                                    loading={loading}
                                    pagination={false}
                                />
                            </TabPane>
                            <TabPane tab="Expense" key="3">
                                <Table
                                    columns={columns}
                                    dataSource={transactions.filter(item => item.amount.includes('-'))}
                                    loading={loading}
                                    pagination={false}
                                />
                            </TabPane>
                        </Tabs>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};