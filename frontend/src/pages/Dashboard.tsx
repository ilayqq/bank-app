import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    Button,
    Box,
    Card,
    CardContent,
    Paper,
    Stack,
    IconButton,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SendIcon from "@mui/icons-material/Send";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Регистрация компонентов Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
    const user = {
        name: "Иван",
        balance: 1500,
    };
    // const [user, setUser] = useState<any>(null);
    const navigate = useNavigate();

    //   useEffect(() => {
    //     const storedUser = localStorage.getItem("user");
    //     if (!storedUser) {
    //       navigate("/");
    //       return;
    //     }
    //     setUser(JSON.parse(storedUser));
    //   }, [navigate]);

    //   if (!user) return <Typography>Загрузка...</Typography>;

    // Mock-данные для графика
    const data = {
        labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        datasets: [
            {
                label: "Баланс ($)",
                data: [1000, 1200, 900, 1100, 1300, 1250, user.balance], // Последнее значение — текущий баланс
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
        ],
    };

    return (
        <Container maxWidth="md">
            <Box mt={5} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h3" fontWeight="bold">
                    Добро пожаловать, {user.name}! 👋
                </Typography>

                {/* Кнопка перехода в профиль */}
                <IconButton color="primary" onClick={() => navigate("/profile")}>
                    <AccountCircleIcon sx={{ fontSize: 40 }} />
                </IconButton>
            </Box>

            {/* Баланс пользователя */}
            <Card sx={{ mt: 4, p: 3, boxShadow: 3 }}>
                <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <AccountBalanceIcon sx={{ fontSize: 50, color: "green", mr: 2 }} />
                        <Typography variant="h5">Ваш баланс:</Typography>
                    </Box>
                    <Typography variant="h3" color="primary">
                        ${user.balance}
                    </Typography>
                </CardContent>
            </Card>

            {/* График активности */}
            <Paper sx={{ mt: 2, p: 3, boxShadow: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Динамика баланса за неделю 📊
                </Typography>
                <Line data={data} />
            </Paper>

            {/* Кнопки навигации */}
            <Stack spacing={2} sx={{ mt: 4 }}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    startIcon={<SendIcon />}
                    sx={{ py: 2, fontSize: 18 }}
                    onClick={() => navigate("/transfer")}
                >
                    Сделать перевод
                </Button>
                <Button
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    startIcon={<HistoryIcon />}
                    sx={{ py: 2, fontSize: 18 }}
                    onClick={() => navigate("/transactions")}
                >
                    История транзакций
                </Button>
                <Button
                    fullWidth
                    variant="outlined"
                    color="info"
                    startIcon={<SettingsIcon />}
                    sx={{ py: 2, fontSize: 18 }}
                    onClick={() => navigate("/settings")}
                >
                    Настройки
                </Button>
            </Stack>
        </Container>
    );
}