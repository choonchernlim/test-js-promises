function timeout() {
    return Promise.delay( 1000 );
}

/**
 * Typical construct
 */
//timeout()
//    .then( function () {
//        console.log( 'Throwing...' );
//        throw new Error( 'Then...' );
//    } )
//    .caught( function ( error ) {
//        console.error( 'Catch...', error );
//    } )
//    .lastly( function () {
//        console.log( 'Finally...' );
//    } );

/**
 * Observations:-
 *
 * 1. (`.catch` and `.finally`) vs (`.caught` and `.lastly`)
 * 2. When error is thrown, a promises will safely catch it and suppress it.
 * 3. Ability to return the promise object to the caller and handle over there.
 */


