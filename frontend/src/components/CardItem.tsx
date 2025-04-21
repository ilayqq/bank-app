import { Button } from 'antd';
import '../styles/CardItem.css';
import { CardData } from '../types/Card';
import { CustomerData } from '../types/Customer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CardItemProps {
    card: CardData;
    customer: CustomerData;
}

const CardItem = ({ card, customer }: CardItemProps) => {
    const [flipped, setFlipped] = useState(false);
    const navigate = useNavigate();

    const handleAction = (action: string) => {
        navigate(`/${action}`, {
            state: {
                card: card.cardNumber
            }
        })
    };

    return (
        <div className="card-container" onClick={() => setFlipped(!flipped)}>
            <div className={`card-inner ${flipped ? "flipped" : ""}`}>
                {/* Передняя сторона */}
                <div className="card-face card-front">
                    <div className="bank-name">O <span>Bank</span></div>
                    <div className="card-number">{card.cardNumber}</div>
                    <div className="card-footer">
                        <span className="card-holder">{customer.firstName + " " + customer.lastName}</span>
                        <span className="card-expiry">{card.expiryDate}</span>
                    </div>
                </div>
                {/* Задняя сторона */}
                <div className="card-face card-back">
                    <Button onClick={() => handleAction("replenish")}>Replenish</Button>
                    <Button onClick={() => handleAction("transfer")}>Transfer</Button>
                    <Button onClick={() => handleAction("block")}>Block</Button>
                    <Button onClick={() => handleAction("delete")}>Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
