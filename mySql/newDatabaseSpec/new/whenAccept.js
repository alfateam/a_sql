var when = require('a').when;
var c = {};

when(c)
	.it('should visit').assertDoesNotThrow(c.context.visitMySql.verify)
	