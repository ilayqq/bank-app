import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/DashboardPage';
import { TransactionsPage } from './pages/TransactionsPage';
import { CardsPage } from './pages/CardsPage';
import { ReplenishPage } from './pages/ReplenishPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/transactions' element={<TransactionsPage />} />
        <Route path='/cards' element={<CardsPage />} />
        <Route path='/replenish' element={<ReplenishPage />} />
      </Routes>
    </Router>
  );
}