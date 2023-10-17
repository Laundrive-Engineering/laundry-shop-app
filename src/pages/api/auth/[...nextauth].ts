import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    process.env.VERCEL_ENV === "preview"
      ?
      CredentialsProvider({
        type: 'credentials',
        credentials: {},
        async authorize(credentials, req) {
          // eslint-disable-next-line prettier/prettier
          const { email, password } = credentials as {
            email: string;
            password: string;
          };
          // perform you login logic
          // find out user from db
          if (email !== 'admin@gmail.com' || password !== '1234') {
            throw new Error('invalid credentials');
          }

          // if everything is fine
          return {
            id: '1234',
            name: 'John Doe',
            email: 'john@gmail.com',
            role: 'admin',
          };

          // const res = await fetch(
          //   `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/auth/login`,
          //   {
          //     method: 'POST',
          //     body: JSON.stringify(credentials),
          //     headers: {
          //       'Content-Type': 'application/json',
          //     },
          //   }
          // );

          // const user = await res.json();

          // if (res.ok && user) {
          //   return user;
          // } else {
          //   return null;
          // }
        },
      })
      : GoogleProvider({
        clientId: 'test222',
        clientSecret: 'clientSecret',
      }),
  ],
  pages: {
    signIn: '/auth/signin',
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    jwt(params) {
      // update token
      // if (params.user?.role) {
      //   params.token.role = params.user.role;
      // }
      // return final_token
      return params.token;
    },
  },
};

export default NextAuth(authOptions);
