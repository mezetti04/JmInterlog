import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

function HomePage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}> {/* my: margem no eixo y */}
        <Paper elevation={3} sx={{ p: 4 }}> {/* p: padding */}
          <Typography variant="h4" component="h1" gutterBottom>
            Sobre o Sistema JmInterlog
          </Typography>
          <Typography variant="body1" paragraph>
            Bem-vindo ao sistema de gerenciamento de logística da JmInterlog.
          </Typography>
          <Typography variant="body1" paragraph>
            Esta aplicação foi desenvolvida para otimizar o controle de veículos e entregas,
            oferecendo uma solução robusta e intuitiva para a administração de frotas.
            Para acessar o painel de gerenciamento, por favor, realize o login.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default HomePage;