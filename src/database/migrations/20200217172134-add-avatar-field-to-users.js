module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', // Qual tabela quer adcionar uma coluna.
      'avatar_id', // Qual é o nome da coluna
      {
        type: Sequelize.INTEGER, // Referencia apenas o Id da imagem
        references: { model: 'files', key: 'id' }, // Referência e chave estrangeira.
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      }
    );
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
