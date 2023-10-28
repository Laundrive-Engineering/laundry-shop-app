import { NextApiRequest, NextApiResponse } from 'next';
import { SHA256 as sha256 } from 'crypto-js';
import { Sequelize, DataTypes } from 'sequelize';
// import User from '../../../db/models/user'; // Adjust the import path as needed

// const sequelize = new Sequelize({
//   dialect: 'postgres', // or your database dialect
//   username: 'postgres',
//   password: 'password123',
//   database: 'laundrivedev_db',
//   host: '127.0.0.1',
// });
// const User = require('../../../db/models/user')(sequelize, DataTypes);

import db from '../../../db/models/index';

export const hashPassword = (str: string) => {
  return sha256(str).toString();
};

interface User {
  id: number;
  createdAt: Date;
  email: string;
  username: string | null;
  password: string | null;
  roleId: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | { message: string }>
) {
  try {
    // Query to retrieve all users from the "users" table
    // const User = db.user;
    // const users: any = await User.findOne({ where: { id: '1' } });
    // res.status(200).json(users);

    // Assuming you have a User model in Prisma
    const { email, password } = req.body;

    // Check if the user exists in the database
    const existingUser = (await db.user.findOne({
      where: { email },
      raw: true,
      // eslint-disable-next-line prettier/prettier
    })) as User | null;

    console.log('existingUser---', existingUser);

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
    console.error('Database error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
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
