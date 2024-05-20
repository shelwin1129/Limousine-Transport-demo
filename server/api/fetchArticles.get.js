import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const pages = await prisma.article.findMany();
    return pages;
})