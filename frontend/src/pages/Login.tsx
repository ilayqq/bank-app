import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { fetchUser, createUser } from "../api";
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Card,
    CardContent,
    Avatar,
    CircularProgress,
    Alert,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Login() {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        navigate("/dashboard");
    };

    // const handleLogin = async () => {
    //     if (!name.trim()) {
    //         setError("Введите ваше имя.");
    //         return;
    //     }

    //     setLoading(true);
    //     setError(null);

    //     try {
    //         let user = await fetchUser(name);
    //         if (!user) {
    //             user = await createUser(name);
    //         }

    //         localStorage.setItem("user", JSON.stringify(user));
    //         navigate("/dashboard");
    //     } catch (error) {
    //         setError("Ошибка входа. Попробуйте снова.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 10,
                }}
            >
                <Card sx={{ p: 4, width: "100%", boxShadow: 3 }}>
                    <CardContent>
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Avatar sx={{ bgcolor: "primary.main", mb: 2 }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography variant="h5" gutterBottom>
                                Вход в банк
                            </Typography>
                        </Box>

                        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

                        <TextField
                            label="Введите имя"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2, py: 1.5, fontSize: 16 }}
                            onClick={handleLogin}
                            disabled={loading}
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : "Войти"}
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}
