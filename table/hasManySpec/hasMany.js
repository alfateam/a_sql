var requireMock = require('a').requireMock;
var newManyRelation = requireMock('./newManyRelation');
var newGetRelatedTable = requireMock('./newGetRelatedTable');
var parentTable = {},
	joinRelation = {},
	manyRelation = {},
	getRelatedTable = {};

function act(c) {	
	c.getRelatedTable = getRelatedTable;
	c.manyRelation = manyRelation;
	c.parentTable = parentTable;
	joinRelation.childTable = parentTable;
	parentTable._relations = {};
	newManyRelation.expect(joinRelation).return(manyRelation);
	newGetRelatedTable.expect(manyRelation).return(getRelatedTable);
	c.returned = require('../hasMany')(joinRelation).as('child');
}

module.exports = act;