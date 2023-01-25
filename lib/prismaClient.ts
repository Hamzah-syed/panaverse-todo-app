import { PrismaClient } from '@prisma/client'

const g = global as unknown as { prisma: PrismaClient }


let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!g.prisma) {
        g.prisma = new PrismaClient();
    }
    prisma = g.prisma;
}


export interface ITodo {
    // sort_number: number;
    id: number;
    task: string;
}

export default prisma;

