module.exports = (sequelize, DataTypes) => {
  const Patients = sequelize.define('Patients', {
    patient_id: {
    type: DataTypes.INTERGER,
    primaryKey: true,
    autoIncrement: true,
    },
    fullname: DataTypes.STRING,
    plan_id: { type: DataTypes.INTERGER, foreignKey: true },
  },
  {
  timestamps: false,
  });
  Patients.associate = (models) => {
    Patients.belongsTo(models.plans, { foreignKey: 'plan_id', as: 'plan' });
  };
  return Patients;
};  