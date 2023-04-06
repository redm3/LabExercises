const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Comment.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
            true, primaryKey: true
    },
    post_id: {
        type: DataTypes.INTEGER, allowNull: false, required: true,
        references: {
            model: 'posts', // table name
            key: 'id' // column name in the table
        }
    },
    user_id: {
        type: DataTypes.INTEGER, allowNull: false, required: true,
        references: {
            model: 'users', // table name
            key: 'id' // column name in the table
        }
    },
    comment: {
        type: DataTypes.TEXT, allowNull: false, required: true
    },
    created_at: {
        type: DataTypes.DATE, allowNull: false,
        defaultValue: sequelizeInstance.literal('CURRENT_TIMESTAMP')
    }
},
    {
        sequelize: sequelizeInstance, modelName: 'comments', //use lowercase plural format
        timestamps: false, freezeTableName: true
    }
)
module.exports = Comment;