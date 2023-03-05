function add(a,b){
    return a+b
}
// A function can be stored in a variable
var sum =add
console.log(sum(4,5))
console.log(typeof sum)

// A function can be stored in an array

var arr=[]
arr.push(add)
console.log(arr)
console.log(arr[0](5,3))

// A function can be stored in a object
var obj = {
    sum :add
}
console.log(obj)
console.log(obj.sum(5,8))

// we can ereate function as need
setTimeout(function(){
    console.log('I have created......')
},100)







