/**
 * 'Releasing Zalgo' bug. Once JQuery's Promise is resolved, it will immediately execute the passed function after that.
 *
 * Ref: http://blog.ometer.com/2011/07/24/callbacks-synchronous-and-asynchronous/
 * Ref: http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony
 */
function timeout() {
    var d = $.Deferred();
    setTimeout( function () {
        d.resolve();
    }, 1000 );
    return d.promise();
}

console.log( 'This' );
var p = timeout();
p.then( function () {
    console.log( 'expected from an async api.' );
} );
console.log( 'is' );

//console.log( 'It' );
//p.then( function () {
//    console.log( 'WHAT!!!!!' );
//} );
//console.log( 'Comes' );

//setTimeout( function () {
//    console.log( 'He' );
//    p.then( function () {
//console.log( 'WHAT!!!!!' );
//    } );
//    console.log( 'Comes' );
//}, 2000 );

//setTimeout( function () {
//    console.log( 'She' );
//    p.then( function () {
//console.log( 'WHAT!!!!!' );
//    } );
//    console.log( 'Comes' );
//}, 3000 );

