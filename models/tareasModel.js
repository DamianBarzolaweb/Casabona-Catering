var pool = require ('./bd');

async function getTareas(){
    var query = 'select * from tareas';
    var rows = await pool.query(query);
    return rows;
}

module.exports = { getTareas }

