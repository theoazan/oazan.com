// src/types/next-auth.d.ts
import 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken?: string;
    guilds?: any[];
    user: {
      id: string;
      username?: string;
    } & DefaultSession['user'];
  }
}
