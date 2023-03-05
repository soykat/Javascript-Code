// function test() {
//     var msg = 'I am learning Lexical and closure'
//     function sayMsg() {
//         console.log(msg)
//     }
//     sayMsg()
// }



// function test() {
//     var msg = 'I am learning Lexical and closure'
//    return function () {
//         console.log(msg)
//     }
    
// }
// var sayMsg =test()
// sayMsg()


// test()


for(var i=1; i<=5; i++) {
    (function(n){
        setTimeout(function(){
        console.log(n)
    },1000*n)
})(i)
}
