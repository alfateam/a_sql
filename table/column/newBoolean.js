var nextNewBoolean = _nextNewBoolean;

function newBoolean(filter) {
	var c = {};
	
	c.sql = filter.sql;
	c.parameters = filter.parameters;
	
	c.append = function(other) {
		var nextFilter = filter.append(other);
		return nextNewBoolean(nextFilter);
	}

	c.prepend = function(other) {
		var nextFilter = filter.prepend(other);
		return nextNewBoolean(nextFilter);
	}

	c.and = function(other) {
		var nextFilter = filter.append(' AND ').append(other);
		var next =  nextNewBoolean(nextFilter);
		for (var i = 1; i < arguments.length; i++) {
			next = next.and(arguments[i]);
		};
		return next;
	}

	c.or = function(other) {
		var nextFilter = filter.prepend('(').append(' OR ').append(other).append(')');
		var next =  nextNewBoolean(nextFilter);
		for (var i = 1; i < arguments.length; i++) {
			next = next.or(arguments[i]);
		};
		return next;
	}
	
	return c;
}

function _nextNewBoolean(filter) {
	nextNewBoolean = require('./newBoolean');
	return nextNewBoolean(filter);
}

module.exports = newBoolean;
