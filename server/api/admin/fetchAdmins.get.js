import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const admins = await prisma.users.findMany({
        where: {
            role: "ADMIN",
        }
    })
    return admins;
})