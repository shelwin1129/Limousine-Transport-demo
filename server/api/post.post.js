import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const articleData = await readBody(event); //read body values from the http requests 
    const { title,  author, published, components } = articleData;

    const article = await prisma.article.create({
      data: {
        title,
        author,
        published,
      },
    });

    if (components && components.length > 0) {
      await Promise.all(components.map(async (component, index) => {
        const article_component = await prisma.articleComponent.create({
          data: {
            articleId: article.article_id, //link the component to the created article
            componentType: component.type,
            order: components[index].order,
            paragraphs: components[index].paragraph,
          },
        });
        
        await prisma.image.create({
          data: {
            component_id: article_component.component_id,
            imageInBinary: component.image,
          },
        });
      }));
    }

    return articleData;
  }
);