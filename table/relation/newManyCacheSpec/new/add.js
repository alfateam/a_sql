function act(c){
	c.parentRow = {};
	c.result = 'foo';
	c.cachedValue = {};
	c.cachedValue2 = {};
	c.parentRow[c.alias] = c.cachedValue;
	c.parentRow[c.alias2] = c.cachedValue2;
	c.sut.add(c.parentRow, c.result);
}

module.exports = act;