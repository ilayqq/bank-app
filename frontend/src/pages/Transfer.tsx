import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { transferMoney } from "../api";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Alert,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Transfer() {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

//   const handleTransfer = async () => {
//     const storedUser = localStorage.getItem("user");
//     if (!storedUser) {
//       navigate("/");
//       return;
//     }

//     const user = JSON.parse(storedUser);

//     if (amount <= 0 || to.trim() === "") {
//       setError("Введите корректную сумму и получателя.");
//       return;
//     }

//     setLoading(true);
//     setError(null);
//     setSuccess(null);

//     try {
//       await transferMoney(user.name, to, amount);
//       setSuccess(`Перевод ${amount}$ на счет ${to} выполнен успешно!`);
//       setTimeout(() => navigate("/dashboard"), 2000); // Перенаправление через 2 сек
//     } catch (error) {
//       setError("Ошибка перевода. Проверьте данные и повторите попытку.");
//     } finally {
//       setLoading(false);
//     }
//   };

  return (
    <Container maxWidth="sm">
      <Box mt={5} sx={{ textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold">
          💸 Перевод средств
        </Typography>
      </Box>

      {/* Карточка пользователя */}
      <Card sx={{ mt: 4, p: 3, boxShadow: 3 }}>
        <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AccountCircleIcon sx={{ fontSize: 50, color: "blue", mr: 2 }} />
            <Typography variant="h6">Отправитель:</Typography>
          </Box>
          <Typography variant="h5">{JSON.parse(localStorage.getItem("user") || "{}").name}</Typography>
        </CardContent>
      </Card>

      {/* Поля ввода */}
      <Box mt={4}>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

        <TextField
          label="Кому (Имя получателя)"
          fullWidth
          margin="normal"
          variant="outlined"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <TextField
          label="Сумма перевода ($)"
          type="number"
          fullWidth
          margin="normal"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </Box>

      {/* Кнопка перевода */}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        startIcon={<SendIcon />}
        sx={{ mt: 3, py: 2, fontSize: 18 }}
        // onClick={handleTransfer}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Отправить"}
      </Button>

      {/* Кнопка "Назад" */}
      <Button
        fullWidth
        variant="outlined"
        color="secondary"
        sx={{ mt: 2, py: 1.5 }}
        onClick={() => navigate("/dashboard")}
      >
        Назад
      </Button>
    </Container>
  );
}
