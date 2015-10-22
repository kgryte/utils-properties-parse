'use strict';

var fs = require( 'fs' ),
	path = require( 'path' ),
	parse = require( './../lib' );

// Load a .properties file...
var file = path.resolve( __dirname, '../test/fixtures/config.properties' );
file = fs.readFileSync( file, {
	'encoding': 'utf8'
});

// Attempt to parse the file...
file = parse( file );
console.dir( file );
