function timeout() {
    return Promise.delay( 1000 );
}

timeout()
    .then( function () {
        console.log( 'Throwing...' );
        throw new Error( 'Boo!' );
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
    .catch( function () {
        console.error( 'But this does instead' );
    } );
