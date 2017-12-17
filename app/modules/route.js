module.exports = app => {
    const Controller = require('./controller')(app)
    const Validate = require('./validate')
    app.route(`/cep`)
        .get(Validate.cep, Controller.cep)
}