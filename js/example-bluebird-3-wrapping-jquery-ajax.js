//----------------------------------------------------------
/**
 * Valid URL
 */

/**
 * Promises
 */
//Promise.resolve( $.get( 'a.json' ) )
//    .then( function ( data ) {
//        console.log( 'Then...', data );
//    } )
//    .caught( function ( error ) {
//        console.error( 'Catch...', error.status );
//    } );

/**
 * Non-Promises
 */
//$.ajax( 'a.json', {
//    success : function ( data ) {
//        console.log( 'Then...', data );
//    },
//    error   : function ( error ) {
//        console.error( 'Catch...', error.status );
//    }
//} );

//----------------------------------------------------------
/**
 * Invalid URL
 */

/**
 * Promises
 */
//Promise.resolve( $.get( 'invalid.json' ) )
//    .then( function ( data ) {
//        console.log( 'Then...', data );
//    } )
//    .caught( function ( error ) {
//        console.error( 'Catch...', error.status );
//    } );

/**
 * Non-Promises
 */
//$.ajax( 'invalid.json', {
//    success : function ( data ) {
//        console.log( 'Then...', data );
//    },
//    error   : function ( error ) {
//        console.error( 'Catch...', error.status );
//    }
//} );

//----------------------------------------------------------
/**
 * Valid URL, then invalid URL
 */

/**
 * Promises
 */
//Promise.resolve( $.get( 'a.json' ) )
//    .then( function ( data ) {
//        console.log( 'Then...', data );
//
//        return $.get( 'invalid.json' )
//    } )
//    .then( function ( data ) {
//        console.log( 'Then again...', data );
//    } )
//    .caught( function ( error ) {
//        console.error( 'Catch...', error.status );
//    } );

/**
 * Non-Promises
 */
//$.ajax( 'a.json', {
//    success : function ( data ) {
//        console.log( 'Then...', data );
//
//        $.ajax( 'invalid.json', {
//            success : function ( data ) {
//                console.log( 'Then again...', data );
//            },
//            error   : function ( error ) {
//                console.error( 'Catch...', error.status );
//            }
//        } );
//    },
//    error   : function ( error ) {
//        console.error( 'Catch...', error.status );
//    }
//} );

//----------------------------------------------------------
/**
 * Invalid URL, then valid URL with catch-all exception
 */

/**
 * Promises
 */
//Promise.resolve( $.get( 'invalid.json' ) )
//    .then( function ( data ) {
//        console.log( 'Then...', data );
//
//        return $.get( 'a.json' )
//    } )
//    .then( function ( data ) {
//        console.log( 'Then again...', data );
//    } )
//    .caught( function ( error ) {
//        console.error( 'Catch...', error.status );
//    } );

/**
 * Non-Promises
 */
//$.ajax( 'invalid.json', {
//    success : function ( data ) {
//        console.log( 'Then...', data );
//
//        $.ajax( 'a.json', {
//            success : function ( data ) {
//                console.log( 'Then again...', data );
//            },
//            error   : function ( error ) {
//                console.error( 'Catch...', error.status );
//            }
//        } );
//    },
//    error   : function ( error ) {
//        console.error( 'Catch...', error.status );
//    }
//} );

//----------------------------------------------------------
/**
 * Invalid URL, then valid URL with specific catch exception
 */

/**
 * Promises
 */
//Promise.resolve( $.get( 'invalid.json' ) )
//    .then( function ( data ) {
//        console.log( 'Then...', data );
//        return $.get( 'a.json' )
//    }, function ( error ) {
//        console.error( 'Reject in then()...', error.status );
//    } )
//    .then( function ( data ) {
//        console.log( 'Then again...', data );
//    } )
//    .caught( function ( error ) {
//        console.error( 'Catch...', error.status );
//    } );

/**
 * Non-Promises
 */
//$.ajax( 'invalid.json', {
//    success : function ( data ) {
//        console.log( 'Then...', data );
//
//        $.ajax( 'a.json', {
//            success : function ( data ) {
//                console.log( 'Then again...', data );
//            },
//            error   : function ( error ) {
//                console.error( 'Catch...', error.status );
//            }
//        } );
//    },
//    error   : function ( error ) {
//        console.error( 'Reject in then()...', error.status );
//    }
//} );

//----------------------------------------------------------
/**
 * Using spread() on two valid URLs
 */

/**
 * Promises
 */
//Promise.resolve( [$.get( 'a.json' ), $.get( 'b.json' )] )
//    .spread( function ( a, b ) {
//        console.log( 'Data for a.json...', a );
//        console.log( 'Data for b.json...', b );
//    } );

//----------------------------------------------------------
/**
 * Using spread() on one valid URL and one invalid URL - handling error together.
 * We can also use `.join` instead of `.all`
 */

/**
 * Promises
 */
//Promise.all( [$.get( 'a.json' ), $.get( 'invalid.json' )] )
//    .spread( function ( a, b ) {
//        console.log( 'Data for a.json...', a );
//        console.log( 'Data for invalid.json...', b );
//    } ).catch( function ( error ) {
//        console.error( 'Error...', error );
//    } );

//----------------------------------------------------------
/**
 * Using spread() on one valid URL and one invalid URL - handling error separately
 */

/**
 * Promises
 */
//Promise.settle( [$.get( 'a.json' ), $.get( 'invalid.json' )] )
//    .spread( function ( aStatus, bStatus ) {
//        if ( aStatus.isFulfilled() ) {
//            console.log( 'Data for a.json...', aStatus.value() );
//        }
//        else {
//            console.error( 'Error for a.json...', aStatus.error() );
//        }
//
//        if ( bStatus.isFulfilled() ) {
//            console.log( 'Data for invalid.json...', bStatus.value() );
//        }
//        else {
//            console.error( 'Error for invalid.json...', bStatus.error() );
//        }
//    } );
