// src/components/Header.js (versão atualizada)
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useAuth } from '../context/AuthContext'; // Importa nosso hook

function Header() {
  const { isAuthenticated, logout } = useAuth(); // Pega o estado e a função de logout

  return (
    <AppBar position="static" sx={{ backgroundColor: '#282c34' }}>
      <Toolbar>
        <DirectionsCarIcon sx={{ mr: 1 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          JmInterlog
        </Typography>
        <Box>
          {isAuthenticated ? (
            <>
              <Button color="inherit" component={RouterLink} to="/dashboard">
                Dashboard
              </Button>
              <Button color="inherit" onClick={logout}>
                Sair
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={RouterLink} to="/">
                Sobre
              </Button>
              <Button color="inherit" component={RouterLink} to="/login">
                Login
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;