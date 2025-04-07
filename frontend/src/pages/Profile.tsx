import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Avatar,
    TextField,
    Button,
    Alert,
    Stack,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Profile() {
    const user = {
        name: "Иван",
    };
    // const [user, setUser] = useState<any>(null);
    const [name, setName] = useState("");
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    //   useEffect(() => {
    //     const storedUser = localStorage.getItem("user");
    //     if (!storedUser) {
    //       navigate("/");
    //       return;
    //     }
    //     const userData = JSON.parse(storedUser);
    //     setUser(userData);
    //     setName(userData.name);
    //   }, [navigate]);

    const handleSave = () => {
        if (name.trim() === "") {
            return;
        }

        const updatedUser = { ...user, name };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        // setUser(updatedUser);
        setSuccessMessage("Имя успешно обновлено!");
        setTimeout(() => setSuccessMessage(null), 3000);
    };

    const handleLogout = () => {
        navigate("/");
    };
    //   const handleLogout = () => {
    //     localStorage.removeItem("user");
    //     navigate("/");
    //   };

    //   if (!user) return <Typography>Загрузка...</Typography>;

    return (
        <Container maxWidth="sm">
            <Box mt={5} sx={{ textAlign: "center" }}>
                <Typography variant="h3" fontWeight="bold">
                    🧑‍💼 Профиль
                </Typography>
            </Box>

            <Card sx={{ mt: 4, p: 3, boxShadow: 3 }}>
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Avatar sx={{ bgcolor: "primary.main", width: 80, height: 80, mb: 2 }}>
                        <AccountCircleIcon sx={{ fontSize: 50 }} />
                    </Avatar>
                    <Typography variant="h5">{user.name}</Typography>
                </CardContent>
            </Card>

            <Box mt={4}>
                {successMessage && <Alert severity="success" sx={{ mb: 2 }}>{successMessage}</Alert>}

                <TextField
                    label="Изменить имя"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Stack direction="column" spacing={2} sx={{ mt: 3 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<EditIcon />}
                        onClick={handleSave}
                        sx={{ py: 1.5, fontSize: 16 }}
                    >
                        Сохранить изменения
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<LogoutIcon />}
                        onClick={handleLogout}
                        sx={{ py: 1.5, fontSize: 16 }}
                    >
                        Выйти из системы
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
}