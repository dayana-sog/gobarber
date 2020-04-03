import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import Recipients from '../app/models/Recipients';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, Recipients, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  // Faz a conexão com a base de dados.
  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
