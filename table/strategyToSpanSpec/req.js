var a = require('a');
var requireMock = a.requireMock;
var table = {};

function act(c){
	c.table = table;
	c.mock = a.mock;	
	c.newCollection = requireMock('../newCollection');
	c.newLeg = requireMock('./strategyToSpan/newLeg');
	c.sut = require('../strategyToSpan');
}

module.exports = act;