import { Sequelize } from 'sequelize';
import { createUserModel } from '../model/userSchema.js';

let UserModel = null;
  export const connection = async () =>{
    const sequelize = new Sequelize('test1', 'postgres', '122334', {
        host: 'localhost',
        dialect: 'postgres'
      });
    
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        UserModel = await createUserModel(sequelize); // In Sequelize, when you define a model, you need to pass the sequelize instance because this instance is responsible for managing the connection to the database, executing queries, and interacting with the database itself. The sequelize instance acts as the context or manager for all models, linking them to the specific database
        await sequelize.sync();
        console.log("Databese Synced");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

  export {UserModel}

