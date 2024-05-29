import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default defineEventHandler(async (_event) => {
  const article = await prisma.article.findMany({
    where: { published: true },
    include: {
      components: {
        include: {
          image: true
        }
      }
    }
  })
  return article
})