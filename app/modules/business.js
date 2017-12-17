module.exports = ({
    sanitizeCEP: cep => cep.replace( /\D/g, '' )
})