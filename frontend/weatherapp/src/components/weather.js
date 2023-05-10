import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ApprovalIcon from "@mui/icons-material/Approval";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const theme = createTheme();

function NewPreferences() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = JSON.stringify({
            city: credentials.city,
            country: credentials.country,
        });

        try {
            const response = await fetch("http://localhost:8019/api/auth/report",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: data
                });

            const json = await response.json();

            if (json) {
                if (json) {
                    alert(`The weather is ${json.weather[0].main}`)
                    document.write(`Weather in ${json.name}, ${json.sys.country}: ${json.weather[0].main}`);
                 }
            }


        } catch (error) {
            alert(error);
        }
    };

    const [credentials, setCredentials] = useState({
        city: "",
        country: "",
    });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        console.log(credentials, e.target.name);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h4">
                        Check the weather
                    </Typography>
                    <Avatar sx={{ m: 1 }}>
                        <ApprovalIcon />
                    </Avatar>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField

                                    name="city"
                                    required
                                    fullWidth
                                    id="city"
                                    label="Your City"
                                    autoFocus
                                    value={credentials.city}
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="country"
                                    label="Your country"
                                    name="country"
                                    value={credentials.country}
                                    onChange={onChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default NewPreferences;