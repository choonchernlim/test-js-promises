function timeout() {
    return Promise.delay( 1000 );
}

console.log( "This" );
var p = timeout();
p.then( function () {
    console.log( "expected from an async api." );
} );
console.log( "is" );

//console.log( "It" );
//p.then( function () {
//    console.log( 'WHAT!!!!!' );
//} );
//console.log( "Comes" );

//setTimeout( function () {
//    console.log( "He" );
//    p.then( function () {
//        console.log( 'WHAT!!!!!' );
//    } );
//    console.log( "Comes" );
//}, 2000 );

//setTimeout( function () {
//    console.log( "She" );
//    p.then( function () {
//        console.log( 'WHAT!!!!!' );
//    } );
//    console.log( "Comes" );
//}, 3000 );

