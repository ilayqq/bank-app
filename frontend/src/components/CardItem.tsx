import { Card, Typography } from "antd";
import Chip_Card from "../assets/img/Chip_Card.png";

const { Title, Text } = Typography;

const CardItem: React.FC = () => {
    return (
        <Card
            style={{
                borderRadius: "25px",
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                background: 'linear-gradient(135deg, #4c49ed 0%, #0a06f4 100%)',
                color: '#fff',
                width: "350px",
                height: "235px",
                padding: "24px",
            }}
            bodyStyle={{ padding: 0 }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div>
                    <Text style={{ color: "white", fontSize: 12, opacity: 0.85 }}>
                        Balance
                    </Text>
                    <Title
                        level={2}
                        style={{
                            margin: 0,
                            color: "white",
                            fontWeight: 600,
                            fontSize: 20,
                        }}
                    >
                        $5,756
                    </Title>
                </div>
                <div>
                    <img src={Chip_Card} alt="Chip Card" />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
                <div>
                    <Text style={{ color: "white", fontSize: 12, opacity: 0.85 }}>
                        CARD HOLDER
                    </Text>
                    <Title
                        level={2}
                        style={{
                            margin: 0,
                            color: "white",
                            fontWeight: 600,
                            fontSize: 15,
                        }}
                    >
                        Eddy Cusuma
                    </Title>
                </div>
                <div style={{ marginRight: 70 }}>
                    <Text style={{ color: "white", fontSize: 12, opacity: 0.85 }}>
                        VALID THRU
                    </Text>
                    <Title
                        level={2}
                        style={{
                            margin: 0,
                            color: "white",
                            fontWeight: 600,
                            fontSize: 15,
                        }}
                    >
                        12/22
                    </Title>
                </div>
            </div>
            <div>
                <div>
                    <Text style={{ color: "white", fontSize: 22 }}>
                        3778 **** **** 1234
                    </Text>
                </div>
            </div>
        </Card>
    )
}

export default CardItem;