import { DataTypes } from "sequelize";
import { sequelize } from "../db/dataBase.js";
import { shopping } from './shopping.model.js'
import { sale } from './sale.model.js'


export const user = sequelize.define('Users', {

    ID_User: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    }, 

    Type_Document: {
        type: DataTypes.STRING(15), 
        allowNull: false, 
        validate:{
            notNull:{
                msg: "El tipo de documento es requerido"
            }
        }
    },

    Document: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        unique: true,
        validate: {
            notNull: {
                msg: 'El documento es requerido'
            },
            isNumeric: {
                msg: 'El campo de número de identificacion debe contener solo números'
            }
        }
    },

    Name_User: {
        type: DataTypes.STRING(30), 
        allowNull: false, 
        validate: {
            notNull: {
                msg: 'El nombre es requerido'
            },
            customValidate(value) {
                if (!/^[A-ZÑñ][a-zA-ZÑñ\s]*$/.test(value)) {
                    throw new Error('Se debe comenzar con mayúscula y puede contener letras, espacios y la letra "ñ".');
                }
            }
        }
    },

    LastName_User:{
        type: DataTypes.STRING(30), 
        allowNull: false, 
        validate:{
            notNull: {
                msg: 'El apellido es requerido'
            },
            customValidate(value) {
                if (!/^[A-ZÑñ][a-zA-ZÑñ\s]*$/.test(value)) {
                    throw new Error('Se debe comenzar con mayúscula y puede contener letras, espacios y la letra "ñ".');
                }
            }
        }
    },

    Email: {
        type: DataTypes.STRING(80),
        allowNull: true, 
        unique: true
    }, 

    Password: {
        type: DataTypes.STRING,
        allowNull: true
        
    },

    Restaurant: {
        type: DataTypes.STRING(15),
        allowNull: true
    },

    State: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El estado es requerido'
            }
        }
    }
}, {
    timestamps: false
});

user.hasMany(shopping, {
    foreignKey: {
        name: 'User_ID',
        allowNull: false,
    },
    sourceKey: 'ID_User'
})

shopping.belongsTo(user, {
    foreignKey: {
        name: 'User_ID',
        allowNull: false,
    },
    targetKey: 'ID_User'
})

user.hasMany(sale, {
    foreignKey: 'User_ID',
    sourceKey: 'ID_User'
})

sale.belongsTo(user, {
    foreignKey: 'User_ID',
    targetKey: 'ID_User'
})