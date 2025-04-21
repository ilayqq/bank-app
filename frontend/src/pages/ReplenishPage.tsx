import { Button, Form, Input, InputNumber } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"

export const ReplenishPage = () => {
    const { state } = useLocation();
    const [form] = Form.useForm();

    useEffect(() => {
        if (state.card) {
            form.setFieldsValue({
                cardNumber: state.card,
            });
        }
    }, [state, form]);

    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <div style={{ padding: 40 }}>
            <h2>Replenish Card</h2>
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
    )
}