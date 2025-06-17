// src/pages/LoginPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button, TextField, Box, Typography, Container, CircularProgress, Alert } from '@mui/material';

function LoginPage() {
  const [email, setEmail] = useState(''); // Estado agora é 'email'
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !senha) {
      setError('Por favor, preencha o email e a senha.');
      return;
    }
    
    setLoading(true);
    try {
      // Chama a função de login do nosso contexto com email e senha
      await login(email, senha);
    } catch (err) {
      setError(err.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3, borderRadius: 2, boxShadow: 3, backgroundColor: 'white' }}>
        <Typography component="h1" variant="h5">
          Login de Funcionário
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
          {error && <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{error}</Alert>}
          
          {/* Campo de formulário alterado para EMAIL */}
          <TextField
            margin="normal" required fullWidth id="email"
            label="Endereço de Email" name="email" type="email"
            autoFocus value={email} onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          
          <TextField
            margin="normal" required fullWidth name="senha"
            label="Senha" type="password" id="senha"
            value={senha} onChange={(e) => setSenha(e.target.value)}
            disabled={loading}
          />
          <Box sx={{ position: 'relative' }}>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={loading}>
              Entrar
            </Button>
            {loading && (<CircularProgress size={24} sx={{ position: 'absolute', top: '50%', left: '50%', marginTop: '-8px', marginLeft: '-12px' }}/>)}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;