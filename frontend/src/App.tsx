import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/DashboardPage';
import { TransactionsPage } from './pages/TransactionsPage';
import { ReplenishPage } from './pages/ReplenishPage';
import TransferWithPhonePage from './pages/TransferWithPhonePage';
import CardsPage from './pages/CardsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/cards' element={<CardsPage />} />
        <Route path='/transactions' element={<TransactionsPage />} />
        <Route path='/transfers/replenish' element={<ReplenishPage />} />
        <Route path='/transfers/phoneNumber' element={<TransferWithPhonePage />} />
      </Routes>
    </Router>
  );
}