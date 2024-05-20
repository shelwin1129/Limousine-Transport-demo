import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const articleData = await readBody(event); // Read body values from the HTTP request

  // Destructure the fields from the body
  const { article_id, title, author, published, components } = articleData;

  // Check if the article exists
  const existingArticle = await prisma.article.findUnique({
    where: { article_id },
  });

  if (!existingArticle) {
    throw createError({ statusCode: 404, statusMessage: 'Article not found' });
  }

  // Update the article with the main fields
  const updatedArticle = await prisma.article.update({
    where: { article_id },
    data: {
      title,
      author,
      published,
    },
  });

  // Update existing components or create new components
  if (components && components.length > 0) {
    await Promise.all(components.map(async (component) => {
      if (component.component_id) {
        // Update existing component
        await prisma.articleComponent.update({
          where: { component_id: component.component_id },
          data: {
            order: component.order,
            paragraphs: component.paragraph,
          },
        });
        // Update the image if it exists
        if (component.image) {
          await prisma.image.update({
            where: { component_id: component.component_id },
            data: {
              imageInBinary: component.image,
            },
          });
        }
      } 
      //trigger if consists of new component and new image
      else {
        // Create new component
        const newComponent = await prisma.articleComponent.create({
          data: {
            articleId: article_id,
            componentType: component.type,
            order: component.order,
            paragraphs: component.paragraph,
          },
        });
        if (component.image) {
          await prisma.image.create({
            data: {
              component_id: newComponent.component_id,
              imageInBinary: component.image,
            },
          });
        }
      }
    }));
  }

  return updatedArticle;
});