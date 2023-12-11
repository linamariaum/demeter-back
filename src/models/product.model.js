import { DataTypes } from "sequelize";
import { sequelize } from "../db/dataBase.js";
import { productDetail } from './productdetail.model.js'
import { saleDetail } from './saledetail.model.js'

export const product =  sequelize.define('Products', {

    ID_Product: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true 
    }, 

    Name_Products: {
        type: DataTypes.STRING(30), 
        allowNull: false, 
        validate:{
            notNull:{
                msg: "El nombre del producto es requerido"
            },
            customValidate(value) {
                if (!/^[A-ZÑñ][a-zA-ZÑñ\s]*$/.test(value)) {
<<<<<<< Updated upstream
                    throw new Error('Se debe comenzar con mayúscula y puede contener letras, espacios y la letra "ñ".');
=======
                    throw new Error('Nombre: Se debe comenzar con mayúscula y puede contener letras, espacios y la letra "ñ".');
>>>>>>> Stashed changes
                }
            }
        }
    },

    Price_Product: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            notNull:{
                msg: "El precio del producto es requerido"
            }, 
            isInt: true
        },
    },

    Image: {
<<<<<<< Updated upstream
        type: DataTypes.BLOB,
=======
        type: DataTypes.STRING,
>>>>>>> Stashed changes
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El estado es requerido'
            }
        }
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

product.hasMany(productDetail, {
    foreignKey: {
        name: 'Product_ID',
        allowNull: false,
    },
    sourceKey: 'ID_Product'
})

productDetail.belongsTo(product, {
    foreignKey: {
        name: 'Product_ID',
        allowNull: false,
    },
    targetKey: 'ID_Product'
})

product.hasMany(saleDetail, {
    foreignKey: {
        name: 'Product_ID',
        allowNull: false,
    },
    sourceKey: 'ID_Product'
})

saleDetail.belongsTo(product, {
    foreignKey: {
        name: 'Product_ID',
        allowNull: false,
    },
    targetKey: 'ID_Product'
})