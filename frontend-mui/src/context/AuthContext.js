import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../services/authService';

// 1. Cria o Contexto
const AuthContext = createContext(null);

// 2. Cria o Provedor (Provider)
// Este componente irá envolver nossa aplicação e gerenciar o estado
export function AuthProvider({ children }) {
  const [token, setToken] = useState(authService.getToken());
  const navigate = useNavigate();

  const isAuthenticated = !!token;

  // Efeito para verificar o token ao carregar a aplicação
  useEffect(() => {
    const storedToken = authService.getToken();
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Função de login que será usada pelos componentes
  const handleLogin = async (id, senha) => {
    const data = await authService.login(id, senha);
    setToken(data.token);
    navigate('/dashboard'); // Redireciona para o dashboard após o login
  };

  // Função de logout
  const handleLogout = () => {
    authService.logout();
    setToken(null);
    navigate('/login'); // Redireciona para a página de login após o logout
  };

  // Os valores que o provedor irá compartilhar com os componentes filhos
  const value = {
    token,
    isAuthenticated,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 3. Cria um Hook customizado para facilitar o uso do contexto
// Em vez de importar useContext e AuthContext em todo lugar, só usaremos useAuth()
export function useAuth() {
  return useContext(AuthContext);
}