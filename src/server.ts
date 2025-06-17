// src/server.ts
import express from 'express';
import routes from './routes';
import { setupSwagger } from './config/swagger';
import dotenv from 'dotenv';
import cors from 'cors'; // 1. Importe o pacote cors

dotenv.config();

const app = express();

// 2. Habilite o CORS para todas as requisições
// Esta linha deve vir ANTES da configuração das rotas
app.use(cors());

// Permite que o express entenda requisições com corpo em JSON
app.use(express.json());

// Configura o Swagger e as rotas da aplicação
setupSwagger(app);
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger: http://localhost:${PORT}/api-docs`);
});