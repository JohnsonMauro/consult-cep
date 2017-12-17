const express = require( 'express' );
const request = require( 'request' );
const app = express();

require('./app/modules/route')(app)

app.listen( 9000 )

console.log( 'Server started! At http://localhost:9000' )
