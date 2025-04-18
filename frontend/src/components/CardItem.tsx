import '../styles/CardItem.css';
import { CardData } from '../types/Card';

const CardItem = ({ card }: { card: CardData }) => {
    return (
        <div className="bank-card">
            <div className="bank-name">O <span>Bank</span></div>
            <div className="card-number">{card.cardNumber}</div>
            <div className="card-footer">
                <span className="card-holder">{card.holderName}</span>
                <span className="card-expiry">{card.account.balance.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default CardItem;
