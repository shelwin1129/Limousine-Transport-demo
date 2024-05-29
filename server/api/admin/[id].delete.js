import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const admins = await prisma.users.delete({
        where: { id: parseInt(event.context.params.id) },
    })
    return admins;
})