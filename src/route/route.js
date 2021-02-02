const {create,findAll} = require('../../db/controller/controller')

const route = app => {
    app.post('/',create)
    app.get('/',findAll)
}

module.exports = route