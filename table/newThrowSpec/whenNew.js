var when = require('a').when;
var c = {};

when(c)
    .it('should return promise').assertEqual(c.expected, c.returned)
    .it('should throw received error').assertEqual(c.error, c.thrownError);