/**
 * JQuery doesn't handle promise rejection properly.
 *
 * @returns {*}
 */
function timeout() {
    var d = $.Deferred();

    setTimeout( function () {
        d.resolve();
    }, 1000 );

    return d.promise();
}

timeout()
    .then( function () {
        var d = $.Deferred();
        d.reject();
        return d;
    } )
    .then( function () {
        console.log( 'Hello World' );
    }, function () {
        console.error( 'In Error Handler 1' );
    } )
    .then( function () {
        console.log( 'This should have run' );
    }, function () {
        console.error( 'In Error Handler 2' );
    } )
    .fail( function () {
        console.error( 'But this does instead' );
    } );