// src/controllers/authFuncionario.controller.ts
import { Request, Response,RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import * as funcionarioRepository from '../repositories/funcionario.repository';

export const loginController = async (req: Request, res: Response) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  try {
    const funcionario = await funcionarioRepository.findFuncionarioByEmail(email);
    if (!funcionario) {
      return res.status(401).json({ message: 'Funcionário não encontrado.' });
    }

    const senhaValida = await argon2.verify(funcionario.senha, senha);
    if (!senhaValida) {
      return res.status(401).json({ message: 'Senha inválida.' });
    }

    const token = jwt.sign(
      { id: funcionario.id, tipo: funcionario.tipo, nome: funcionario.nomeFunc },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '8h' }
    );

    res.json({ message: 'Login de funcionário realizado com sucesso!', token });

  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};
