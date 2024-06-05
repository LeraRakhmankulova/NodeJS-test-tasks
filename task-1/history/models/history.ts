import { DataTypes } from 'sequelize';
import sequelize from '../middlewares/db';

const History = sequelize.define('history', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  action: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  details: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
});

History.sync();

export default History;
