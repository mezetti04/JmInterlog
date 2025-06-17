// src/services/authService.js
import axios from 'axios';

// A URL agora aponta para a rota de login de funcionário
const API_URL = 'http://localhost:3000/login';

// Função de login agora recebe email e senha
export const login = async (email, senha) => {
  try {
    const response = await axios.post(API_URL, { email, senha });
    if (response.data.token) {
      localStorage.setItem('user_token', response.data.token);
    }
    return response.data;
  } catch (error) {
    // Lança a mensagem de erro da API para ser capturada no componente
    throw error.response?.data?.message || 'Erro ao tentar fazer login.';
  }
};

export const logout = () => {
  localStorage.removeItem('user_token');
};

export const getToken = () => {
  return localStorage.getItem('user_token');
};