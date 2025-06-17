// src/routes/index.ts
import { Router } from 'express';
import entregaRoutes from './entrega.routes';
import veiculoRoutes from './veiculo.routes';
import authRoutes from './auth.routes'; // Importa o roteador de autenticação

const router = Router();

// Define os prefixos para cada conjunto de rotas
router.use('/entregas', entregaRoutes);
router.use('/veiculos', veiculoRoutes);

// Esta linha diz: "Qualquer requisição para '/auth' será gerenciada pelo 'authRoutes'"
router.use('/auth', authRoutes);

export default router;