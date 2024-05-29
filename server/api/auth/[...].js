import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { useToastListStore } from '~/stores/ToastListStore';

const prisma = new PrismaClient();

export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,
  pages: {
    signIn: "/admin",
  },
  providers: [
    // @ts-expect-error  .default here is for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          const user = await prisma.users.findUnique({
            where: {
              username: credentials.username
            }
          });

          if(!user) {
            throw 'Invalid credentials';
          }
  
          const isCorrectPassword = await bcrypt.compare(credentials.password, user.password)
          if (!isCorrectPassword) {
            throw 'Invalid credentials';
          }

          return {...user, password: undefined};
          
        } catch (err) {
          return console.log(err);
        }
      }
    })
  ],

  session: {
    strategy: "jwt",
    maxAge: 1800, // 30 mins session only, after will need to reauthenicate
  },

 callbacks: {

    async jwt({token, user, account, profile}) {
      if (user) {
        token = {
          ...token,
          ...user,
        }
      }

      return token;
    },

    async session({session, token}) {
      session.user = {
        ...token,
        ...session.user
      };

      return session;
    }
  }
});
