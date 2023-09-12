import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import axios from "axios";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const { nik, password } = credentials;
          const res = await axios.post(
            `${process.env.NEXTAUTH_URL}/api/login`,
            {
              nik,
              password,
            }
          );
          const user = res.data;
          const matchPassword = await bcrypt.compare(password, user.password);

          if (!user) {
            return null;
          }

          if (!matchPassword) {
            return null;
          }

          console.log(user);
          return {
            nik: user.nik,
            username: user.username,
            workgroup: user.workgroup,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
