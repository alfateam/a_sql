function act(c) {
	c.expected = "select order.oOrderId as sorder0,order.oCustomerId as sorder1 from order order where order.oOrderId=2 AND order.discriminatorColumn='foo' AND order.discriminatorColumn2='baz' order by order.oOrderId";
	c.filter = c.orderTable.id.eq(2);	
	c.newQuery();
	
}

module.exports = act;