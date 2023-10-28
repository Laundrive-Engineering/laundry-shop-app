const development = {
  username: 'postgres',
  password: 'password123',
  database: 'laundrivedev_db',
  host: '127.0.0.1',
  dialect: 'postgres',
};

// const test: DatabaseConfig = {
//   username: 'root',
//   password: null,
//   database: 'database_test',
//   host: '127.0.0.1',
//   dialect: 'postgres',
// };

const production = {
  username: process.env.NEXT_PUBLIC_DB_USER || '',
  password: process.env.NEXT_PUBLIC_DB_PASSWORD || '',
  database: process.env.NEXT_PUBLIC_DB_NAME || '',
  host: process.env.NEXT_PUBLIC_DB_HOST || '',
  dialect: 'postgres',
};

const config = {
  development,
  production,
};

module.exports = config;
