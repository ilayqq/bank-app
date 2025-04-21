import { Button, Card, Form, Input, InputNumber, message, Tabs } from "antd";
import { topUp, transfer } from "../api/transactions";

export const TransactionsPage = () => {
    const [topUpForm] = Form.useForm();
    const [transferForm] = Form.useForm();

    const onTopUp = async (values: any) => {
        await topUp({ cardId: 1, amount: values.amount });
        message.success("Karta popolnena");
        topUpForm.resetFields();
    }

    const onTransfer = async (values: any) => {
        await transfer({
            fromCardId: 1,
            toCardNumber: values.toCardNumber,
            amount: values.amount,
        });
        message.success("Perevod vypolnen");
        transferForm.resetFields();
    }

    return (
        <div>
            <h2>Transactions</h2>
            <Card>
                <Tabs defaultActiveKey="topup" items={[
                    {
                        key: "topup",
                        label: "Top up",
                        children: (
                            <Form form={topUpForm} layout="vertical" onFinish={onTopUp}>
                                <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
                                    <InputNumber min={1} style={{ width: "100%" }} />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">Top Up</Button>
                                </Form.Item>
                            </Form>
                        ),
                    },
                    {
                        key: "transfer",
                        label: "Transfer",
                        children: (
                            <Form form={transferForm} layout="vertical" onFinish={onTransfer}>
                                <Form.Item name="toCardNumber" label="To Card Number" rules={[{ required: true }]}>
                                    <Input placeholder="XXXX XXXX XXXX XXXX" />
                                </Form.Item>
                                <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
                                    <InputNumber min={1} style={{ width: "100%" }} />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">Transfer</Button>
                                </Form.Item>
                            </Form>
                        ),
                    },
                ]} />
            </Card>
        </div>
    );
};