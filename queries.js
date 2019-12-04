const {Client} = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});


const getUsers = (request, response) => {
    client.query('SELECT * FROM MEMBERS', (error, results) => {
        if(error){
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const getUserById = (request, response) => {
    const id = request.params.id;
    client.query('SELECT * FROM MEMBERS WHERE studentId = $1', [id], (error, results) => {
        if(error){
            throw error;
        }
        
        response.status(200).json(results.rows[0]);
    });
}

module.exports = {
    getUsers,
    getUserById
};