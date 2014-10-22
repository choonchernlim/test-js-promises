function timeout() {
    return Promise.delay( 1000 );
}

//----------------------------------------------------------
/**
 * Use `.caught` to catch specific error or any error
 */
//timeout()
//    .then( function () {
//        console.error( 'Throwing...' );
//        throw new SyntaxError( 'Forcing syntax error...' );
//    } )
//    .caught( SyntaxError, function ( error ) {
//        console.error( 'Catch Syntax Error...' + error );
//    } )
//    .caught( function ( error ) {
//        console.error( 'Catch Any Error...' + error );
//    } )
//    .lastly( function () {
//        console.log( 'Finally...' );
//    } );

//----------------------------------------------------------
/**
 * Another example of throwing a string
 */
//timeout()
//    .then( function () {
//        console.error( 'Throwing...' );
//        throw 'Forcing error string...';
//    } )
//    .caught( SyntaxError, function ( error ) {
//        console.error( 'Catch Syntax Error...' + error );
//    } )
//    .caught( function ( error ) {
//        console.error( 'Catch Any Error...' + error );
//    } )
//    .lastly( function () {
//        console.log( 'Finally...' );
//    } );



