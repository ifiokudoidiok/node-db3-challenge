const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    add,
    findSteps,
    update,
    remove
}

function findSteps(id) {
    return db('steps')
    .join('schemes as s', 's.id', 'steps.scheme_id' )
    .select('steps.id', 's.scheme_name as scheme_name', 'steps.step_number','steps.instructions',).where({'s.id':id})
   }
function find(){
    return db('schemes')
}

function findById(id) {
    
    return db('schemes').where({id:id})
}

function add(scheme) {
    return db('schemes').insert(scheme).then(id =>({
        id:id[0]
    }))
}


function update(changes, id) {
    db('schemes').where({id:id}).update(changes)
    return db('schemes').where({id:id}).first()
}
function remove(id) {
    return db('schemes').where({id:id}).del()
}