const express = require( 'express' );
const request = require( 'request' );
const app = express();

const isCepValid = ( cep ) => 
  ( cep.length < 8 || cep.length > 9 )
    ? new Error( 'Cep inválido' )
    : true

const sanitizeCEP = ( cep ) => cep.replace( /\D/g, '' )

const getCEP = ( req, res ) => {
  const codeFormated = sanitizeCEP( req.query.code )

  if ( isCepValid( codeFormated ) instanceof Error ) {
    res.status( 400 )
    res.send( 'Cep inválido' )
  }

  request( 'https://viacep.com.br/ws/' + codeFormated + '/json', ( err, response, body ) => {

    if ( err || body.indexOf( '400' ) > -1 ) {
      res.status( 500 )
      res.send( 'Erro interno na api' )
    } else {
      res.setHeader( 'Content-Type', 'application/json' )
      res.json( JSON.parse( body ) )
    }
  } )
}

app.get( '/cep', getCEP )

app.listen( 9000 )
console.log( 'Server started! At http://localhost:9000' )
