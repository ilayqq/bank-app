import { Card, Typography } from "antd";
import Chip_Card from "../assets/img/Chip_Card.png";

const { Title } = Typography;

const CardItem: React.FC = () => {
    return (
        <Card
            style={{
                flex: 1,
                borderRadius: "25px",
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                background: 'linear-gradient(135deg, #4c49ed 0%, #0a06f4 100%)',
                color: '#fff',
                padding: '20px',
                width: "350px",
                height: "235px",
            }}
        >
            <Title level={4} style={{ color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                Balance: $5.756
                <img src={Chip_Card} alt="Chip Card" />
            </Title>
        </Card>
    )
}

export default CardItem;