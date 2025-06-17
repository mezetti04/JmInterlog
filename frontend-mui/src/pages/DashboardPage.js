import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { useAuth } from '../context/AuthContext';

function DashboardPage() {
  const { logout } = useAuth();

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="body1">
            Bem-vindo ao painel de controle! Esta área é protegida.
          </Typography>
          {/* O botão de logout pode ficar aqui ou no header */}
        </Paper>
      </Box>
    </Container>
  );
}

export default DashboardPage;