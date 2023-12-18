import app from './app.js'
import { PORT } from './config.js';
import { sequelize } from './db/dataBase.js'

async function main() {
    try{
        await sequelize.sync({force: false})
        app.listen(PORT);
        console.log('Server on port ', PORT);
    } catch (error) {
        console.error('Unable to connect: ', error);
    }
}

main();