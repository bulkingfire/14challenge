const client = require('./User');
const write = require('./Post');

client.hasMany(write, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

write.belongsTo(client, {
  foreignKey: 'user_id'
});

module.exports = { User: client, Post: write };
