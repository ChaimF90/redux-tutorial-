var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});

async function addPerson(person) {
    let id = await knex('people').insert(person);
    let newPerson = await knex('people').select().where("id", id[0]).first();
    return newPerson;
}

async function deletePerson(id) {
    return await knex('people').where('id', id).del();
}

async function getAllPeople() {
    return await knex('people').select();
}



export {
    addPerson,
    deletePerson,
    getAllPeople
}





