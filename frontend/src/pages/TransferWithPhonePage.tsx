import Layout, { Content } from "antd/es/layout/layout";
import Sidebar from "../components/Sidebar";
import HeaderItem from "../components/Header";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { Option } from "antd/es/mentions";
import Chip_Card from "../assets/img/Chip_Card.png"

const selectAfter = (
    <Select defaultValue="KZT" style={{ width: 60 }}>
        <Option value="KZT">₸</Option>
        <Option value="USD">$</Option>
        <Option value="EUR">€</Option>
    </Select>
)

const TransferWithPhonePage: React.FC = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sidebar />
            <Layout>
                <HeaderItem />
                <Content style={{ padding: "30px", alignSelf: "center" }}>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#343C6A", fontSize: 22 }}>
                            <h2>Transfer with Phone Number</h2>
                        </div>
                        <div>
                            <Form layout="vertical" style={{ background: "white", padding: 20, borderRadius: 20 }}>
                                <Form.Item name="cardNumber">
                                    <Select style={{ height: 40 }} defaultValue="test">
                                        <Option value="test">
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <img src={Chip_Card} alt="chip" style={{ width: 30, height: 30, marginRight: 8 }} />
                                                Test Option
                                            </div>
                                        </Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item name="phoneNumber" label="Phone Number" rules={[{ required: true }]}>
                                    <Input addonBefore="+7" />
                                </Form.Item>
                                <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
                                    <InputNumber addonAfter={selectAfter} defaultValue={0} min={50} />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block>
                                        Transfer
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default TransferWithPhonePage;