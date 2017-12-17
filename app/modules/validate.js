module.exports = ({
  cep: (req, res, next) =>  
    (req.query.code.length < 8 || req.query.code.length > 9) 
        ? res.status(400).json({title: "Cep", message: "Cep inválido!" })
        : next()
})
