import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { UserModel } from "../../../models";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        const user = await UserModel.findOne({
          email: email,
        }).select("+password");

        if (!user) {
          throw new Error("USER_NOT_FOUND");
        }
        const valid = await compare(password, user.password);
        if (!valid) {
          throw new Error("INVALID_PASSWORD");
        }

        return {
          id: "1234",
          username: user.username,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      return { ...session, user: { username: token.username } };
    },
  },
};
export default NextAuth(authOptions);
