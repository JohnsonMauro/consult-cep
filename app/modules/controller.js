module.exports = app => {
  const Helper = require('../helpers/request')
  const SanitizeCEP = require('./business').sanitizeCEP
  return {
    cep: (req, res, next) => 
      Helper.search(req.query.code, SanitizeCEP)
        .then(response => res.status(200).json(response.data))
        .catch(err => res.status(500).json(err))
  }
}
