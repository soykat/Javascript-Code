// function add(a, b){
//    var result = a + b
//    console.log(result)
// }
// add(10,20)
// add(5,6)
// add(40,50)

// var arr1 =[1, 2, 3]
// var arr2 =[5, 7, 9,50,4,6] 
// var arr3=[9, 7, 1,8,12]

// var sum1 = 0
// for(var i = 0; i<arr1.length; i++) {
//     sum1 +=arr1[i]
// }
// console.log(sum1)

// var sum2 = 0
// for(var i = 0; i<arr2.length; i++) {
//     sum2 +=arr2[i]
// }
// console.log(sum2)

// var sum3 = 0
// for(var i = 0; i<arr3.length; i++) {
//     sum3 +=arr3[i]
// }
// console.log(sum3)

// 

// function sumOfArray(arr){
    
// var sum = 0
// for(var i = 0; i<arr.length; i++) {
//     sum +=arr[i]
// }
// console.log(sum)

// }
// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)

// 
function test(a,b,c){
    for(var i=0; i<arguments.length; i++){
        console.log(arguments[i])

    }

}
test(20,10,30)


function addAll(){
    var sum =0
    for(var i =0; i<arguments.length; i++){
        sum +=arguments[i]
    }
    console.log(sum)
}
addAll(1, 20, 3)
addAll(2, 3, 5, 6, 8, 25, 33, 14)














