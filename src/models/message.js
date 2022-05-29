import { Model, DataTypes } from 'sequelize'
 
export default async function ({sequelize}) {
    class Message extends Model {}

    await Message.init ({
        message_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        message_body: {
            type: DataTypes.STRING,
            allowNull: false
        },

        message_type: {
            type: DataTypes.STRING,
            allowNull: false
        },

    }, {
        sequelize,
        modelName: 'Message',
        tableName: 'messages',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored: true
    })

    await sequelize.models.User.hasMany(Message, {
        foreignKey: 'message_to',
    })

    await Message.belongsTo(sequelize.models.User, {
        foreignKey: 'message_from',
    })
}