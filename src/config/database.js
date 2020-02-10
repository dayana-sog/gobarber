module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'dbfastfeet',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
