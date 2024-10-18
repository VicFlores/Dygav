import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcrypt';
import User from '@/models/user';
import { connectDB } from '@/utils/db/database';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        await connectDB();

        let userFound = await User.findOne({
          email: credentials?.email,
        }).select(['+password', '+role']);

        if (!userFound) throw new Error('Invalid credentials');

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          userFound.password
        );

        if (!passwordMatch) throw new Error('Invalid credentials');

        userFound = userFound.toObject();

        delete userFound.password;

        return userFound;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRECT as string,
    }),
  ],

  callbacks: {
    async signIn({ account, profile, user }) {
      if (account?.provider === 'google') {
        try {
          await connectDB();

          const userFound = await User.findOne({
            email: profile?.email,
          }).select('+role');

          if (!userFound) {
            const randomPassword = Math.random().toString(36).slice(-12);
            const hashedPassword = await bcrypt.hash(randomPassword, 12);

            await User.create({
              fullname: profile?.name,
              email: profile?.email,
              password: hashedPassword,
            });

            return true;
          }

          user.role = userFound.role;
          user.id = userFound._id;

          return true;
        } catch (error) {
          console.error(error);
          return false;
        }
      }
      return true;
    },

    jwt({ token, user }) {
      if (user) {
        token.user = {
          ...user,
          id: user.id,
          role: user.role,
        };
      }

      return token;
    },
    session({ session, token }) {
      session.user = token.user as any;

      return session;
    },
  },

  pages: {
    signIn: '/login',
  },
});
