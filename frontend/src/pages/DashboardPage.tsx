import Sidebar from "../components/Sidebar";
import CardItem from "../components/CardItem";
import "./../styles/dashboard.css";
import { useEffect, useState } from "react";
import { CardData } from "../types/Card";
import { getCards } from "../api/cards";

const DashboardPage = () => {
    const [cards, setCards] = useState<CardData[]>([]);

    useEffect(() => {
        getCards().then(setCards);
    }
        , []);

    return (
        <div className="dashboard-wrapper">
            <Sidebar />
            <div className="dashboard-content">
                <div className="dashboard-header">
                    <h2>Cards</h2>
                    <button className="add-card-button">+ Add New Card</button>
                </div>
                {cards.map((card) => (
                    <CardItem key={card.id} card={card} />
                ))}
            </div>
        </div>
    );
};

export default DashboardPage;