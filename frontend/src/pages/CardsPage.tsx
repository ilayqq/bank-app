import { Layout } from "antd";
import Sidebar from "../components/Sidebar";
import HeaderItem from "../components/Header";
import { Content } from "antd/es/layout/layout";

const CardsPage: React.FC = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sidebar />
            <Layout>
                <HeaderItem />
                <Content style={{ alignSelf: "center" }}>
                </Content>
            </Layout>
        </Layout>
    )
}
export default CardsPage;