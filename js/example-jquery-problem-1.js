/**
 * JQuery is not throw-safe. When an error is thrown, JQuery doesn't catch and suppress it.
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
        console.log( 'Throwing...' );
        throw new Error( 'Boo!' );
    } )
    .then( function () {
        console.log( 'Hello World' );
    }, function () {
        console.error( 'In Error Handler' );
    } )
    .then( function () {
        console.log( 'This should have run' );
    } )
    .fail( function () {
        console.error( 'But this does instead' );
    } );