const { dbRickAndMorty } = require('./src/database/DB_connection.js');

const server = require('./src/server.js')

const PORT = process.env.PORT || 3001; 


async function main () {
    server.listen(PORT, console.log(`server raised in port: ${PORT}`));
    
    try {
        await dbRickAndMorty.sync({force: false});
        console.log('Connection has been established successfully.');        
    } catch (error) {
        console.log('Unable to connect to the database:', error);        
    }
}

main()