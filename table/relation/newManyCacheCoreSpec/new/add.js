function act(c){
	c.parentRow = {};
	c.row = 'foo';
	c.cachedValue =  {};
	c.cachedValue2 = {};
	c.parentRow[c.alias] = c.cachedValue;
	c.parentRow[c.alias2] = c.cachedValue2;

	c.cacheCore.tryGet.expect([c.cachedValue, c.cachedValue2]).return(null);
	c.cacheCore.add.expect([c.cachedValue, c.cachedValue2], [c.row]);
	c.sut.add(c.parentRow, c.row);
}

module.exports = act;