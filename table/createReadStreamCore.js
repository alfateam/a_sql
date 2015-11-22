var newQuery = require('./readStream/newQuery');
var strategyToSpan = require('./strategyToSpan');
var negotiateRawSqlFilter = require('./column/negotiateRawSqlFilter');
var newQueryStream = require('./readStream/newQueryStream');
var deferred = require('deferred');
var domain = require('domain');

function createReadStreamCore(table, db, filter, strategy, transformer) {
    var alias = table._dbName;
    filter = negotiateRawSqlFilter(filter);
    var span = strategyToSpan(table, strategy);

    var originalDomain = process.domain || domain.create();
    originalDomain.add(transformer);

    var def = deferred();

    db.transaction()
        .then(start)
        .then(null, onError)
        .then(db.commit)
        .then(null, db.rollback)

function onError(e) {
    console.log(e.stack);
}
    function start() {
        var query = newQuery(db, table, filter, span, alias);
        var queryStream = newQueryStream(query);
        queryStream.pipe(transformer);
        queryStream.on('end', onEnd);
        queryStream.on('error', def.reject);

        function onEnd() {
            def.resolve();
        }

        return def.promise;
    }

    return transformer;
}

module.exports = createReadStreamCore;