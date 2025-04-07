import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    FormControlLabel,
    Switch,
    Select,
    MenuItem,
    Button,
    Alert,
    Stack,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Settings() {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [language, setLanguage] = useState("ru");
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    useEffect(() => {
        // Загружаем настройки из localStorage
        const savedSettings = JSON.parse(localStorage.getItem("settings") || "{}");
        if (savedSettings) {
            setDarkMode(savedSettings.darkMode || false);
            setNotifications(savedSettings.notifications || true);
            setLanguage(savedSettings.language || "ru");
        }
    }, []);

    const handleSaveSettings = () => {
        const settings = { darkMode, notifications, language };
        localStorage.setItem("settings", JSON.stringify(settings));
        setSuccessMessage("Настройки успешно сохранены!");
        setTimeout(() => setSuccessMessage(null), 3000);
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5} sx={{ textAlign: "center" }}>
                <Typography variant="h3" fontWeight="bold">
                    ⚙️ Настройки
                </Typography>
            </Box>

            <Card sx={{ mt: 4, p: 3, boxShadow: 3 }}>
                <CardContent>
                    {successMessage && <Alert severity="success" sx={{ mb: 2 }}>{successMessage}</Alert>}

                    {/* Темная тема */}
                    <Stack direction="row" spacing={2} alignItems="center">
                        <DarkModeIcon color="primary" />
                        <Typography variant="h6">Тёмная тема</Typography>
                        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                    </Stack>

                    {/* Уведомления */}
                    <Stack direction="row" spacing={2} alignItems="center" mt={3}>
                        <NotificationsIcon color="secondary" />
                        <Typography variant="h6">Уведомления</Typography>
                        <Switch checked={notifications} onChange={() => setNotifications(!notifications)} />
                    </Stack>

                    {/* Язык интерфейса */}
                    <Stack direction="row" spacing={2} alignItems="center" mt={3}>
                        <LanguageIcon color="action" />
                        <Typography variant="h6">Язык</Typography>
                        <Select value={language} onChange={(e) => setLanguage(e.target.value as string)}>
                            <MenuItem value="ru">Русский</MenuItem>
                            <MenuItem value="en">English</MenuItem>
                            <MenuItem value="es">Español</MenuItem>
                        </Select>
                    </Stack>

                    {/* Кнопки */}
                    <Stack spacing={2} mt={4}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSaveSettings}
                        >
                            Сохранить настройки
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            startIcon={<ArrowBackIcon />}
                            onClick={() => navigate("/dashboard")}
                        >
                            Назад
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    );
}