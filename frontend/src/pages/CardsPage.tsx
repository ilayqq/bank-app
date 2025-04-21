import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar"
import { CardData } from "../types/Card";
import { CustomerData } from "../types/Customer";
import { getCards } from "../api/cards";
import { parseJwt } from "../api/auth";
import { getCustomer } from "../api/customer";
import CardItem from "../components/CardItem";

export const CardsPage = () => {
    const [cards, setCards] = useState<CardData[]>([]);
    const [customer, setCustomer] = useState<CustomerData | null>(null);

    useEffect(() => {
        getCards().then(setCards);

        const token = localStorage.getItem("token");
        if (token) {
            const payload = parseJwt(token);
            const phoneNumber = payload?.phoneNumber;
            getCustomer(phoneNumber).then((data) => {
                setCustomer(data[0]);
            });
        }
    }
        , []);

    return (
        <div className="dashboard-wrapper">
            <Sidebar />
            <div className="dashboard-content">
                <div className="dashboard-header">
                    <h2>Cards</h2>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                    {customer && cards.map((card) => (
                        <CardItem key={card.id} card={card} customer={customer} />
                    ))}
                </div>
            </div>
        </div>
    )
}