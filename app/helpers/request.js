const axios = require('axios')
const Cep = require('../config/urls').cep
module.exports = ({
        search: (cep, SanitizeCEP) =>  axios.get(`${Cep.one}${SanitizeCEP(cep)}/json`)
})

    