const { dbRickAndMorty } = require('./src/database/DB_connection.js');

const server = require('./src/server.js')

const PORT = 3001;


async function main () {
    server.listen(PORT, console.log(`server raised in port: http://localhost:${PORT}`));
    
    try {
        await dbRickAndMorty.sync({force: false});
        console.log('Connection has been established successfully.');        
    } catch (error) {
        console.log('Unable to connect to the database:', error);        
    }
}

main()