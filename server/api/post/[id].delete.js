import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const article = await prisma.article.delete({
    where: { article_id: parseInt(event.context.params.id) },
  })
  return article
})