function act(c){
	c.onCompleted = c.mock();
	c.parameters = {};
	c.query = {};
	c.sql = {};
	c.query.parameters = c.parameters;

	c.replaceParamChar.expect(c.query, c.parameters).return(c.sql);

	c.streamableQuery = {};
	c.newQueryStreamCore.expect(c.sql, c.parameters).return(c.streamableQuery);
	c.stream = {};
	c.runQuery.expect(c.streamableQuery).return(c.stream);

	c.log.expect(c.sql);
	c.log.expect('parameters: ' + c.parameters);

	c.returned = c.sut(c.query, c.onCompleted);
}

module.exports = act;