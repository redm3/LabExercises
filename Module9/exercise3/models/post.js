const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model { }

//Sequelize will create this table if it doesn't exist on startup
Post.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
            true, primaryKey: true
    },
    title: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    description: {
        type: DataTypes.TEXT, allowNull: false, required: true
    },
    image: {
        type: DataTypes.STRING, allowNull: true, defaultValue: null
    },
    created_at: {
        type: DataTypes.DATE, allowNull: false,
        defaultValue: sequelizeInstance.literal('CURRENT_TIMESTAMP')
    },
    user_id: {
        type: DataTypes.INTEGER, allowNull: false, required: true,
        references: {
            model: 'users', // table name
            key: 'id' // column name in the table
        }
    }
},
    {
        sequelize: sequelizeInstance, modelName: 'posts', //use lowercase plural format
        timestamps: false, freezeTableName: true
    }
)
module.exports = Post;