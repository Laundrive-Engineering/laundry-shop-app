import { PrismaClient } from '@prisma/client';
import { SHA256 as sha256 } from 'crypto-js';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

// We hash the user entered password using crypto.js
export const hashPassword = (str: string) => {
  return sha256(str).toString();
};

interface User {
  id: number;
  createdAt: Date;
  email: string;
  name: string | null;
  password: string | null;
  role: 'USER' | 'ADMIN';
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | { message: string }>
) {
  if (req.method === 'POST') {
    console.log('req.body-----', req.body);
    try {
      // Assuming you have a User model in Prisma
      const { email, password } = req.body;

      // Check if the user exists in the database
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (!existingUser) {
        return res.status(401).json({ message: 'User not found' });
      }

      // Verify the password (you should use a secure password hashing library) P@ssword12345
      if (existingUser.password !== hashPassword(password)) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      // Authentication successful
      return res.status(200).json(exclude(existingUser, ['password']));
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    // Only accept POST requests
    return res.status(405).json({ message: 'Method not allowed' });
  }
}

// eslint-disable-next-line prettier/prettier
function exclude(user: User, keys: (keyof User)[]): User {
  for (let key of keys) {
    if (user.hasOwnProperty(key)) {
      delete (user as any)[key];
    }
  }
  return user;
}
