import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2, // padding vertical
        px: 2, // padding horizontal
        mt: 'auto', // margem superior automática para empurrar para o final
        backgroundColor: '#282c34',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} JmInterlog. Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;