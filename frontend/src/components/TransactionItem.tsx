import { Avatar, Card, List, Typography } from "antd"
import {
    CreditCardOutlined,
    // PayPalOutlined,
    DollarCircleOutlined
} from '@ant-design/icons';
import { JSX } from "react";

const { Text } = Typography;

interface Transaction {
    title: string;
    date: string;
    amount: number;
    icon: JSX.Element;
    iconBg: string;
}

const transactions: Transaction[] = [
    {
        title: 'Deposit from my Card',
        date: '28 January 2021',
        amount: -850,
        icon: <CreditCardOutlined style={{ fontSize: 20, color: '#fa8c16' }} />,
        iconBg: '#fff7e6',
    },
    {
        title: 'Deposit Paypal',
        date: '25 January 2021',
        amount: 2500,
        icon: <CreditCardOutlined style={{ fontSize: 20, color: '#2f54eb' }} />,
        iconBg: '#f0f5ff',
    },
    {
        title: 'Jemi Wilson',
        date: '21 January 2021',
        amount: 5400,
        icon: <DollarCircleOutlined style={{ fontSize: 20, color: '#13c2c2' }} />,
        iconBg: '#e6fffb',
    }
];

const TransactionItem: React.FC = () => {
    return (
        <Card
            style={{
                width: "350px",
                height: "235px",
                borderRadius: "25px",
                // padding: 10
            }}
            bodyStyle={{ padding: 0 }}
        >
            <List
                itemLayout="horizontal"
                dataSource={transactions}
                split={false}
                renderItem={(item, index) => (
                    <List.Item
                        style={{
                            padding: '12px 20px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <List.Item.Meta
                            avatar={
                                <Avatar
                                    style={{
                                        backgroundColor: item.iconBg,
                                        width: 44,
                                        height: 44,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    icon={item.icon}
                                />
                            }
                            title={
                                <Text style={{ fontWeight: 500, fontSize: 16 }}>
                                    {item.title}
                                </Text>
                            }
                            description={
                                <Text type="secondary" style={{ fontSize: 14 }}>
                                    {item.date}
                                </Text>
                            }
                        />
                        <Text
                            style={{
                                color: item.amount < 0 ? '#ff4d4f' : '#52c41a',
                                fontWeight: 600,
                                fontSize: 16,
                            }}
                        >
                            {item.amount < 0
                                ? `-$${Math.abs(item.amount)}`
                                : `+$${item.amount}`}
                        </Text>
                    </List.Item>
                )}
            />
        </Card>
    )
}

export default TransactionItem;