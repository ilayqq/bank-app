import { Button, Form, Input, InputNumber, Layout } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import Sidebar from "../components/Sidebar";
import HeaderItem from "../components/Header";
import { Content } from "antd/es/layout/layout";

export const ReplenishPage = () => {
    const { state } = useLocation();
    const [form] = Form.useForm();

    useEffect(() => {
        try {
            if (state.card) {
                form.setFieldsValue({
                    cardNumber: state.card,
                });
            }
        } catch {

        }
    }, [state, form]);

    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar />
            <Layout>
                <HeaderItem />
                <Content style={{ display: "flex", padding: "30px", gap: "30px", flexWrap: "wrap" }}>
                    <div style={{ padding: 40 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#343C6A", fontSize: 22 }}>
                            <h2>Replenish Card</h2>
                        </div>
                        <Form form={form} layout="vertical" onFinish={onFinish}>
                            <Form.Item name="cardNumber" label="Card Number">
                                <Input disabled />
                            </Form.Item>
                            <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
                                <InputNumber min={1} style={{ width: "100%" }} />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Confirm Top Up
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}