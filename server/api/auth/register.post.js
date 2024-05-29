import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new  PrismaClient();

export default defineEventHandler(async (event) =>  {
    const register_data = await readBody(event);
    const {username, password, confirmPwd, role, status, email} = register_data;

    if(!username || !password || !confirmPwd || !status || !email ) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "Missing required fields",
      })
    }

    const existingUser = await prisma.users.findUnique({
      where: { username }
    })

    if(existingUser) {
      throw createError({
        statusCode: 409,
        statusMessage: "Conflict",
        message: "Username already exists",
      });
    }

    if (password !== confirmPwd) {
      throw createError({
        statusCode: 420,
        statusMessage: "Bad Request",
        message: "Passwords do not match",
      });
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await prisma.users.create({
        data: {
          username,
          password: hashedPassword,
          role,
          email,
          status,
        },
      });
  
    return {user, password: undefined};
})