// chapter5
//  string in javascript


var str = 'Something'
var str2 = String('Something')
console.log(str2)

//

var n =10
var str = String(n)
console.log(str)
//Escape Notation

var str = 'This is a \nString' 
console.log(str)


// *****String Comparision*******//

var a = 'aaaaaZ'
var b = 'aaaaaz'
console.log(a > b)

//

console.log('a' > 'Z')
//


console.log('001' == 1)

//  concat method //

var a = 'I am'
var b = 'Md Ariful Islam'
var c = a.concat( ' ', b)
// var d = c.substring(15, 2)
// console.log(d)

console.log(c.startsWith('I am'))
console.log(c.endsWith('Is44555'))
console.log(a.toUpperCase())
console.log(b.toLowerCase())
console.log('       jktgytdsfukgytr     '.trim())
console.log(c.split(' '))

// 

var str = 'Md Ariful Islam'
var length = 0
while(true){
    if(str.charAt(length) == ''){
        break
    }else {
        length++
    }
}
console.log(length)
console.log(str.length)






