var newParameterized = require('../query/newParameterized');
var extractAlias = require('./extractAlias');
var nullOperator = ' is not ';

function notEqual(column,arg,optionalAlias) {	
	var operator = '<>';
	var alias = extractAlias(optionalAlias);	
	var encoded = column.purifyThenEncode(arg);	
	if (encoded.sql() == 'null') 
		operator = nullOperator;
	var firstPart = alias + '.' + column.name + operator;
	return encoded.prepend(firstPart);		
};

module.exports = notEqual;