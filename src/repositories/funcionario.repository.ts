// src/repositories/funcionario.repository.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const findFuncionarioByEmail = async (email: string) => {
    const funcionario = await prisma.funcionario.findUnique({
        where: { email },
    });
    return funcionario;
};