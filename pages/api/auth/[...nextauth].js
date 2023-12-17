import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from 'axios';
import { axiosApi } from '@/utils/baseUrl';

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
   
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  
  ],
  callbacks: {
    async session({ token, session }) {
      if (!session) return session;

      if (session.user) {
        session.user.token = token.token;
      }

      console.log('session', session);
      return session;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        if (account.provider === 'google') {
          const name = profile.name;
          const email = profile.email;

          const payload = { name, email };
          await axios.post(`${axiosApi.baseUrl}/api/v1/auth/create`, payload);

          const url = `${axiosApi.baseUrl}/api/v1/auth/signin`;
          const id_token = account.id_token;
          const response = await axios.post(url, { id_token });
          token.token = response.data;
        }
      }

      return token;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
});
