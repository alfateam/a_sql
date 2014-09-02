function act (c) {
	c.legNo = 0;
	c.leg = {};
	c.span = {};
	c.leg.span = c.span;
	c.alias = 'alias';
	c.name = 'foo';

	c.queryContext = {};
	c.filter = {};
	c.innerJoin = {};

	c.queryContext.filter = c.filter;
	c.queryContext.innerJoin = c.innerJoin;
	c.queryContext.alias = c.alias;

	c.parent.queryContext = c.queryContext;
	c.query = {};

	c.manyLegToQuery.expect([], c.alias, c.leg, c.legNo, c.filter, c.innerJoin).return(c.query);

	c.subSpan = {};

	c.result = {};
	c.resultPromise = c.then();
	c.resultPromise.resolve(c.result);
	c.executeQueries.expect(c.query).return(c.resultPromise);

	c.resultToRows.expect(c.span, c.result);

	c.queryContext.expand = c.mock();
	c.queryContext.expand.expect(c.relation);

	c.relation.toLeg = c.mock();
	c.relation.toLeg.expect().return(c.leg);	

	c.sut(c.parent, c.relation);


}

module.exports = act;