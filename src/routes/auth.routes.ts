// src/routes/auth.routes.ts
import { Router } from 'express';
import { loginController } from '../controllers/authFuncionario.controller';

const router = Router();

// Esta linha define a rota para o método POST que responde em '/login'
// O caminho completo se torna: /auth (do index.ts) + /login (daqui) = /auth/login
router.post('/login', loginController);

export default router;