import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';

import dbconfig from '../config';

var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../')[env];
// const { development, production }: Iconfig = config;
console.log('config', dbconfig);
var db = {}; // Initialize db here

let sequelize; // Initialize sequelize here

if (env === 'development') {
  sequelize = new Sequelize(
    dbconfig.development.database,
    dbconfig.development.username,
    dbconfig.development.password,
    {
      host: dbconfig.development.host,
      dialect: dbconfig.development.dialect,
    }
  );
} else {
  sequelize = new Sequelize(
    dbconfig.production.database,
    dbconfig.production.username,
    dbconfig.production.password,
    {
      host: dbconfig.production.host,
      dialect: dbconfig.production.dialect,
    }
  );
}

// fs.readdirSync('./src/db/models').forEach((file) => {
//   // Check if the file is a JavaScript file (you can adjust the extension as needed)
//   if (path.extname(file) === '.js' && file !== 'index.js') {
//     const modelName = path.basename(file, '.js');
//     db.user = require(`./${modelName}`)(sequelize, Sequelize);
//   }
// });
db.user = require('./user')(sequelize, Sequelize);
// npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string
// npx sequelize-cli db:migrate
// npx sequelize-cli db:seed

export default db;
