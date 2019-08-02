function purify(value) {
	if(value == null)
		return null;
	if (typeof(value) !== 'number')
		throw new Error('\'' + value + '\'' + ' is not a number');
	return value;
}

module.exports = purify;