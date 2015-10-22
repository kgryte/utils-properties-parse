'use strict';

// MODULES //

var properties = require( 'properties' );


// PARSE //

/**
* FUNCTION: parse( value[, options] )
*	Attempts to parse a value as .properties.
*
* @param {*} value - value to parse
* @param {Object} [options] - function options
* @returns {Object|Error} parsed value or an error
*/
function parse( value, options ) {
	try {
		return properties.parse( value, options );
	} catch ( error ) {
		return error;
	}
} // end FUNCTION parse()


// EXPORTS //

module.exports = parse;
